import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': {
      target: 'http://localhost:3000/',
      // target: 'https://103.147.114.203:5173/',
      secure: false,
    },
  },

})
