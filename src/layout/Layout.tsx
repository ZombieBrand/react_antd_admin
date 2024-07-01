import { Layout, theme } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'
import SideMenu from './components/Nenu'
import Logo from '@/layout/components/Logo'
import NavHeader from './components/NavHeader'
import settings from '@/config/layout'
import { Outlet, useLocation } from 'react-router-dom'
import { useUserStore } from '@/store/modules/user'

const { Header, Content, Sider } = Layout

const {
  styles: { contentMargin, contentPadding, sidebarWidth, headerHeight: settingHeaderHeight, sideCollapsedWidth }
} = settings()

const MyLayout = () => {
  const collapsed = useUserStore(state => state.collapsed)
  const setCollapsed = useUserStore(state => state.updateCollapsed)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const location = useLocation()
  return (
    <Layout hasSider>
      <Sider
        collapsedWidth={sideCollapsedWidth}
        width={sidebarWidth}
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
        className='fixed bottom-0 left-0 top-0 h-screen overflow-auto'
      >
        <Logo collapsed={collapsed} />
        <SideMenu collapsed={collapsed} />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? sideCollapsedWidth : sidebarWidth }} className='h-screen transition-[margin]'>
        <Header style={{ padding: 0, background: colorBgContainer, height: settingHeaderHeight }}>
          <NavHeader />
        </Header>
        <Content
          style={{
            margin: contentMargin,
            padding: contentPadding,
            background: colorBgContainer
          }}
          className='overflow-auto'
        >
          <AnimatePresence mode='wait'>
            <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className='h-full w-full' id='contentWrapper'>
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MyLayout
