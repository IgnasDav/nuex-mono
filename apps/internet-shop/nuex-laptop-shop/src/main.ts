import './styles.scss';
import { createApp } from 'vue';
import App from './app/App.vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify/lib/framework.mjs';
import { nxComponents } from '@nuex_mono/ui-components';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

createVuetify({
  components,
  directives,
});

const pinia = createPinia();
createApp(App).use(nxComponents).use(pinia).mount('#root');
