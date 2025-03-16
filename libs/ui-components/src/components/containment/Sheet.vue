<script setup lang="ts">
interface SheetProps {
  maxWidth?: number;
  bgColor?: string;
  border?: string;
}
defineProps<SheetProps>();
</script>
<template>
  <VSheet
    :border
    class="pa-6 text-white mx-auto"
    :color="bgColor"
    :max-width
  >
    <slot name="header" />
    <slot name="body" />
    <slot name="actions" />
  </VSheet>
</template>
