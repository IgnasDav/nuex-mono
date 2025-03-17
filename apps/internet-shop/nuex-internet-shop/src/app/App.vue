<script setup lang="ts">
import { NXSideMenu, NXLayout } from '@nuex_mono/ui-components';
import { NAVIGATION_OPTIONS } from '../constants/navigation-menu';
import ShoppingCartComponent from '@nuex-shopping-cart/ShoppingCartComponent';
import { useShoppingCartStore } from '@nuex-shopping-cart/store';
import { useRouter } from 'vue-router';
import { pinia } from '../main';

const router = useRouter();
useShoppingCartStore(pinia);
function handleRouteChange(route: string): void {
  router.push(route);
}
</script>

<template>
  <NXLayout class="h-screen">
    <NXSideMenu
      :options="NAVIGATION_OPTIONS"
      @route-click="handleRouteChange"
    />
    <ShoppingCartComponent />
    <main class="ml-40 pl-1 w-full">
      <RouterView />
    </main>
  </NXLayout>
</template>
