import { IRoleData } from '@/types/api/role'
import { ITableResult, ITableParam } from '@/types/table'
import request from '@/utils/request'

export function getRoleListApi(params: ITableParam) {
  return request.get<ITableResult<IRoleData>>('/role/list', params)
}
