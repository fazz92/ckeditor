import { defineConfig } from 'vite';

export default defineConfig({
    base: "/",
    input: 'src/index.js',
    cssCodeSplit: false,
    build: {
      outDir: 'build',
      rollupOptions: {
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`
        }
      }
    }
  })