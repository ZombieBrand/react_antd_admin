import { Navigate, createHashRouter } from 'react-router-dom'
import Error404 from '@/views/error/404'
import Error403 from '@/views/error/403'
import Login from '@/views/login'
import Dashboard from '@/views/dashboard'
// 创建路由
const router = [
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <Navigate to='/404' />
    },
    {
        path: '/404',
        element: <Error404 />
    },
    {
        path: '/403',
        element: <Error403 />
    }
]

export default createHashRouter(router)
