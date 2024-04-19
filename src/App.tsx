import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, App as AntdApp } from 'antd'
import router from '@/router/index'
import './App.css'
import request from './utils/request'

function App() {
  request.post('/user/info', {
    name: 'Mark',
    password: '123456'
  })
  return (
    <ConfigProvider>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
