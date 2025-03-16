<script setup lang="ts">
defineSlots<{
  /**
   * Application has to be inserted here to expose vuetify layout
   */
  default: () => any;
}>();
</script>
<template>
  <VLayout>
    <slot name="default" />
  </VLayout>
</template>
