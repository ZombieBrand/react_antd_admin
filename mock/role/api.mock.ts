import { defineMock } from 'vite-plugin-mock-dev-server'
import { errorWrap, successWrap } from '../shared/utils/dataWrap'
import { roleList } from '../shared/database/role'

export default defineMock([
  {
    url: '/api/role/list',
    method: 'GET',
    body({ query }) {
      const { current = 0, pageSize = 0 } = query
      const startIndex = (Number(current) - 1) * Number(pageSize)
      const endIndex = startIndex + Number(pageSize)
      const list = roleList.slice(startIndex, endIndex)
      const total = roleList.length
      const data = {
        list,
        total
      }
      if (data) {
        return successWrap({ data })
      } else {
        return errorWrap({ message: '角色信息不存在!' })
      }
    },
    delay: 1000
  },
  {
    url: '/api/role/all/list',
    method: 'GET',
    body() {
      return successWrap({ data: roleList })
    },
    delay: 1000
  },
  {
    url: '/api/role/status/options',
    method: 'GET',
    body() {
      const options = [
        {
          label: '正常',
          value: 1
        },
        {
          label: '禁用',
          value: 0
        }
      ]
      return successWrap({ data: options })
    },
    delay: 1000
  }
])
