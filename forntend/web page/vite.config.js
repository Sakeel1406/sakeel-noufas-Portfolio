import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Use '/' for local development (serve) and GitHub Pages subpath for production builds (build)
    base: command === 'serve' ? '/' : '/sakeel-noufas-Portfolio/',
    server: {
      host: true,
      strictPort: true,
    }
  }
})