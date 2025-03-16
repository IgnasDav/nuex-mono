import { setup } from '@storybook/vue3';
import { registerPlugins } from './../src/plugins/index';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';

setup((app) => {
  registerPlugins(app);
});

export const decorators = [withVuetifyTheme];
