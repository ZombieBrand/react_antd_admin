import { PluginOption, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { imagetools } from 'vite-imagetools'
import viteImagemin from 'vite-plugin-imagemin'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import pkg from './package.json'
import dayjs from 'dayjs'
import svgr from 'vite-plugin-svgr'
const { dependencies, devDependencies, name, version } = pkg

function createVitePlugins(viteEnv: Record<string, string>, isBuild: boolean) {
  const { VITE_USER_NODE_ENV, VITE_USE_MOCK } = viteEnv
  const vitePlugins: (PluginOption | PluginOption[])[] = [react(), imagetools(), viteImagemin(), svgr()]
  if (VITE_USE_MOCK) {
    vitePlugins.push(mockDevServerPlugin())
  }

  // if (VITE_USER_NODE_ENV === "development") {
  // }
  // if (VITE_USER_NODE_ENV === "production") {
  // }
  // if (isBuild) {
  // }
  console.log('VITE_USER_NODE_ENV:', VITE_USER_NODE_ENV, 'isBuild:', isBuild)
  return vitePlugins
}

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
      port: 8080,
      proxy: {
        '/api': 'http://api-driver.marsview.cc'
      }
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
