import { IMenuItem } from '@/types/api/menu'
import { ITableResult, ITableParam } from '@/types/table'
import request from '@/utils/request'

export function getMenuListApi(params: ITableParam) {
  return request.get<ITableResult<IMenuItem>>('/menu/list', params)
}

export function getMenuAllListApi() {
  return request.get<IMenuItem[]>('/menu/all/list')
}
