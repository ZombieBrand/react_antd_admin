import http from '@/api/index'
import { IMethodMeta } from '@/types/api/basics'
import { ILoginApi, ILoginData } from '@/types/api/login'

export const loginApi = (loginData: ILoginData, meta?: IMethodMeta) => {
  const methodInstance = http.Post<ILoginApi>('/login', loginData)
  methodInstance.meta = meta
  return methodInstance
}
