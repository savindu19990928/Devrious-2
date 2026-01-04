import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['www.devrious.lk', 'devrious.lk', 'devrious-2-708852150124.europe-west1.run.app']
  },
  preview: {
    host: true,
    allowedHosts: ['www.devrious.lk', 'devrious.lk', 'devrious-2-708852150124.europe-west1.run.app']
  }
})
