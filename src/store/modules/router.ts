import { create } from '@/store/index'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { getMenuAllListApi } from '@/api/system/menu'
import toast from 'react-hot-toast'
import type { IMenuItem } from '@/types/api/menu'

type State = {
  menuList: IMenuItem[]
}
type Action = {
  updateMenuList: () => Promise<IMenuItem[] | []>
  reset: () => void
}

const initialState: State = {
  menuList: []
}

export const useRouterStore = create<State & Action>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        updateMenuList: async () => {
          try {
            const result = await getMenuAllListApi()
            set({ menuList: result })
            return result
          } catch (error) {
            console.error(error)
            toast.error('获取菜单列表失败!')
            set({ menuList: [] })
            return []
          }
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
