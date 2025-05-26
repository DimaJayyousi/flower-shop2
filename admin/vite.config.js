import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/getorders': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/createorder': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      // 🔁 add more routes here if needed
    }
  }
});
