import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ghPages } from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/weather/',
  publicDir: 'public',
  build: {
    manifest: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true
      }
    }
  }
})