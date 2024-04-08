import { defineMock } from 'vite-plugin-mock-dev-server'
import { userMap } from '../shared/database/user'
import { successWrap } from '../shared/utils/dataWrap'
export default defineMock({
  url: 'api/user/info',
  body({ query }) {
    const { name } = query
    return successWrap(userMap[name])
  }
})
