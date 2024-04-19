interface ImportMetaEnv {
  // Auto generate by env-parse
  /**
   * 接口API地址
   */
  readonly VITE_BASE_API: string
  /**
   * 接口API前缀
   */
  readonly VITE_BASE_API_PREFIX: string
  /**
   * 上传API
   */
  readonly VITE_UPLOAD_URL: string
  /**
   * mock 开关
   */
  readonly VITE_USE_MOCK: boolean
  /**
   * 项目title
   */
  readonly VITE_TITLE: string
  /**
   * 是否删除console debugger
   */
  readonly VITE_DROP_CONSOLE: boolean
  /**
   * 代理用的变量地址
   */
  readonly VITE_PROXY_PATH_IP: string
  /**
   * 跨域代理，可以配置多个，请注意不要换行
   * VITE_PROXY = [["/api","http://api-driver.marsview.cc"],["/upload","http://api-drive.marsview.cc"]]
   */
  readonly VITE_PROXY: any[]
  readonly VITE_USER_NODE_ENV: string
}
