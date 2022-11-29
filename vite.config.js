import { defineConfig } from 'vite';
//import solidPlugin from 'vite-plugin-solid';
//import nodePolyfills from 'vite-plugin-node-stdlib-browser'

const assetsDir = '';

const outputDefaults = {
  // remove hashes from filenames
  entryFileNames: `${assetsDir}[name].js`,
  chunkFileNames: `${assetsDir}[name].js`,
  assetFileNames: `${assetsDir}[name].[ext]`,
}

export default defineConfig({
  //root: "demo",
  base: "./", // generate relative paths in html
  plugins: [
    //solidPlugin(),
    //nodePolyfills(),
  ],
  server: {
    //host: 'localhost',
    //port: 3000,
  },
  build: {
    target: 'esnext',
    //polyfillDynamicImport: false,
    //sourcemap: true,
    minify: false, // smaller git diffs
    rollupOptions: {
      output: {
        ...outputDefaults,
      }
    },
  },
  esbuild: {
    keepNames: true,
  },
  worker: {
    rollupOptions: {
      output: {
        ...outputDefaults,
      }
    },
  },
  resolve: {
    dedupe: [
    ],
  },
  optimizeDeps: {
    exclude: [
    ],
  },
});
