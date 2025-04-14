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
        find: '@database',
        replacement: path.resolve(__dirname, './src/database/'),
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, './src/layouts/'),
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
        find: '@router',
        replacement: path.resolve(__dirname, './src/router/'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, './src/hooks/'),
      },
      { find: '@', replacement: path.resolve(__dirname, './src/') },
    ],
  }
})
