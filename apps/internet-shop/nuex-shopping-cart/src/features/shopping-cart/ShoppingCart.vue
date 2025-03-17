<script setup lang="ts">
import { NXButton, NXCard, NXSheet } from '@nuex_mono/ui-components';
import { useShoppingCartStore } from '../../store/shoppingCartStore';
const shoppingCartStore = useShoppingCartStore();

function buyProducts(): void {
  window.alert(`Total price paid: ${shoppingCartStore.totalSum}`);
  shoppingCartStore.clearShoppingCart();
}
</script>
<template>
  <NXSheet
    class="sheet"
    border="md"
    bg-color="#F6F6F6"
  >
    <template #header>
      <h2 class="sheet__header">
        Shopping cart
      </h2>
    </template>
    <template #body>
      <div id="products">
        <NXCard
          v-for="product in shoppingCartStore.products"
          :key="product.id"
          :title="product.title"
          class="sheet__product"
        >
          <template #text>
            <div class="sheet__product__price">
              <p>Item price:</p>
              <p>{{ product.price }}$</p>
            </div>
            <NXButton
              text="Remove"
              color="error"
              variant="elevated"
              :disabled="false"
              class="sheet__product__remove"
              @click="shoppingCartStore.removeProduct(product.id)"
            />
          </template>
        </NXCard>
      </div>
      <h3>Total price: {{ shoppingCartStore.totalSum }}$</h3>
    </template>
    <template #actions>
      <NXButton
        text="Buy"
        size="x-large"
        color="success"
        class="sheet__product__action"
        variant="elevated"
        :disabled="!shoppingCartStore.products.length"
        @click="buyProducts"
      />
    </template>
  </NXSheet>
</template>
<style lang="scss" scoped>
.sheet {
  top: 2rem;
  right: 0.75rem;
  height: 92%;
  width: 30rem;
  border-width: 8px;
  border-radius: 0.75rem;
  position: fixed;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__header {
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  &__product {
    margin-bottom: 1rem;

    &__remove {
      width: 100%;
      margin-top: 0.5rem;
    }

    &__price {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__action {
      width: 100%;
    }
  }
}

#products {
  height: 40rem;
  overflow: scroll;
}
</style>
