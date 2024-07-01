export interface IRoleData {
  id: string
  roleId: number
  roleName: string
  permissions: {
    buttonList: string[]
    menuList: string[]
  }
  description: string
  created_at: string
  updated_at: string
}
