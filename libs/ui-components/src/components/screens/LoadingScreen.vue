<script setup lang="ts"></script>
<template>
  <div class="loader">
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
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
