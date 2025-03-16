<script setup lang="ts">
import { NavigationOption } from '../../types/navigation';

interface SideMenuProps {
  options: NavigationOption[];
}
defineProps<SideMenuProps>();
defineEmits<{
  (e: 'routeClick', route: string): void;
}>();
</script>
<template>
  <VNavigationDrawer>
    <VListItem title="Nuex internet shop" />
    <VDivider />
    <VListItem
      v-for="{ title, link } in options"
      :key="title"
      :title
      @click="$emit('routeClick', link)"
    />
  </VNavigationDrawer>
</template>
