/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/internet-shop/nuex-laptop-shop',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 5002,
    host: 'localhost',
  },
  plugins: [
    vue(),
    federation({
      name: '@nuex-laptop-shop',
      filename: 'remoteEntry.js',
      exposes: {
        './LaptopShop': './src/views/Products.vue',
      },
      remotes: {
        '@nuex-shopping-cart': 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: {
        vue: {},
        pinia: {
          modulePreload: true,
        },
        axios: {},
      },
    }),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../../dist/apps/internet-shop/nuex-laptop-shop',
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
      reportsDirectory: '../../../coverage/apps/internet-shop/nuex-laptop-shop',
      provider: 'v8' as const,
    },
  },
}));
