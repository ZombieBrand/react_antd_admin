import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'
import mockAdapter from '../mock'
import storage from '@/utils/storage'
import { message } from '@/utils/AntdGlobal'
import { hideLoading, showLoading } from '../utils/loading/index'
import { IMethodMeta } from '@/types/api/basics'

const http = createAlova({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  statesHook: ReactHook,
  requestAdapter: import.meta.env.VITE_USE_MOCK === 'true' ? mockAdapter : GlobalFetch(),
  beforeRequest(method) {
    // 获取请求方法携带自定义元信息 https://alova.js.org/zh-CN/tutorial/next-step/method-metadata
    const meta: IMethodMeta = method.meta
    if (meta?.showLoading) showLoading()
    const token = storage.get('token')
    if (token) {
      method.config.headers.Authorization = `Bearer ${token}`
    }
  },
  responded: {
    onSuccess: async (response, method) => {
      console.log('%c [ response ]-15', 'font-size:13px; background:#cb1003; color:#ff5447;', response)
      const meta: IMethodMeta = method.meta
      const responseTypes = new Map([
        ['json', () => response.json()],
        ['text', () => response.text()],
        ['formData', () => response.formData()],
        ['blob', () => response.blob()],
        ['arrayBuffer', () => response.arrayBuffer()],
        ['default', () => response.json()],
        ['basic', () => response.text()]
      ])
      // 根据响应类型选择相应的解析方法
      const parser = responseTypes.get(response.type)

      if (parser) {
        const parserData = await parser()
        switch (parserData.code) {
          case 500001:
            message.error('登录失效，请重新登录')
            storage.remove('token')
            window.location.href = '/login'
            break
          case 0:
            return parserData
          default:
            meta?.showError && message.error(parserData.message)
            return Promise.reject(parserData)
        }
      }
      if (meta?.showLoading) hideLoading()
      throw new Error('Unsupported response type')
    },
    onError: (error, method) => {
      const meta: IMethodMeta = method.meta
      if (meta.showLoading) hideLoading()
      if (meta.showError) message.error(error.message)
      console.log('%c [ error ]-31', 'font-size:13px; background:#17c82c; color:#5bff70;', error)
    }
  }
})

export default http
