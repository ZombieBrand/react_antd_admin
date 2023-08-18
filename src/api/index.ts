import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'
import mockAdapter from '../mock'

const http = createAlova({
  baseURL: 'https://api.alovajs.org',
  statesHook: ReactHook,
  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : GlobalFetch(),
  beforeRequest(method) {
    method.config.headers.token = 'token'
  },
  responded: {
    onSuccess: async (response) => {
      console.log('%c [ response ]-15', 'font-size:13px; background:#cb1003; color:#ff5447;', response)
      const responseTypes = new Map([
        ['json', () => response.json()],
        ['text', () => response.text()],
        ['formData', () => response.formData()],
        ['blob', () => response.blob()],
        ['arrayBuffer', () => response.arrayBuffer()],
        ['default', () => response.json()]
      ])
      // 根据响应类型选择相应的解析方法
      const parser = responseTypes.get(response.type)
      if (parser) {
        return parser()
      }
      throw new Error('Unsupported response type')
    },
    onError: (error) => {
      console.log('%c [ error ]-31', 'font-size:13px; background:#17c82c; color:#5bff70;', error)
    }
  }
})

export default http
