<template>
  <div class="flex gap-2">
    <USelectMenu
      v-model="selectedTheme"
      :options="themeOptions"
      placeholder="Choose your theme(s)"
      searchable
      searchable-placeholder="Search by theme name"
      option-attribute="theme"
      by="theme"
      :search-attributes="['theme']"
      :loading="loading"
    >
    </USelectMenu>
    <USelectMenu
      v-if="subthemeOptions.length > 0"
      v-model="selectedSubtheme"
      :options="subthemeOptions"
      placeholder="Select a subtheme"
      searchable
      searchable-placeholder="Search by subtheme"
      option-attribute="subtheme"
      by="subtheme"
      :search-attributes="['subtheme']"
      :loading="loading"
    >
    </USelectMenu>
  </div>
  <UTable :rows="rows" :columns="columns" :loading="loading" class="mt-3">
    <template #currentValue-data="{ row }">
      <UInput v-model="row.currentValue" type="number">
        <template #leading>$</template>
      </UInput>
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
import type { Set, ThemeAnalysisTableRow } from '~/types/set';
import type { Subtheme, SubthemeResponse, Theme } from '~/types/theme';
import type { GetSetsResponse } from '~/types';

const loading = ref(false);
const lego = useLegoStore();
const user = useUserStore();
const selectedTheme: Ref<Theme | undefined> = ref(undefined);
const selectedSubtheme: Ref<Subtheme | undefined> = ref(undefined);
const themeOptions: Ref<Theme[]> = ref(lego.themes);
const subthemeOptions: Ref<Subtheme[]> = ref([]);
const sets: Ref<Set[]> = ref([]);
const rows: Ref<ThemeAnalysisTableRow[]> = ref([]);

const columns = [
  { label: 'Set Number', key: 'number', sortable: true },
  { label: 'Name', key: 'name', sortable: true },
  { label: 'MSRP', key: 'msrp', sortable: true },
  { label: 'Shelf life', key: 'shelfLife', sortable: true },
  { label: 'Years retired', key: 'yearsRetired', sortable: true },
  { label: 'Current Value', key: 'currentValue', sortable: true },
  { label: 'ROI', key: 'roi', sortable: true },
  { label: 'Avg Annual ROI', key: 'avgAnnualRoi', sortable: true },
];

watch(selectedTheme, async (newTheme, oldTheme) => {
  if (newTheme?.theme !== oldTheme?.theme) {
    if (newTheme?.subthemeCount && newTheme?.subthemeCount > 0) {
      const subthemesResponse: SubthemeResponse = await $fetch('/api/subthemes', {
        query: { theme: selectedTheme.value?.theme },
      });
      subthemeOptions.value = subthemesResponse.subthemes.filter(
        (subtheme) => subtheme.setCount > 0 && subtheme.subtheme !== '{None}'
      );
    }
    await executeSearch();
  }
});

watch(selectedSubtheme, async (newSubtheme, oldSubtheme) => {
  if (newSubtheme?.subtheme !== oldSubtheme?.subtheme) {
    await executeSearch();
  }
});

async function executeSearch() {
  loading.value = true;

  const setsResponse: GetSetsResponse = await $fetch('/api/sets', {
    query: {
      theme: selectedTheme.value?.theme,
      subtheme: selectedSubtheme.value?.subtheme,
      pageSize: 100,
      orderBy: 'UserRating',
      userHash: user.userHash,
    },
  });

  sets.value = setsResponse.sets.filter((set) => {
    return !!set.LEGOCom?.US?.retailPrice && !!set.released;
  });

  rows.value = sets.value.map((set) => {
    return {
      number: `${set.number}-${set.numberVariant}`,
      name: set.name,
      msrp: getRetailPrice(set),
      shelfLife: getShelfLife(set),
      yearsRetired: getYearsRetired(set) ?? 'N/A',
      currentValue: getRetailPrice(set),
      roi: '',
      avgAnnualRoi: '',
    };
  });

  loading.value = false;
}

function calclulateRoi(row: ThemeAnalysisTableRow): number {
  const fees = row.currentValue * 0.15;
  const profit = row.currentValue - (row.msrp + fees);

  return profit / row.msrp;
}

function roi(row: ThemeAnalysisTableRow): string {
  const roi = calclulateRoi(row);
  const percentageString = roi.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 2,
  });

  return percentageString;
}

function avgAnnualRoi(row: ThemeAnalysisTableRow): string {
  const roi = calclulateRoi(row);
  const yearsRetired = row.yearsRetired;

  if (yearsRetired && typeof yearsRetired === 'number') {
    const percentageString = (roi / yearsRetired).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2,
    });

    return percentageString;
  }

  return 'N/A';
}
</script>
