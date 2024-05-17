import { IUserData } from '@/types/api/user'
import { ITableResult, ITableParam } from '@/types/table'
import request from '@/utils/request'

export function getUserListApi(params: ITableParam) {
  return request.get<ITableResult<IUserData>>('/user/list', params)
}
