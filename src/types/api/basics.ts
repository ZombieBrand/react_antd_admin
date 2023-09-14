export interface IRequestReturn<T> {
  code: number
  message: string
  data: T
}

export interface IMethodMeta {
  showLoading?: boolean
  showError?: boolean
  [name: string]: unknown
}
