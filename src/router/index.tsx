import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/views/login/index'
import Error403 from '@/views/403'
import Error404 from '@/views/404'
import ErrorPage from '@/views/error'
import Layout from '@/layout'
import Home from '@/views/home/'
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
    children: [
      {
        path: '/home',
        element: <Home />
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
