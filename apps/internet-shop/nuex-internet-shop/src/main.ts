import './styles.scss';
import router from './router';
import { createApp } from 'vue';
import App from './app/App.vue';
import { nxComponents } from '@nuex_mono/ui-components';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createPinia } from 'pinia';

createVuetify({
  components,
  directives,
});

export const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(nxComponents);
app.use(router);
app.mount('#root');
