<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useLegoStore } from '@/stores/lego';
import { useUserStore } from '@/stores/user';
const user = useUserStore();
const lego = useLegoStore();

if (!user.userHash) {
  await user.loginToBrickset();
}

if (!lego.themes.length) {
  await lego.getThemes();
}
</script>
