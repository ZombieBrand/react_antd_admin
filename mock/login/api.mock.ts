import { defineMock } from 'vite-plugin-mock-dev-server'
import { userMap } from '../shared/database/user'
import { errorWrap, successWrap } from '../shared/utils/dataWrap'

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
      if (userInfo) {
        return successWrap({ data: userInfo })
      } else {
        return errorWrap({ message: '用户名或密码错误' })
      }
    },
    delay: 2000
  }
])
