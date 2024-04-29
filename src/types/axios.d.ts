import 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    showLoading?: boolean
    showError?: boolean
  }
}
