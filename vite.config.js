import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),

  ],
  server: {
    host: "192.168.1.111", // Ensures it's accessible externally
    port: 5173,            // Default Vite port
  },
  
})
