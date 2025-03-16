import { createApp } from 'vue';
import App from './app/App.vue';
import 'vuetify/styles';
import { registerPlugins } from './plugins';

const app = createApp(App);
registerPlugins(app);
app.mount('#root');
