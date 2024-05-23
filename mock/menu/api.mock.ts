import { defineMock } from 'vite-plugin-mock-dev-server'
import { errorWrap, successWrap } from '../shared/utils/dataWrap'
import { menuList } from '../shared/database/menu'

export default defineMock([
  {
    url: '/api/menu/list',
    method: 'GET',
    body({ query }) {
      const { current = 0, pageSize = 0 } = query
      const startIndex = (Number(current) - 1) * Number(pageSize)
      const endIndex = startIndex + Number(pageSize)
      const list = menuList.slice(startIndex, endIndex)
      const total = menuList.length
      const data = {
        list,
        total
      }
      if (data) {
        return successWrap({ data })
      } else {
        return errorWrap({ message: '菜单数据获取失败!' })
      }
    },
    delay: 1000
  },
  {
    url: '/api/menu/all/list',
    method: 'GET',
    body() {
      return successWrap({ data: menuList })
    },
    delay: 1000
  }
])
