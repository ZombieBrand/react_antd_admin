import { PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import viteImagemin from 'vite-plugin-imagemin'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import svgr from 'vite-plugin-svgr'
import { envParse } from 'vite-plugin-env-parse'
import minipic from 'vite-plugin-minipic'
import million from 'million/compiler'
export function createVitePlugins(viteEnv: Record<string, string>, isBuild: boolean) {
  const { VITE_USER_NODE_ENV, VITE_USE_MOCK } = viteEnv
  const vitePlugins: (PluginOption | PluginOption[])[] = [million.vite({ auto: true }), react(), imagetools(), viteImagemin(), svgr(), envParse()]
  if (VITE_USE_MOCK) {
    vitePlugins.push(mockDevServerPlugin())
  }
  if (VITE_USER_NODE_ENV === 'development') {
    console.log('VITE_USER_NODE_ENV:', VITE_USER_NODE_ENV)
  }
  if (VITE_USER_NODE_ENV === 'production') {
    console.log('VITE_USER_NODE_ENV:', VITE_USER_NODE_ENV)
  }
  if (isBuild) {
    console.log('isBuild', isBuild)
    vitePlugins.push(minipic())
  }
  return vitePlugins
}
