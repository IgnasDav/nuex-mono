import type { Meta, StoryObj } from '@storybook/vue3';
import SideMenu from './SideMenu.vue';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SideMenu> = {
  component: SideMenu,
  title: 'SideMenu',
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
    await expect(canvas.getByText(/Welcome to SideMenu!/gi)).toBeTruthy();
  },
};
