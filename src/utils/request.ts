import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import urlJoin from 'url-join'
import { showLoading, hideLoading } from './loading'
import { createStorage } from './storage'
import { Result } from '@/types/api'
import { message } from './AntdGlobal'

const storage = createStorage({ prefixKey: 'admin_', storage: sessionStorage })
const env = import.meta.env
const baseURL = urlJoin(env.VITE_BASE_API, env.VITE_BASE_API_PREFIX)
console.log('%c [ baseURL ]-11', 'font-size:13px; background:#dc9efb; color:#ffe2ff;', JSON.stringify(baseURL))
// 创建实例
const instance = axios.create({
  baseURL,
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true,
  headers: {
    icode: '62E7F26B798EFABE'
  }
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    if (config.showLoading) showLoading()
    const token = storage.get('token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return {
      ...config
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const data: Result = response.data
    hideLoading()
    if (response.config.responseType === 'blob') return response
    if (data.code === 500001) {
      message.error(data.message)
      storage.remove('token')
      location.href = '/login?callback=' + encodeURIComponent(location.href)
    } else if (data.code != 0) {
      if (response.config.showError === false) {
        return Promise.resolve(data)
      } else {
        message.error(data.message)
        return Promise.reject(data)
      }
    }
    return data.data
  },
  error => {
    console.log('%c [ HTTP_ERROR ]', 'font-size:13px; background:#5c0011; color:#fff1f0;', JSON.stringify(error))
    hideLoading()
    message.error(error.message)
    return Promise.reject(error.message)
  }
)
interface IConfig extends AxiosRequestConfig {
  showLoading?: boolean
  showError?: boolean
}

export default {
  get<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.get(url, { params, ...options })
  },
  post<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.post(url, params, options)
  },
  downloadFile(url: string, data: any, fileName = 'fileName.xlsx') {
    instance({
      url,
      data,
      method: 'post',
      responseType: 'blob'
    }).then(response => {
      const blob = new Blob([response.data], {
        type: response.data.type
      })
      const name = (response.headers['file-name'] as string) || fileName
      const link = document.createElement('a')
      link.download = decodeURIComponent(name)
      link.href = URL.createObjectURL(blob)
      document.body.append(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(link.href)
    })
  }
}
