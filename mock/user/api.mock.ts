import { defineMock } from 'vite-plugin-mock-dev-server'
import { errorWrap, successWrap } from '../shared/utils/dataWrap'
import { userList } from '../shared/database/user'

export default defineMock([
  {
    url: '/api/user/list',
    method: 'GET',
    body({ query }) {
      const { current = 0, pageSize = 0 } = query
      const startIndex = (Number(current) - 1) * Number(pageSize)
      const endIndex = startIndex + Number(pageSize)
      const list = userList.slice(startIndex, endIndex)
      const total = userList.length
      const data = {
        list,
        total
      }
      if (data.list) {
        return successWrap({ data })
      } else {
        return errorWrap({ message: '用户信息不存在!' })
      }
    },
    delay: 1000
  }
])
