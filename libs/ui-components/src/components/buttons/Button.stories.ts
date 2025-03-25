import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  parameters: {
    expanded: true,
  },
  argTypes: {
    color: {
      control: { type: 'color', presetColors: ['red', 'green'] },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    text: '',
    variant: 'text',
    disabled: true,
  },
};
//
// export const Heading: Story = {
//   args: {},
//   // play: async ({ canvasElement }) => {},
//   parameters: {
//     expanded: true,
//   },
// };
