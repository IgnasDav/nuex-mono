<script setup lang="ts">
import Products from './../views/Products.vue';
import ShoppingCardComponent from '@nuex-shopping-cart/ShoppingCartComponent';
import { useShoppingCartStore } from '@nuex-shopping-cart/shoppingCartStore';
import { pinia } from '../main';

useShoppingCartStore(pinia);
</script>

<template>
  <ShoppingCardComponent />
  <Products />
</template>
