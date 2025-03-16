<script setup lang="ts">
interface ButtonProps {
  text: string;
  variant: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  disabled: boolean;
}
const {
  disabled = false,
  variant = 'elevated',
  text = 'Hello world',
} = defineProps<ButtonProps>();

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();
</script>
<template>
  <VBtn
    :text
    :variant
    :disabled
    @click="(e: MouseEvent) => $emit('click', e)"
  />
</template>
