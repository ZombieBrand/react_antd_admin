import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/views/login/index'
import Error403 from '@/views/403'
import Error404 from '@/views/404'
import ErrorPage from '@/views/error'
import Layout from '@/layout'
import lazyLoad from './lazyLoad'
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
        element: lazyLoad(React.lazy(() => import('@/views/home/'))),
        index: true
      },
      {
        path: 'system',
        children: [
          {
            path: 'user',
            element: lazyLoad(React.lazy(() => import('@/views/system/user/index')))
          },
          {
            path: 'menu',
            element: lazyLoad(React.lazy(() => import('@/views/system/menu/index')))
          },
          {
            path: 'role',
            element: lazyLoad(React.lazy(() => import('@/views/system/role/index')))
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

export const staticRoutes = ['/home', '/403', '/404', '/500']
