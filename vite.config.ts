import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cloudflare()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "axios": path.resolve(__dirname, "node_modules/axios"),
      "@radix-ui/react-slot": path.resolve(__dirname, "node_modules/@radix-ui/react-slot"),
      "@radix-ui/react-label": path.resolve(__dirname, "node_modules/@radix-ui/react-label"),
    },
    preserveSymlinks: true,
  },
  build: {
    rollupOptions: {
      external: [],
    }
  }
})
