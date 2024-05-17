import { create } from '@/store/index'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { getRoleAllApi, getRoleStatusOptionsApi } from '@/api/users/role'
import type { IRoleData } from '@/types/api/role'
import toast from 'react-hot-toast'
import type { BaseOptionItem } from '@/types/options'

type State = {
  roleOptions: BaseOptionItem[]
  roleStatusOptions: BaseOptionItem[]
}
type Action = {
  updateRoleStatusOptions: () => void
  updateRoleOptions: () => Promise<IRoleData[] | []>
  reset: () => void
}

const initialState: State = {
  roleOptions: [],
  roleStatusOptions: []
}

export const useOptionsStore = create<State & Action>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        updateRoleStatusOptions: async () => {
          try {
            const result = await getRoleStatusOptionsApi()
            set({ roleStatusOptions: result })
            return result
          } catch (error) {
            console.error(error)
            toast.error('获取角色状态信息失败!')
            set({ roleStatusOptions: [] })
            return []
          }
        },
        updateRoleOptions: async () => {
          try {
            const result = await getRoleAllApi()
            const roleOptions = result.map((item: IRoleData) => {
              return {
                value: item.roleId,
                label: item.roleName
              }
            })
            set({ roleOptions })
            return result
          } catch (error) {
            console.error(error)
            toast.error('获取角色信息失败!')
            set({ roleOptions: [] })
            return []
          }
        },
        reset: () => {
          set(initialState)
        }
      }),
      {
        name: 'ADMIN_OPTIONS',
        storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
)
