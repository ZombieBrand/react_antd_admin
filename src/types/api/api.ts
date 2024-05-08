// 接口类型定义

export interface Result<T = any> {
  code: number
  data: T
  message: string
}
export interface ResultData<T = any> {
  list: T[]
  page: {
    pageNum: number
    pageSize: number
    total: number | 0
  }
}

export interface PageParams {
  pageNum: number
  pageSize?: number
}

export interface ILoginParams {
  userName: string
  userPwd: string
}
