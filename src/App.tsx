import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, App as AntdApp, theme } from 'antd'
import AntdGlobal from './utils/AntdGlobal'
import { Toaster } from 'react-hot-toast'
import router from '@/router/index'
import './App.css'
import { useDarkMode } from '@/hook/useDarkMode'

function App() {
  const isDark = useDarkMode()
  const [primary] = useState('#1677FF')
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: primary
        }
      }}
    >
      <Toaster
        toastOptions={{
          className: 'dark:bg-slate-800 dark:text-white'
        }}
      />
      <AntdApp>
        <AntdGlobal />
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
