import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@views': resolve(__dirname, 'src', 'views'),
      '@components': resolve(__dirname, 'src', 'components'),
      '@stores': resolve(__dirname, 'src', 'stores'),
      '@api': resolve(__dirname, 'src', 'api'),
      '@utils': resolve(__dirname, 'src', 'utils')
    }
  },
  plugins: [react()]
})
