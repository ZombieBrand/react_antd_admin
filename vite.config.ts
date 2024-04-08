import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import pkg from './package.json'
import dayjs from 'dayjs'
const { dependencies, devDependencies, name, version } = pkg
import { createVitePlugins } from './build/plugins'
import { createProxy } from './build/proxy'
// package.json 的配置文件信息dependencies
// 最后一次打包时间
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  const isBuild = command === 'build'
  console.log('env:-----', env, command)
  return {
    server: {
      host: true,
      port: 8003,
      proxy: createProxy(env.VITE_PROXY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    esbuild: {
      drop: env.VITE_DROP_CONSOLE === 'true' ? ['console', 'debugger'] : []
    },
    css: {
      // 开css sourcemap方便找css
      devSourcemap: true
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    plugins: createVitePlugins(env, isBuild)
  }
})
