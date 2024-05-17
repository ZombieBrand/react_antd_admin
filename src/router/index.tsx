import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import Login from '@/views/login/index'
import Error403 from '@/views/403'
import Error404 from '@/views/404'
import ErrorPage from '@/views/error'
import Layout from '@/layout'
import Home from '@/views/home/'
import User from '@/views/system/user/index'

export const router = [
  {
    path: '/',
    element: <Navigate to='/home' />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        path: 'home',
        element: <Home />,
        index: true
      }
    ]
  },
  {
    element: <Layout />,
    path: '/system',
    children: [
      {
        path: 'user',
        element: <User />,
        index: true
      }
    ]
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error403 />
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  }
]

const createRouter = createBrowserRouter(router)
export default createRouter
