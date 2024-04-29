import React from 'react'
import { Menu } from 'antd'
import { DesktopOutlined, SettingOutlined, TeamOutlined, MenuOutlined, ApartmentOutlined } from '@ant-design/icons'
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
        key: '2_1',
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
  return <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['1']} mode='inline' theme='dark' items={items} />
}
