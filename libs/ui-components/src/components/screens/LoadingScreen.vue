<script setup lang="ts">
interface LoaderProps {
  width?: string | number;
  height?: string | number;
}
defineProps<LoaderProps>();
</script>
<template>
  <div
    class="loader"
    :style="{
      height: height ?? '100vh',
      width: width ?? '100vw',
    }"
  >
    <VProgressCircular
      :size="80"
      :width="7"
      color="primary"
      indeterminate
    />
  </div>
</template>
<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
