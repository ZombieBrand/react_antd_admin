export interface CreateParams {
  menuName: string // 菜单名称
  icon?: string // 菜单图标
  menuType: number // 1: 菜单 2：按钮 3：页面
  menuState: number // 1：正常 2：停用
  menuCode?: string // 按钮权限标识
  parentId?: string // 父级菜单ID
  path?: string // 菜单路径
  component?: string // 组件名称
}
export interface MenuItem extends CreateParams {
  _id: string
  createTime: string
  buttons?: MenuItem[]
  children?: MenuItem[]
}
