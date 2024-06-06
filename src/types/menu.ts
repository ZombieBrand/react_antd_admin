import type { IMenuItem } from './api/menu'
import type { MenuProps } from 'antd'
export interface IAuthData {
  buttonList: string[]
  menuList: IMenuItem[]
  menuPathList: string[]
}
export type MenuItem = Required<MenuProps>['items'][number]
