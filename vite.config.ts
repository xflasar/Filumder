import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
      hmr: {
        clientPort: 3080,
      },
      port: 3080,
    watch: {
      usePolling: true,
    }
  },
  build: {
    watch: {
      include: 'src/**'
    }
  }
})
