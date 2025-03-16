<script setup lang="ts">
import { VApp, VMain } from 'vuetify/lib/components/index.mjs';
</script>
<template>
  <VApp>
    <VMain>
      <slot name="story" />
    </VMain>
  </VApp>
</template>
