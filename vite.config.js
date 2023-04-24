import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': `${__dirname}/src`
    }
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:9021',
  //       changeOrigin: true,
  //       logLevel: 'debug',
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})