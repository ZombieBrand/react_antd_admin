import { getPermissionApi } from '@/api/permission/index'
import type { IAuthData } from '@/types/menu'
import { getMenuPath } from '@/utils/router'
export default async function AuthLoader() {
  let buttonList: IAuthData['buttonList'] = []
  let menuList: IAuthData['menuList'] = []
  let menuPathList: IAuthData['menuPathList'] = []
  try {
    const data = await getPermissionApi()
    buttonList = data.buttonList
    menuList = data.menuList
    menuPathList = getMenuPath(menuList)
  } catch (error) {
    buttonList = []
    menuList = []
    menuPathList = []
  }
  return {
    buttonList,
    menuList,
    menuPathList
  }
}
