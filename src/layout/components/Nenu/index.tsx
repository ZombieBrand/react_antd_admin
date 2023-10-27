import React from 'react'
import { Menu } from 'antd'
import { DesktopOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'

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
export default function SideMenu() {
  const items: MenuItem[] = [
    getItem('工作台', '1', <DesktopOutlined />),
    getItem('系统管理', '2', <SettingOutlined />, [
      {
        label: '用户管理',
        key: '3',
        icon: <TeamOutlined />
      }
    ])
  ]
  return <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" items={items} />
}
