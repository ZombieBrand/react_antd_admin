import { defineMock } from 'vite-plugin-mock-dev-server'
import { userInfoData, userLoginData } from '../shared/database/user'
import { errorWrap, successWrap } from '../shared/utils/dataWrap'
// https://vite-plugin-mock-dev-server.netlify.app/
export default defineMock([
  {
    url: '/api/user/info',
    method: 'GET',
    body({ query }) {
      const { token } = query
      const data = userInfoData(token)
      if (data) {
        return successWrap({ data })
      } else {
        return errorWrap({ message: '用户信息不存在!' })
      }
    },
    delay: 1000
  },
  {
    url: '/api/user/login',
    method: 'POST',
    body({ body }) {
      const { userName } = body
      const userInfo = Reflect.get(userLoginData, userName)
      if (userInfo) {
        return successWrap({ data: userInfo })
      } else {
        return errorWrap({ message: '用户名或密码错误' })
      }
    },
    delay: 1000
  }
])
