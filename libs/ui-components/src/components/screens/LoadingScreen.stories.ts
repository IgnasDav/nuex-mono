import type { Meta, StoryObj } from '@storybook/vue3';
import LoadingScreen from './LoadingScreen.vue';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof LoadingScreen> = {
  component: LoadingScreen,
  title: 'LoadingScreen',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to LoadingScreen!/gi)).toBeTruthy();
  },
};
