<script setup lang="ts">
interface CardProps {
  title: string;
  imgSrc?: string;
  subtitle?: string;
}
defineProps<CardProps>();
</script>
<template>
  <VCard class="mx-auto">
    <VImg
      v-if="imgSrc"
      class="align-end text-white"
      :src="imgSrc"
      cover
    >
      <VCardTitle>{{ title }}</VCardTitle>
    </VImg>

    <VCardTitle v-else>
      {{ title }}
    </VCardTitle>
    <VCardSubtitle
      v-if="subtitle"
      class="pt-4"
    >
      {{ subtitle }}
    </VCardSubtitle>

    <VCardText v-if="$slots.text">
      <slot name="text" />
    </VCardText>

    <VCardActions v-if="$slots.actions">
      <slot name="actions" />
    </VCardActions>
  </VCard>
</template>
