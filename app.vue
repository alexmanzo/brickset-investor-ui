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
  await callOnce(user.login);
}

if (!lego.themes.length) {
  await callOnce(lego.getThemes);
}
</script>
