import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kokoEduWebsite/', // Đường dẫn tương ứng với tên repository trên GitHub
})
