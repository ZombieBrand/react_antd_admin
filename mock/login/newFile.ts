import { defineMock } from 'vite-plugin-mock-dev-server'
import { userMap } from '../shared/database/user'
import { successWrap } from '../shared/utils/dataWrap'

export default defineMock([
  {
    url: '/api/user/info',
    method: 'POST',
    body({ body }) {
      const { name } = body
      return successWrap(Reflect.get(userMap, name))
    },
    delay: 2000
  },
  {
    url: '/api/user/login',
    method: 'POST',
    body({ body }) {
      const { userName } = body
      const userInfo = Reflect.get(userMap, userName)
      return successWrap({ data: userInfo })
    },
    delay: 2000
  }
])
