import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        'node:path',
        'node:https',
        'node:http',
        'node:zlib'
      ]
    }
  }
})
