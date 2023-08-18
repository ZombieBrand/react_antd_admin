import { defineMock } from '@alova/mock'

export default defineMock(
  {
    // 捕获post请求
    '[POST]/login': ({ data }) => {
      return {
        code: 200,
        message: '登录成功!',
        data
      }
    }
  },
  true
)
