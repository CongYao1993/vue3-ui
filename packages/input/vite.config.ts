import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Vue3uiInput',
      fileName: 'vue3ui-input',
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
