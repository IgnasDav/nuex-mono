import './styles.scss';
// import router from './router';
import { createApp } from 'vue';
import App from './app/App.vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify/lib/framework.mjs';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { nxComponents } from '@nuex_mono/ui-components';
import { useShoppingCartStore } from '@nuex-shopping-cart/shoppingCartStore';

createVuetify({
  components,
  directives,
});

export const pinia = createPinia();

createApp(App).use(pinia).use(nxComponents).mount('#root');
// export const pinia = createPinia();
