import request from '@/utils/request'
import type { ILoginParams } from '@/types/api/api'
import type { ILoginResult, IUserInfoResult } from '@/types/api/login'

export function loginApi(params: ILoginParams) {
  return request.post<ILoginResult>('/user/login', params)
}
export function getUserInfoApi(params: { token: string }) {
  return request.get<IUserInfoResult>('/user/info', params, {
    showLoading: true
  })
}
