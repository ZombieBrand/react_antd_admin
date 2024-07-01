import CreateIcon from '@/components/CreateIcon'
import { IMenuItem } from '@/types/api/menu'
import type { MenuItem } from '@/types/menu'
import urlJoin from 'url-join'
// 获取页面路径
export const getMenuPath = (list: IMenuItem[], parentPath = '/'): string[] => {
  const paths: string[] = []

  const buildPaths = (items: IMenuItem[], currentPath: string): void => {
    items.forEach(item => {
      const newPath = urlJoin(currentPath, item.path || '')
      if (Array.isArray(item.children) && item.menuType === 1) {
        buildPaths(item.children, newPath)
      } else {
        paths.push(newPath)
      }
    })
  }

  buildPaths(list, parentPath)
  return paths
}
/**
 * 在路由配置中搜索匹配特定路径的路由项。
 * 该函数递归地搜索给定路由数组，以找到与指定路径完全匹配的路由项。
 * 如果找到匹配的项，它将返回该项；如果没有找到，它将返回空字符串。
 * @param path 要搜索的路径字符串。
 * @param routes 路由配置数组，默认为空数组。
 * @returns 匹配的路由项或空字符串。
 */
export const searchRoute: any = (path: string, routes: any = []) => {
  // 遍历路由数组，寻找匹配的路由项
  for (const item of routes) {
    // 如果当前项的路径与搜索路径完全匹配，则返回当前项
    if (item.path === path) return item
    // 如果当前项有子项，递归搜索子项
    if (item.children) {
      const result = searchRoute(path, item.children)
      // 如果在子项中找到了匹配的项，则返回该项
      if (result) return result
    }
  }
  // 如果遍历完所有项都没有找到匹配的项，则返回空字符串
  return ''
}

// 递归生成菜单
export const getTreeMenu = (menuList: IMenuItem[], treeList: MenuItem[] = [], parentPath = '/') => {
  menuList.forEach((item, index) => {
    const currentPath = urlJoin(parentPath, item.path || index.toString())
    if (item.menuType === 1 && item.menuState === 1) {
      if (item.children && item.children.some(child => child.menuType === 2)) {
        return treeList.push(getItem(item.menuName, currentPath, CreateIcon(item.icon)))
      }
      treeList.push(getItem(item.menuName, currentPath, CreateIcon(item.icon), getTreeMenu(item.children || [], [], currentPath + '/')))
    }
  })
  return treeList
}

export function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}
