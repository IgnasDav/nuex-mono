import { App } from 'vue';
import {
  NXButton,
  NXCard,
  NXLayout,
  NXLoaderScreen,
  NXSheet,
  NXSideMenu,
} from '../index';
import { registerPlugins } from '.';

export default {
  install: (app: App) => {
    registerPlugins(app);
    app.component('NXButton', NXButton);
    app.component('NXSideMenu', NXSideMenu);
    app.component('NXLayout', NXLayout);
    app.component('NXCard', NXCard);
    app.component('NXSheet', NXSheet);
    app.component('NXLoaderScreen', NXLoaderScreen);
  },
};
