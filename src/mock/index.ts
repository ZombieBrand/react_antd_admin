import { axiosRequestAdapter, axiosMockResponse } from '@alova/adapter-axios'
import { createAlovaMockAdapter } from '@alova/mock'
import defineMock from './test'

const mockAdapter = createAlovaMockAdapter([defineMock], {
    // 全局控制是否启用mock接口，默认为true
    enable: import.meta.env.VITE_USE_MOCK,
    // 非模拟请求适配器，用于未匹配mock接口时发送请求
    httpAdapter: axiosRequestAdapter(),

    // mock接口响应延迟，单位毫秒
    delay: 1000,

    // 是否打印mock接口请求信息
    mockRequestLogger: false,
    ...axiosMockResponse
})
export default mockAdapter
