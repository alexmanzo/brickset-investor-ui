<template>
  <div>
    <h1>Brickset Investor UI</h1>
    <p>The goal of this site is to create a UI focused on LEGO investing by leveraging the Brickset API.</p>
  </div>
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
