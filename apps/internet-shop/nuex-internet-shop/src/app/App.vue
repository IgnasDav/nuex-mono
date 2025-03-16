<script setup lang="ts">
import { NXSideMenu, NXLayout } from '@nuex_mono/ui-components';
import { NAVIGATION_OPTIONS } from '../constants/navigation-menu';
import ShoppingCartComponent from '@nuex-shopping-cart/ShoppingCartComponent';
import { useRouter } from 'vue-router';
const router = useRouter();

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
    <main class="ml-64 pl-1">
      <RouterView />
    </main>
  </NXLayout>
</template>
