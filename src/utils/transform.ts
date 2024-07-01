import type { TreeDataNode } from 'antd'
interface Item {
  id: number
  name: string
  parentId: number
}

interface ItemNode extends Item {
  children: ItemNode[]
}

/**
 * 将数组对象列表转换为树结构数组。
 *
 * @param arrayObjList - 由项组成的数组，每个项包含id和parentId属性，用于构建树结构。
 * @returns 返回一个由树节点组成的数组，每个树节点都是一个包含id、parentId和children属性的对象。
 */
export function arrayObjectToTree(arrayObjList: Item[]): ItemNode[] {
  // 使用Map来快速查找节点
  const map = new Map<number, ItemNode>()
  // 存储根节点的数组
  const roots: ItemNode[] = []

  // 遍历数组，创建节点映射
  arrayObjList.forEach(item => {
    const node = { ...item, children: [] }
    map.set(item.id, node)
  })

  // 遍历数组，为每个节点找到其父节点并构建树结构
  arrayObjList.forEach(item => {
    const node = map.get(item.id)!
    const parent = map.get(item.parentId)
    if (parent) {
      parent.children.push(node)
    } else {
      roots.push(node)
    }
  })

  return roots
}

/**
 * 将菜单列表转换为树状数据结构。
 *
 * @param menuList 菜单列表，每个菜单项包含id、name和可能的children属性。
 * @returns 返回转换后的树状数据结构数组，每个节点包含key、title和children属性。
 */
export function menuListToTreeData(menuList: Record<string, any>[], options?: { title: string; key: string }): TreeDataNode[] {
  const { title = 'menuName', key = 'id' } = options || {}
  // 使用map遍历菜单列表，将每个菜单项转换为树状数据结构的节点
  return menuList.map(item => {
    // 返回转换后的节点对象
    return {
      key: item[key], // 节点的唯一标识符，对应菜单项的id
      title: item[title], // 节点的显示名称，对应菜单项的name
      children: item.children ? menuListToTreeData(item.children) : [] // 节点的子节点列表，如果菜单项有children，则递归调用本函数转换子菜单
    }
  })
}
