import type { Meta, StoryObj } from '@storybook/vue3';
import Sheet from './Sheet.vue';

const meta: Meta<typeof Sheet> = {
  component: Sheet,
  title: 'Sheet',
  argTypes: {
    bgColor: {
      control: {type: 'color'}
    }
  }
};
export default meta;
type Story = StoryObj<typeof meta>;

export const WithContent: Story = {
  args: {},
  render: (args) => ({
    components: { Sheet },
    setup() {
      return { args };
    },
    template: `
     <Sheet>
        <template #header>
    <v-icon
      class="mb-5"
      color="success"
      icon="mdi-check-circle"
      size="112"
    ></v-icon>
    <h2 class="text-h5 mb-6">You reconciled this account</h2>
</template>
        <template #body>

    <p class="mb-4 text-medium-emphasis text-body-2">
      To see a report on this reconciliation, click <a class="text-decoration-none text-info" href="#">View reconciliation report.</a>

      <br>

      Otherwise, you're done!
    </p>

    <v-divider class="mb-4"></v-divider>
</template>

        <template #actions>
    <div class="text-end">
      <v-btn
        class="text-none"
        color="success"
        variant="flat"
        width="90"
        rounded
      >
        Done
      </v-btn>
    </div>
</template>
    </Sheet>
    `,
  }),
};
