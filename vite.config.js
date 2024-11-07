import { defineConfig } from 'vite';
import babel  from '@rollup/plugin-babel';

export default defineConfig({
    base: "/",
    input: 'src/index.js',
    cssCodeSplit: false,
    build: {
      outDir: 'build',
      target: 'es6',
      rollupOptions: {
        plugins: [
          babel({
            presets: [[
              "@babel/preset-env"
            ]]
          })
        ],
        output: {
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`
        }
      }
    }
  })