/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/internet-shop/nuex-shopping-cart',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 5001,
    host: 'localhost',
  },
  plugins: [
    vue(),
    federation({
      name: '@nuex-shopping-cart',
      filename: 'remoteEntry.js',
      exposes: {
        './store': './src/store/index.ts',
        './ShoppingCartView': './src/views/ShoppingCartView.vue',
        './ShoppingApp': './src/app/App.vue',
        './ShoppingCartComponent':
          './src/features/shopping-cart/ShoppingCart.vue',
      },
      shared: ['vue', 'pinia'],
    }),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../../dist/apps/internet-shop/nuex-shopping-cart',
    emptyOutDir: true,
    reportCompressedSize: true,
    target: 'esnext',
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory:
        '../../../coverage/apps/internet-shop/nuex-shopping-cart',
      provider: 'v8' as const,
    },
  },
}));
