import React, { useState, useRef, useMemo } from 'react'
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import Logo from '@/layout/components/Logo'
import NavHeader from './components/NavHeader'
import useCachedHeight from '@/hook/useCachedHeight'

const { Header, Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />)
]

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const headerRef = useRef(null)

  const headerHeight = useCachedHeight(headerRef)

  const contentHeight = useMemo(() => {
    const bodyHeight = document.documentElement.clientHeight || document.body.clientHeight
    return bodyHeight - headerHeight - 16 * 2
  }, [headerHeight])

  return (
    <Layout className="h-screen w-screen">
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className="fixed bottom-0 left-0 top-0 h-full overflow-auto">
        <Logo />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} ref={headerRef}>
          <NavHeader />
        </Header>
        <Content
          style={{
            margin: '16px',
            padding: 24,
            minHeight: contentHeight,
            background: colorBgContainer
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default MyLayout
