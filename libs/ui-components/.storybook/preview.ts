import { Preview, setup } from '@storybook/vue3';
import { registerPlugins } from './../src/plugins/index';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';

const preview: Preview = {
  // ...rest of preview
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
};

export default preview;

setup((app) => {
  registerPlugins(app);
});

export const decorators = [withVuetifyTheme];
