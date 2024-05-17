import { create } from '@/store/index'
import { IUserInfoResult } from '@/types/api/login'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import type { ITheme } from '@/types/theme'

type State = {
  token: string
  userInfo: IUserInfoResult
  collapsed: boolean
  theme: ITheme
}
type Action = {
  updateToken: (token: string) => void
  updateUserInfo: (userInfo: IUserInfoResult) => void
  updateCollapsed: (collapsed: boolean) => void
  updateTheme: (theme: ITheme) => void
  reset: () => void
}

const initialState: State = {
  token: '',
  userInfo: {
    id: '',
    userName: '',
    avatar: '',
    userEmail: '',
    state: 0,
    role: 0,
    roleList: '',
    departmentId: '',
    departmentName: '',
    createId: 0
  },
  collapsed: false,
  theme: 'light'
}

export const useUserStore = create<State & Action>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        updateToken: token => set({ token }),
        updateTheme: theme => set({ theme }),
        updateUserInfo: (userInfo: IUserInfoResult) => set({ userInfo }),
        updateCollapsed: collapsed => set({ collapsed }),
        reset: () => {
          set(initialState)
        }
      }),
      {
        name: 'ADMIN_USER',
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
)
