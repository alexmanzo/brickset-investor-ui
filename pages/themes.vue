<template>
  <div class="flex gap-2">
    <USelectMenu
      v-model="selectedTheme"
      :options="options"
      placeholder="Choose your theme(s)"
      searchable
      searchable-placeholder="Search by theme name"
      option-attribute="theme"
      by="theme"
      :search-attributes="['theme']"
      class="w-1/4"
      :loading="loading"
    >
    </USelectMenu>
    <UButton @click="executeSearch" :loading="loading">Get Sets</UButton>
  </div>
  <UTable :rows="rows" :columns="columns" :loading="loading" class="mt-3">
    <template #currentValue-data="{ row }">
      <UInput v-model="row.currentValue" type="number" />
    </template>
    <template #roi-data="{ row }">
      {{ roi(row) }}
    </template>
    <template #avgAnnualRoi-data="{ row }">
      {{ avgAnnualRoi(row) }}
    </template>
    <template #number-data="{ row }">
      <ULink :to="`https://brickset.com/sets/${row.number}`" target="_blank" rel="noopener noreferrer">{{
        row.number
      }}</ULink>
    </template>
  </UTable>
</template>

<script setup lang="ts">
import { useLegoStore } from '@/stores/lego';
import { useUserStore } from '@/stores/user';
import { useDayjs } from '#dayjs';
import type { Set } from '~/types/set';
import type { Theme } from '~/types/theme';
import type { GetSetsResponse } from '~/types';

const loading = ref(false);
const lego = useLegoStore();
const user = useUserStore();
const dayjs = useDayjs();
const sets: Ref<Set[]> = ref([]);
// const columns = ref([]);
const selectedTheme: Ref<Theme | undefined> = ref(undefined);
const options = ref(lego.themes);

const columns = [
  { label: 'Set Number', key: 'number', sortable: true },
  { label: 'Name', key: 'name', sortable: true },
  { label: 'Theme', key: 'theme', sortable: true },
  { label: 'MSRP', key: 'MSRP', sortable: true },
  { label: 'Years On Market', key: 'yearsOnMarket', sortable: true },
  { label: 'Time retired', key: 'yearsRetired', sortable: true },
  { label: 'Current Value', key: 'currentValue', sortable: true },
  { label: 'ROI', key: 'roi', sortable: true },
  { label: 'Avg Annual ROI', key: 'avgAnnualRoi', sortable: true },
];

const rows: any = ref([]);

function roi(row: any) {
  const rowToUpdate = rows.value.find((r: any) => r.number === row.number);
  rowToUpdate.roi = Number((row.currentValue - row.MSRP) / row.MSRP).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
  });

  return row.roi;
}

function avgAnnualRoi(row: any) {
  const rowToUpdate = rows.value.find((r: any) => r.number === row.number);
  const roi = Number((row.currentValue - row.MSRP) / row.MSRP);
  const yearsOnMarket = Number(row.dateLastAvailable.fromNow('yy').replace(' years', ''));

  rowToUpdate.avgAnnualRoi = (roi / yearsOnMarket).toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
  });
  return row.avgAnnualRoi;
}

async function executeSearch() {
  loading.value = true;
  const setsResponse: GetSetsResponse = await $fetch('/api/sets', {
    query: { theme: selectedTheme.value?.theme, pageSize: 100, userHash: user.userHash },
  });
  sets.value = setsResponse.sets.filter((set) => {
    return set.LEGOCom?.US?.retailPrice && !!set.released;
  });

  rows.value = sets.value.map((set) => {
    const dateFirstAvailable = dayjs(`${set.LEGOCom?.US?.dateFirstAvailable}`);
    const dateLastAvailable = dayjs(`${set.LEGOCom?.US?.dateLastAvailable}`);
    const yearsOnMarket =
      dateFirstAvailable && dateLastAvailable ? dateLastAvailable.from(dateFirstAvailable, true) : dayjs(set.year).fromNow(true);
    const yearsRetired = dateFirstAvailable && dateLastAvailable ? dateLastAvailable.fromNow(true) : 'N/A';
    return {
      number: `${set.number}-${set.numberVariant}`,
      name: set.name,
      theme: set.theme,
      MSRP: set.LEGOCom?.US?.retailPrice ?? 'N/A',
      dateFirstAvailable,
      dateLastAvailable,
      yearsOnMarket,
      yearsRetired,
      currentValue: 0.0,
      roi: 0,
      avgAnnualRoi: 0,
    };
  });
  loading.value = false;
}
</script>
