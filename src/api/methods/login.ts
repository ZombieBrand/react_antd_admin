import alovaInstance from '@/api'
import { ILoginData } from '@/types/login'
import { Result } from '@/api/types'

export const loginApi = (loginData: ILoginData) =>
    alovaInstance.Post<Result<string>>('/users/login', loginData, {
        name: 'login'
    })
