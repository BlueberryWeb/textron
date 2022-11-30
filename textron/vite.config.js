import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.css', '.png', '.jpg', '.gif', '.mp4', '.js', '.vue', '.svg'],
    alias: {
      'SRC': path.resolve(__dirname, '/src'),
      'ASSETS': path.resolve(__dirname, '/src/assets'),
      'COMPONENTS': path.resolve(__dirname, '/src/components'),
      'VIEWS': path.resolve(__dirname, '/src/views'),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})
