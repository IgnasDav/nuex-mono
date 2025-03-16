import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/smartphone-shop',
      name: 'smartphone-shop',
      component: () => import('@nuex-laptop-shop/LaptopShop'),
    },
    {
      path: '/laptop-shop',
      name: 'laptop-shop',
      component: () => import('@nuex-smartphone-shop/SmartphoneShop'),
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: () => import('@nuex-shopping-cart/ShoppingCartView'),
    },
  ],
});

export default router;
