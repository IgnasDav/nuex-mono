<script setup lang="ts">
import { NXButton, NXCard, NXLoaderScreen } from '@nuex_mono/ui-components';
import { Product } from '@nuex/products-api';
import { useShoppingCartStore } from '../store';

const shoppingCartStore = useShoppingCartStore();

function toPrice(price: number): string {
  return `Total price ${price}$`;
}

function removeProduct(product: Product) {
  shoppingCartStore.removeProduct(product.id);
}
</script>
<template>
  <div
    v-if="shoppingCartStore.products.length"
    class="products"
  >
    <NXCard
      v-for="product in shoppingCartStore.products"
      :key="product.id"
      :img-src="product.thumbnail"
      :title="product.title"
      :subtitle="toPrice(product.price)"
    >
      <template #actions>
        <NXButton
          text="Remove from cart"
          color="error"
          variant="elevated"
          :disabled="false"
          @click="removeProduct(product)"
        />
      </template>
    </NXCard>
  </div>
  <div
    v-else
    class="empty-products"
  >
    <h3>Empty shopping cart :(</h3>
  </div>
</template>
<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.empty-products {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  h3 {
    font-weight: 700;
    font-size: 2.2rem;
  }
}
.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 45rem);
  gap: 1rem;
  width: 80rem;
  margin: 0 auto;
  padding-top: 4rem;
}
</style>
