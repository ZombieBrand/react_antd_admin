/**
 * localStorage模块封装
 */

// 默认缓存期限为7天
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

type StorageOptions = {
  prefixKey?: string
  storage?: Storage
  document?: Document
}

/**
 * 创建本地缓存对象
 * @param options 配置选项，包含键前缀、存储对象和文档对象
 */
export const createStorage = ({ prefixKey = '', storage = localStorage, document = window.document }: StorageOptions = {}) => {
  const Storage = class {
    private storage: Storage = storage
    private document: Document = document
    private prefixKey: string = prefixKey

    private getKey(key: string): string {
      return `${this.prefixKey}${key}`.toUpperCase()
    }

    set(key: string, value: any, expire: number | null = DEFAULT_CACHE_TIME): void {
      const stringData = JSON.stringify({
        value,
        expire: expire !== null ? new Date().getTime() + expire * 1000 : null
      })
      this.storage.setItem(this.getKey(key), stringData)
    }

    get(key: string, def: any = null): any {
      const item = this.storage.getItem(this.getKey(key))
      if (item) {
        try {
          const data = JSON.parse(item)
          const { value, expire } = data
          if (expire === null || expire >= Date.now()) {
            return value
          }
          this.remove(key)
        } catch (e) {
          console.error('Error reading from storage', e)
          return def
        }
      }
      return def
    }

    remove(key: string): void {
      this.storage.removeItem(this.getKey(key))
    }

    clear(): void {
      this.storage.clear()
    }

    setCookie(name: string, value: any, expire: number | null = DEFAULT_CACHE_TIME): void {
      const cookieValue = encodeURIComponent(value)
      const expiresAttr = expire ? `; max-age=${expire}` : ''
      this.document.cookie = `${this.getKey(name)}=${cookieValue}${expiresAttr}; path=/; Secure; HttpOnly`
    }

    getCookie(name: string): string {
      const fullName = this.getKey(name)
      const match = this.document.cookie.match(`(^|;)\\s*${fullName}=([^;]*)`)
      return match ? decodeURIComponent(match[2]) : ''
    }

    removeCookie(key: string): void {
      this.document.cookie = `${this.getKey(key)}=; Max-Age=-1; path=/`
    }

    clearCookie(): void {
      const keys = this.document.cookie.match(/[^ =;]+(?==)/g)
      if (keys) {
        keys.forEach(key => (this.document.cookie = `${key}=; Max-Age=-1; path=/`))
      }
    }
  }
  return new Storage()
}

export const storage = createStorage()
