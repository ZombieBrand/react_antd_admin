import React from 'react'
import { useRequest } from 'alova'
import { loginApi } from '@/api/login'
export default function Login() {
  const { loading, data } = useRequest(() => loginApi({ name: 'mockName', pw: 'mockPw' }))
  console.log(loading, data)
  return <div>Login</div>
}
