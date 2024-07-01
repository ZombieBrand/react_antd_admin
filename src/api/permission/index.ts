import { IMenuItem } from '@/types/api/menu'
import request from '@/utils/request'

export function getPermissionApi() {
  return request.get<{
    menuList: IMenuItem[]
    buttonList: string[]
  }>('/user/getPermissionList')
}
