import http from '@/api/index'
export const loginApi = (loginData: { name: string; pw: string }) => http.Post('/login', loginData)
