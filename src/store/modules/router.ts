import { create } from '@/store/index'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { getPermissionApi } from '@/api/permission'
import toast from 'react-hot-toast'
import type { IAuthData } from '@/types/menu'
import { getMenuPath } from '@/utils/router'

type State = {
  menuList: IAuthData['menuList']
  buttonList: IAuthData['buttonList']
  menuPathList: IAuthData['menuPathList']
}
type Action = {
  updateState: ({ menuList, buttonList, menuPathList }: State) => void
  updateMenuList: () => Promise<IAuthData['menuList'] | []>
  reset: () => void
}

const initialState: State = {
  menuList: [],
  buttonList: [],
  menuPathList: []
}

export const useRouterStore = create<State & Action>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        updateMenuList: async () => {
          try {
            const result = await getPermissionApi()
            const buttonList = result.permissionList
            const menuList = result.menuList
            const menuPathList = getMenuPath(menuList)
            set({ menuList, buttonList, menuPathList })
            return menuList
          } catch (error) {
            console.error(error)
            toast.error('获取菜单和权限失败!')
            set({ menuList: [], buttonList: [], menuPathList: [] })
            return []
          }
        },
        updateState: ({ menuList, buttonList, menuPathList }) => {
          set({ menuList, buttonList, menuPathList })
        },
        reset: () => {
          set(initialState)
        }
      }),
      {
        name: 'ADMIN_MENU',
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
)
