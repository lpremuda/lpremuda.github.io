import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// VITE_BASE_PATH is set by the GitHub Actions workflow at build time.
// Production builds leave it unset (defaults to '/'), staging builds set it
// to '/staging/' so all asset paths resolve correctly under that subpath.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH ?? '/',
})
