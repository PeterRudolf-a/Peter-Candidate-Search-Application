import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensure the server is accessible on all network interfaces
    port: 5173, // Use the PORT environment variable if available
    allowedHosts: [
      'peter-candidate-search-application.onrender.com', // Add the host you want to allow
    ],
  },
});
