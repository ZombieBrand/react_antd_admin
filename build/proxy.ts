/**
 * 使用以解析.env.development代理配置
 */
import type { ProxyOptions } from 'vite'
import { Agent } from 'https'
type ProxyItem = [string, string]

type ProxyList = ProxyItem[]

type ProxyTargetList = Record<string, ProxyOptions & { rewrite: (path: string) => string }>

const httpsRE = /^https:\/\//
const wsRE = /^(ws|wss):\/\//

/**
 * 生成代理
 * @param list
 */
export function createProxy(list: ProxyList) {
  if (!list) return {}
  const ret: ProxyTargetList = {}
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target)
    const isWs = wsRE.test(target)

    // https://github.com/http-party/node-http-proxy#options
    ret[prefix] = {
      target: target,
      changeOrigin: true,
      ws: isWs,
      rewrite: path => path.replace(new RegExp(`^${prefix}`), ''),
      agent: new Agent({ keepAlive: true, keepAliveMsecs: 20000 }),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {})
    }
  }
  return ret
}
