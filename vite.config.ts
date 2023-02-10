import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import { book } from 'vite-plugin-book/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    book()
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
})
