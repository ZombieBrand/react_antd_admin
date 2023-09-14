import { IRequestReturn } from '@/types/api/basics'

export interface ILoginData {
  userName: string
  userPwd: string
}

export type ILoginApi = IRequestReturn<{
  token: string
}>
