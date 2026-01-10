import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // This ensures the process exits after the build is done
    ssr: false, 
    minify: true,
    emptyOutDir: true,
  },
  // If you are using a specific framework (like React), 
  // make sure the plugin is added here, but keep the build settings simple.
})
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
