<script setup lang="ts">
import { NXButton, NXCard, NXLoaderScreen } from '@nuex_mono/ui-components';
import { useShoppingCartStore } from '@nuex-shopping-cart/store';
import { Product } from '@nuex/products-api';
import { useSmartphoneStore } from '../store/useProductsStore';

const productsStore = useSmartphoneStore();
const shoppingCartStore = useShoppingCartStore();

function toPrice(price: number): string {
  return `Total price ${price}$`;
}

function addToCart(product: Product): void {
  shoppingCartStore.addProduct(product);
}

function goToProduct() {
  console.log('goes');
}
</script>
<template>
  <NXLoaderScreen
    v-if="productsStore.isLoading"
    class="loader"
  />
  <div class="products">
    <NXCard
      v-for="product in productsStore.products"
      :key="product.id"
      :img-src="product.thumbnail"
      :title="product.title"
      :subtitle="toPrice(product.price)"
    >
      <template #actions>
        <NXButton
          text="Go to product"
          variant="elevated"
          :disabled="true"
          color="primary"
          @click="goToProduct"
        />
        <NXButton
          text="Add to cart"
          color="success"
          variant="elevated"
          :disabled="false"
          @click="addToCart(product)"
        />
      </template>
    </NXCard>
  </div>
</template>
<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 45rem);
  gap: 1rem;
  width: 80rem;
  margin: 0 auto;
  padding-top: 4rem;
}
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
