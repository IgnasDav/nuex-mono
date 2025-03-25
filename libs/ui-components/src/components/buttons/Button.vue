<script setup lang="ts">
import { VBtn } from 'vuetify/lib/components/index.mjs';

type VBtnProps = InstanceType<typeof VBtn>['$props'];

interface ButtonProps {
  /** Text of the button */
  text: string;
  /** Variant of the button */
  variant: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  /**
   *Controls the disabled state of the button
   */
  disabled: boolean;
  /** Color of the button */
  ripple: VBtnProps['ripple'];
  height?: string | number | undefined;
  width?: string | number | undefined;
  active?: boolean | undefined;
  border?: string | number | boolean | undefined;
  color?: string | undefined;
  position?:
    | 'fixed'
    | 'absolute'
    | 'relative'
    | 'static'
    | 'sticky'
    | undefined;
  value?: any;
  loading?: string | boolean | undefined;
  class?: any;
  /**
   * @component hello world
   */
  theme?: string | undefined;
}
interface ButtonEvents {
  /** when button is clicked, this event is emitted with the native {@link MouseEvent} */
  (e: 'click', event: MouseEvent): void;
}
const {
  disabled = false,
  variant = 'elevated',
  text = 'Hello world',
} = defineProps<ButtonProps>();

defineEmits<ButtonEvents>();
</script>
<template>
  <VBtn
    :text
    :variant
    :disabled
    :ripple
    :position
    :active
    :theme
    :class
    :value
    :loading
    :border
    @click="(e: MouseEvent) => $emit('click', e)"
  />
</template>
