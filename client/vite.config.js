
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,  // Optional: change port if needed
    proxy: {
      '/api': {
        target: 'http://server:5000',  // The backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

