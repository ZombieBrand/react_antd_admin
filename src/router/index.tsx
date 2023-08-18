import { createHashRouter, Navigate } from 'react-router-dom'
import Login from '@/views/login'
import NotFound from '@/views/404'
const baseRouter = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]

const router = createHashRouter(baseRouter)

export default router
