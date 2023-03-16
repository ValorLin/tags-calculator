import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  // set baseUrl to ./ to make it work with github pages
  base: './',
  plugins: [
    react(),
    visualizer({
      filename: 'reports/build.html',
    }),
  ],
});
