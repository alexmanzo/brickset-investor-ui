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
  <UTable :rows="rows" class="mt-3">
    <template #number-data="{ row }">
      <a :href="`https://brickset.com/sets/${row.number}`" target="_blank" rel="noopener noreferrer">{{
        row.number
      }}</a>
    </template></UTable
  >
</template>

<script setup lang="ts">
import { useLegoStore } from '@/stores/lego';
import { useUserStore } from '@/stores/user';

import type { GetSetsParams, GetSetsResponse } from '~/types';
import type { Set } from '~/types/set';
import type { Theme } from '~/types/theme';

const lego = useLegoStore();
const user = useUserStore();
const sets: Ref<Set[]> = ref([]);
// const columns = ref([]);
const selected: Ref<Theme | undefined> = ref(undefined);
const options = ref(lego.themes);

const rows = computed(() => {
  return sets.value.map((set) => {
    return {
      number: `${set.number}-${set.numberVariant}`,
      name: set.name,
      theme: set.theme,
      MSRP: set.LEGOCom?.US?.retailPrice ?? 'N/A',
      released: set.LEGOCom?.US?.dateFirstAvailable
        ? new Date(`${set.LEGOCom?.US?.dateFirstAvailable}`).getFullYear()
        : set.year,
      retired: set.LEGOCom?.US?.dateLastAvailable
        ? new Date(`${set.LEGOCom?.US?.dateLastAvailable}`).getFullYear()
        : 'TBD/Unknown',
    };
  });
});

const notReleased = computed(() => {
  return sets.value.filter((set) => set.released === false);
});

async function executeSearch() {
  const setsResponse: GetSetsResponse = await $fetch('/api/sets', {
    query: { theme: selected.value?.theme, year: '2019,2020,2022,2023,2024', pageSize: 500, userHash: user.userHash },
  });
  sets.value = setsResponse.sets;
}
</script>
