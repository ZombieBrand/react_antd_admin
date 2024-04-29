import { MenuItem } from '@/types/menu'

// 获取页面路径
export const getMenuPath = (list: MenuItem[]): string[] => {
  return list.reduce((result: string[], item: MenuItem) => {
    return result.concat(Array.isArray(item.children) && !item.buttons ? getMenuPath(item.children) : item.path + '')
  }, [])
}

// 递归获取路由对象

export const searchRoute: any = (path: string, routes: any = []) => {
  for (const item of routes) {
    if (item.path === path) return item
    if (item.children) {
      const result = searchRoute(path, item.children)
      if (result) return result
    }
  }
  return ''
}

/**
 * 递归查找树的路径
 */
export const findTreeNode = (tree: MenuItem[], pathName: string, path: string[]): string[] => {
  if (!tree) return []
  for (const data of tree) {
    path.push(data.menuName)
    if (data.path === pathName) return path
    if (data.children?.length) {
      const list = findTreeNode(data.children, pathName, path)
      if (list?.length) return list
    }
    path.pop()
  }
  return []
}
