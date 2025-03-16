<script setup lang="ts">
import { NXLayout } from '@nuex_mono/ui-components';
import ShoppingCart from '../features/shopping-cart/ShoppingCart.vue';
import ShoppingCartView from '../views/ShoppingCartView.vue';
</script>

<template>
  <NXLayout>
    <ShoppingCartView />
    <ShoppingCart />
  </NXLayout>
</template>

<style scoped lang="scss"></style>
