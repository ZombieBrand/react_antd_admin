import { RouterProvider } from 'react-router-dom'
import router from '@/router/index'
import './App.css'
import { ConfigProvider, App as AntdApp, theme } from 'antd'
import { useDarkMode } from '@/hook'
import zhCN from 'antd/locale/zh_CN'
import AntdGlobal from './utils/AntdGlobal'

function App() {
    const isDarkMode = useDarkMode()
    return (
        <ConfigProvider theme={{ algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }} locale={zhCN}>
            <AntdApp>
                <AntdGlobal />
                <RouterProvider router={router} />
            </AntdApp>
        </ConfigProvider>
    )
}

export default App
