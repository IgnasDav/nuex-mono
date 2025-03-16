import { defineStore } from 'pinia';
import { computed, onMounted, reactive } from 'vue';
import { Category, getProductsByCategory, Product } from '@nuex/products-api';
import { AxiosError } from 'axios';

interface State {
  loading: boolean;
  data?: Product[];
  error?: AxiosError<unknown>;
}

export const useLaptopsStore = defineStore('laptop-products', () => {
  const _state = reactive<State>({ loading: false });

  const isLoading = computed(() => _state.loading);
  const error = computed(() => _state.error);
  const products = computed(() => _state.data);

  async function getProducts(): Promise<void> {
    _state.loading = true;
    const { data, error } = await getProductsByCategory(Category.LAPTOPS);

    if (data?.products.length) {
      _state.data = data.products;
    } else if (error) {
      _state.error = error;
    }
    _state.loading = false;
  }

  onMounted(() => {
    getProducts();
  });

  return { getProducts, isLoading, error, products };
});
