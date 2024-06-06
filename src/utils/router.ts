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
      if (Array.isArray(item.children) && !item.buttons) {
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

/**
 * 在菜单树中查找指定路径的节点。
 *
 * @param tree 菜单树的数组表示，每个节点包含菜单名称和路径等信息。
 * @param pathName 需要查找的路径名称。
 * @param path 当前遍历的路径，用于累积遍历过程中的菜单名称。
 * @returns 如果找到匹配的路径，返回包含所有菜单名称的数组；否则返回空数组。
 */
export const findTreeNode = (tree: IMenuItem[], pathName: string, path: string[]): string[] => {
  // 如果菜单树为空，直接返回空数组
  if (!tree) return []

  // 遍历菜单树的每个节点
  for (const data of tree) {
    // 将当前节点的菜单名称加入到路径中
    path.push(data.menuName)

    // 如果当前节点的路径与目标路径匹配，返回当前路径
    if (data.path === pathName) return path

    // 如果当前节点有子节点，则递归查找子节点
    if (data.children?.length) {
      const list = findTreeNode(data.children, pathName, path)
      // 如果在子节点中找到了匹配的路径，返回该路径
      if (list?.length) return list
    }

    // 如果当前节点不是目标节点，且没有子节点或子节点中没有匹配的路径，则移除当前节点的菜单名称
    path.pop()
  }

  // 如果遍历完所有节点都没有找到匹配的路径，返回空数组
  return []
}

// 递归生成菜单
export const getTreeMenu = (menuList: IMenuItem[], treeList: MenuItem[] = [], parentPath = '/') => {
  menuList.forEach((item, index) => {
    if (item.menuType === 1 && item.menuState === 1) {
      const currentPath = urlJoin(parentPath, item.path || index.toString())
      if (item.buttons) {
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
