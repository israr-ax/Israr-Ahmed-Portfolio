import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Split heavy 3D deps into their own chunk so the initial JS payload
    // stays small — three/fiber/drei only load once <HeroScene> mounts.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (/three|@react-three/.test(id)) return 'three'
            if (/framer-motion|gsap/.test(id)) return 'motion'
          }
        },
      },
    },
  },
})
