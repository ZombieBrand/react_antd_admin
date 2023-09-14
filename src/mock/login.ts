import { defineMock } from '@alova/mock'

export default defineMock(
  {
    // 捕获post请求
    '[POST]/login': ({ data }) => {
      console.log('%c [ data ]-7', 'font-size:13px; background:#67611f; color:#aba563;', data)
      return {
        code: 0,
        message: '登录成功!',
        data: {
          token: 'token'
        }
      }
    }
  },
  true
)
