<template>
  <div class="flex gap-2">
    <USelectMenu
      v-model="selected"
      :options="options"
      placeholder="Choose your theme(s)"
      searchable
      searchable-placeholder="Search by theme name"
      option-attribute="theme"
      by="theme"
      :search-attributes="['theme']"
      class="w-1/4"
    >
    </USelectMenu>
    <UButton @click="executeSearch">Get Sets</UButton>
  </div>
  <UTable :rows="rows" class="mt-3" />
</template>

<script setup lang="ts">
import { useLegoStore } from '@/stores/lego';
import { useUserStore } from '@/stores/user';

import type { GetSetsParams, GetSetsResponse } from '~/types';
import type { Set } from '~/types/set';
import type { Theme } from '~/types/theme';

const lego = useLegoStore();
const user = useUserStore();
const rows: Ref<Set[]> = ref([]);
// const columns = ref([]);
const selected: Ref<Theme | undefined> = ref(undefined);
const options = ref(lego.themes);

async function executeSearch() {
  const setsResponse: GetSetsResponse = await $fetch('/api/sets', {
    query: { theme: selected.value?.theme, userHash: user.userHash },
  });
  rows.value = setsResponse.sets;
}
</script>
