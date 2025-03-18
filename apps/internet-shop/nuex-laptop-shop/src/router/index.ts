// import { createRouter, createWebHistory } from 'vue-router';
// import Products from '../views/Products.vue';
//
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/laptop-shop',
//       component: Products,
//       redirect: (to) => {
//         // the function receives the target route as the argument
//         console.log('works');
//
//         return to.path.replace(/posts$/, 'profile');
//       },
//       children: [
//         {
//           path: '/laptop/:id',
//           component: () => import('./../views/SingleProduct.vue'),
//         },
//       ],
//     },
//   ],
// });
//
// export default router;
