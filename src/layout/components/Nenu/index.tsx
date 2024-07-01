import { useEffect, useState } from 'react'
import { Menu, ConfigProvider } from 'antd'
import { useNavigate, useRouteLoaderData, useMatches, useLocation } from 'react-router-dom'
import type { IAuthData, MenuItem } from '@/types/menu'
import { useRouterStore } from '@/store/modules/router'
import { getTreeMenu, searchRoute } from '@/utils/router'
import { router, staticRoutes } from '@/router'

type Props = {
  collapsed: boolean
}

export default function SideMenu({ collapsed }: Props) {
  const [menuList, setMenuList] = useState<MenuItem[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const authLoaderData = useRouteLoaderData('layout') as IAuthData
  const updateState = useRouterStore(state => state.updateState)
  const matches = useMatches()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  // 菜单点击
  const handleClickMenu = ({ key }: { key: string }) => {
    setSelectedKeys([key])
    navigate(key)
  }

  const handleOpenChange = (openKeys: string[]) => {
    setOpenKeys(openKeys)
  }

  // 初始化，获取接口菜单列表数据
  useEffect(() => {
    const treeMenuList = getTreeMenu(authLoaderData.menuList)
    setMenuList(() => treeMenuList)
    const pathnames = matches.slice(1).map(item => item.pathname)
    setSelectedKeys(pathnames.slice(pathnames.length - 1))
    setOpenKeys(pathnames.slice(0, pathnames.length - 1))
    updateState(authLoaderData)
  }, [matches, authLoaderData])

  const route = searchRoute(pathname, router)
  if (route && route.meta?.auth === false) {
    // 通过权限
  } else {
    // 权限判断
    if (!authLoaderData.menuPathList.includes(pathname) && !staticRoutes.includes(pathname)) {
      navigate('/403')
    }
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            groupTitleFontSize: 20,
            iconSize: collapsed ? 20 : 18,
            collapsedIconSize: 20
          }
        }
      }}
    >
      <Menu openKeys={openKeys} selectedKeys={selectedKeys} onClick={handleClickMenu} onOpenChange={handleOpenChange} mode='inline' theme='dark' items={menuList} />
    </ConfigProvider>
  )
}
