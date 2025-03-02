import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '34af44e3-0e94-4a47-b9c3-da615a2f8dd2-00-1vylgmxs50jgu.sisko.replit.dev',
      '.replit.dev'
    ]
  }
})
