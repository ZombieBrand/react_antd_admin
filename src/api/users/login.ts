import request from '@/utils/request'
import { ILoginParams } from '@/types/api'
export function loginApi(params: ILoginParams) {
  return request.post<ILoginParams>('/user/login', params)
}
