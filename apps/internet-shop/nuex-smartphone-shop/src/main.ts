import './styles.scss';
import { createApp } from 'vue';
import App from './app/App.vue';
import { createPinia } from 'pinia';
import { nxComponents } from '@nuex_mono/ui-components';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify/lib/framework.mjs';

createVuetify({
  components,
  directives,
});
// app.use(router);
const pinia = createPinia();
createApp(App).use(nxComponents).use(pinia).mount('#root');
