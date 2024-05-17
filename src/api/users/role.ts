import { IRoleData } from '@/types/api/role'
import { ITableResult, ITableParam } from '@/types/table'
import request from '@/utils/request'

export function getRoleListApi(params: ITableParam) {
  return request.get<ITableResult<IRoleData>>('/role/list', params)
}
export function getRoleAllApi() {
  return request.get<IRoleData[]>('/role/all/list')
}

export function getRoleStatusOptionsApi() {
  return request.get<{ label: string; value: string }[]>('/role/status/options')
}
