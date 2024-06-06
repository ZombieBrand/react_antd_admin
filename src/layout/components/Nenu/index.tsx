import { useEffect, useState } from 'react'
import { Menu, ConfigProvider } from 'antd'
import { useLocation, useNavigate, useRouteLoaderData } from 'react-router-dom'
import type { IAuthData, MenuItem } from '@/types/menu'
import { useRouterStore } from '@/store/modules/router'
import { getTreeMenu } from '@/utils/router'

type Props = {
  collapsed: boolean
}

export default function SideMenu({ collapsed }: Props) {
  const [menuList, setMenuList] = useState<MenuItem[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const authLoaderData = useRouteLoaderData('layout') as IAuthData
  const updateState = useRouterStore(state => state.updateState)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // 菜单点击
  const handleClickMenu = ({ key }: { key: string }) => {
    setSelectedKeys([key])
    navigate(key)
  }

  // 初始化，获取接口菜单列表数据
  useEffect(() => {
    const treeMenuList = getTreeMenu(authLoaderData.menuList)
    setMenuList(() => treeMenuList)
    setSelectedKeys([pathname])
    updateState(authLoaderData)
  }, [])
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
      <Menu selectedKeys={selectedKeys} onClick={handleClickMenu} mode='inline' theme='dark' items={menuList} />
    </ConfigProvider>
  )
}
