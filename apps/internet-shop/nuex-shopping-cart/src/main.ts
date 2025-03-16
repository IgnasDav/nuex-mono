import './styles.css';
import { createApp } from 'vue';
import { nxComponents } from '@nuex_mono/ui-components';
import App from './app/App.vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const app = createApp(App);
// const pinia = createPinia();
createVuetify({
  components,
  directives,
});
app.use(createPinia());
app.use(nxComponents);
// app.use(router);
app.mount('#root');
