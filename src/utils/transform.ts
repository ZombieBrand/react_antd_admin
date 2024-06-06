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
