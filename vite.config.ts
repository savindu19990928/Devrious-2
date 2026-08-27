import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'www.devrious.lk',
      'devrious.lk',
      'devrious-2-727633019198.us-central1.run.app'
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: [
      'www.devrious.lk',
      'devrious.lk',
      'devrious-2-727633019198.us-central1.run.app'
    ]
  }
})
