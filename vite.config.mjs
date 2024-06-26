// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tsconfigPaths from 'vite-tsconfig-paths';

// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            // 'react-transition-group',
            '@twa-dev/sdk',
            'react-microsoft-clarity',
          ],
          app: ['./src/main.tsx', './src/App.tsx'],
          // icons: ['emoji-mart', '@tabler/icons-react'],
          framework: [
            // '@mantine/carousel',
            '@mantine/core',
            '@mantine/hooks',
            // '@mantine/modals',
            // '@mantine/notifications',
          ],
        },
      },
    },
    outDir: './docs',
    chunkSizeWarningLimit: 600,
    // minify: 'terser',
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/style/_mantine";`,
  //     },
  //   },
  // },
  base: './',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
