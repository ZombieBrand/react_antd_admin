import { createAlovaMockAdapter } from '@alova/mock'
import GlobalFetch from 'alova/GlobalFetch'
import loginMock from './login'
const mockAdapter = createAlovaMockAdapter([loginMock], {
  // 全局控制是否启用mock接口，默认为true
  enable: true,

  // 非模拟请求适配器，用于未匹配mock接口时发送请求
  httpAdapter: GlobalFetch(),

  // mock接口响应延迟，单位毫秒
  delay: 1000,

  // 是否打印mock接口请求信息
  mockRequestLogger: true
})
export default mockAdapter
