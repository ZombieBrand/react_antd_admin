import { useState, useRef, useMemo } from 'react'
import { Layout, theme } from 'antd'
import SideMenu from './components/Nenu'
import Logo from '@/layout/components/Logo'
import NavHeader from './components/NavHeader'
import useCachedHeight from '@/hook/useCachedHeight'
import settings from '@/config/layout'
import { Outlet } from 'react-router-dom'

const { Header, Content, Sider } = Layout

const {
  styles: { contentMargin, contentPadding }
} = settings()

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const headerRef = useRef(null)

  const headerHeight = useCachedHeight(headerRef)

  const contentHeight = useMemo(() => {
    const bodyHeight = document.documentElement.clientHeight || document.body.clientHeight
    return bodyHeight - headerHeight - contentMargin * 2
  }, [headerHeight])

  return (
    <Layout className="h-screen w-screen">
      <Sider width={230} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className="fixed bottom-0 left-0 top-0 h-full overflow-auto">
        <Logo collapsed={collapsed} />
        <SideMenu />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} ref={headerRef}>
          <NavHeader />
        </Header>
        <Content
          style={{
            margin: contentMargin,
            padding: contentPadding,
            minHeight: contentHeight,
            background: colorBgContainer
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MyLayout
