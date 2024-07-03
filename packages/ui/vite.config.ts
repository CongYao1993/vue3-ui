import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Vue3uiUi',
      fileName: 'vue3ui-ui',
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
