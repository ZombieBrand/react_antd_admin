import React from 'react'
import { Menu, ConfigProvider } from 'antd'
import { DesktopOutlined, SettingOutlined, TeamOutlined, MenuOutlined, ApartmentOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}
type Props = {
  collapsed: boolean
}
export default function SideMenu({ collapsed }: Props) {
  const navigate = useNavigate()
  const items: MenuItem[] = [
    getItem('工作台', '/home', <DesktopOutlined />),
    getItem('系统管理', 'system', <SettingOutlined />, [
      {
        label: '用户管理',
        key: '/system/user',
        icon: <TeamOutlined />
      },
      {
        label: '菜单管理',
        key: '2_2',
        icon: <MenuOutlined />
      },
      {
        label: '角色管理',
        key: '2_3',
        icon: <TeamOutlined />
      },
      {
        label: '部门管理',
        key: '2_4',
        icon: <ApartmentOutlined />
      }
    ]),
    getItem('订单管理', '3', <SettingOutlined />, [
      {
        label: '订单列表',
        key: '3_1',
        icon: <TeamOutlined />
      },
      {
        label: '订单聚合',
        key: '3_2',
        icon: <TeamOutlined />
      },
      {
        label: '司机列表',
        key: '3_3',
        icon: <TeamOutlined />
      }
    ])
  ]
  // 菜单点击
  const handleClickMenu = ({ key }: { key: string }) => {
    navigate(key)
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
      <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['1']} mode='inline' theme='dark' items={items} onClick={handleClickMenu} />
    </ConfigProvider>
  )
}
