import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Vue3uiButton',
      fileName: 'vue3ui-button',
    },
    minify: false,
    rollupOptions: {
      external: [
        /@vue3ui.*/, 
        'vue'
      ],
    },
  }
})
