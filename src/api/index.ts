import { createAlova } from 'alova'
import { axiosRequestAdapter } from '@alova/adapter-axios'
import ReactHook from 'alova/react'
import mockAdapter from '@/mock'
import { message } from '@/utils/AntdGlobal'
import { AxiosError, AxiosRequestConfig } from 'axios'
import { getTokenAUTH, getToken } from '@/utils/auth'
import storage from '@/utils/storage'

// 1. 创建alova实例
const baseURL = import.meta.env.VITE_BASE_API
const alovaInstance = createAlova({
    baseURL,
    statesHook: ReactHook,
    requestAdapter: import.meta.env.DEV ? mockAdapter : axiosRequestAdapter(),
    beforeRequest(method) {
        const token = getToken()
        const Icode = 'E9AA11C07ECACB53'
        method.config.headers.Icode = Icode
        if (token) {
            method.config.headers.Authorization = getTokenAUTH()
        }
    },
    // 全局的响应拦截器
    responded: {
        // 请求成功的拦截器
        onSuccess: async (response, method) => {
            const data = response.data
            if (data.code === 500_001) {
                message.error(data.msg)
                storage.remove('token')
                // location.href = '/login'
            }
            if (data.code !== 0) {
                return Promise.reject(data)
            }
            return data.data
        },

        // 请求失败的拦截器
        onError: (error: AxiosError, method) => {
            return Promise.reject(error)
        }
    },
    timeout: 8000
})

export default alovaInstance

export const axiosConfig: AxiosRequestConfig = {
    timeoutErrorMessage: '请求超时，请稍后重试',
    withCredentials: true
}
