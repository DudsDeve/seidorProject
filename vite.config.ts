import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: path.resolve(__dirname, './src/assets/'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components/'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, './src/utils/'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, './src/pages/'),
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, './src/styles/'),
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, './src/services/'),
      },
      {
        find: '@contexts',
        replacement: path.resolve(__dirname, './src/contexts/'),
      },
      {
        find: '@routes',
        replacement: path.resolve(__dirname, './src/routes/'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, './src/hooks/'),
      },
      { find: '@', replacement: path.resolve(__dirname, './src/') },
    ],
  }
})
