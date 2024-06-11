import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/views/login/index'
import Error403 from '@/views/403'
import Error404 from '@/views/404'
import ErrorPage from '@/views/error'
import Layout from '@/layout'
import Home from '@/views/home/'
import User from '@/views/system/user/index'
import Menu from '@/views/system/menu/index'
import Role from '@/views/system/role/index'
import AuthLoader from './AuthLoader'

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
    loader: AuthLoader,
    id: 'layout',
    path: '/',
    children: [
      {
        path: 'home',
        element: <Home />,
        index: true
      },
      {
        path: 'system',
        children: [
          {
            path: 'user',
            element: <User />
          },
          {
            path: 'menu',
            element: <Menu />
          },
          {
            path: 'role',
            element: <Role />
          }
        ]
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
