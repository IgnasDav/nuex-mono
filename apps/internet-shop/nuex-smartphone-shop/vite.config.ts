/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir:
    '../../../node_modules/.vite/apps/internet-shop/nuex-smartphone-shop',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 5003,
    host: 'localhost',
  },
  plugins: [
    vue(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    federation({
      name: 'nuex-smartphone-shop',
      filename: 'remoteEntry.js',
      exposes: {
        './SmartphoneShop': './src/views/Products.vue',
      },
      remotes: {
        '@nuex-shopping-cart': 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['vue', 'pinia', 'axios'],
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../../dist/apps/internet-shop/nuex-smartphone-shop',
    emptyOutDir: true,
    reportCompressedSize: true,
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true,
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
        '../../../coverage/apps/internet-shop/nuex-smartphone-shop',
      provider: 'v8' as const,
    },
  },
}));
