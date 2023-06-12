import { RouterProvider } from 'react-router-dom'
import router from '@/router/index'
import './App.css'
import { ConfigProvider, App as AppProvider, theme } from 'antd'
import { useDarkMode } from '@/hook'
import zhCN from 'antd/locale/zh_CN'

function App() {
    const isDarkMode = useDarkMode()
    return (
        <ConfigProvider theme={{ algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }} locale={zhCN}>
            <AppProvider>
                <RouterProvider router={router} />
            </AppProvider>
        </ConfigProvider>
    )
}

export default App
