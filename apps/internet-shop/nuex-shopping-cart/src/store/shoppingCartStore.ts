import { defineStore } from 'pinia';
import { Product } from '@nuex/products-api';
import { computed, reactive } from 'vue';

interface State {
  data: Product[];
}

export const useShoppingCartStore = defineStore('shoppingCart', () => {
  const _state = reactive<State>({
    data: [],
  });

  const products = computed(() => _state.data);
  const totalSum = computed(() =>
    products.value.reduce((acc, product) => acc + product.price, 0)
  );

  function addProduct(product: Product): void {
    if (_state.data.find(({ id }) => id === product.id)) return;

    _state.data = [..._state.data, product];
  }

  function removeProduct(id: number): void {
    _state.data = _state.data.filter((product) => product.id !== id);
  }

  function clearShoppingCart(): void {
    _state.data = [];
  }

  return { totalSum, products, addProduct, removeProduct, clearShoppingCart };
});
