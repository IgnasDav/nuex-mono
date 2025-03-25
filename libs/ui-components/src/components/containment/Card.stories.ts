import type { Meta, StoryObj } from '@storybook/vue3';
import Card from './Card.vue';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const WithContent: Story = {
  args: {},
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: `
    <Card
:title="${args.title} ?? 'Top western road trips'"
:imgSrc="${args.imgSrc} ?? 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
:subtitle="${args.subtitle} ?? '1,000 miles of wonder'"
>
<template #actions>
    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        text="Explore"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
</template>
    </Card>
`,
  }),
};
