<template>
  <div>
    <h1 class="font-semibold text-2xl">Theme analysis</h1>
    <p class="w-3/4 mb-4">
      Research the current market price of a set. Add that price and the ROI / annual average ROI will be automatically calculated. The ROI assumes 15% in selling fees/costs.
    </p>
  </div>
  <UDivider class="my-6" />
  <div class="lg:flex gap-2">
    <UFormGroup label="Theme" class="flex-1">
      <USelectMenu
        v-model="selectedTheme"
        id="theme"
        :options="themeOptions"
        placeholder="Choose your theme(s)"
        searchable
        searchable-placeholder="Search by theme name"
        :clearSearchOnClose="true"
        option-attribute="theme"
        by="theme"
        size="lg"
        :search-attributes="['theme']"
        :loading="loading"
      >
      </USelectMenu>
    </UFormGroup>

    <UFormGroup label="Subtheme" class="flex-1" v-if="subthemeOptions.length > 0">
      <USelectMenu
        v-model="selectedSubtheme"
        id="subtheme"
        :options="subthemeOptions"
        placeholder="Select a subtheme"
        searchable
        searchable-placeholder="Search by subtheme"
        :clearSearchOnClose="true"
        option-attribute="subtheme"
        by="subtheme"
        size="lg"
        class="flex-1"
        :search-attributes="['subtheme']"
        :loading="loading"
      >
      </USelectMenu>
    </UFormGroup>
  </div>
  <UTable :rows="rows" :columns="columns" :loading="loading" class="mt-3">
    <template #currentValue-data="{ row }">
      <UInput v-model="row.currentValue" type="number">
        <template #leading>$</template>
      </UInput>
    </template>
    <template #roi-data="{ row }">
      {{
        roi(row).toLocaleString(undefined, {
          style: 'percent',
          minimumFractionDigits: 2,
        })
      }}
    </template>
    <template #avgAnnualRoi-data="{ row }">
      {{
        avgAnnualRoi(row).toLocaleString(undefined, {
          style: 'percent',
          minimumFractionDigits: 2,
        })
      }}
    </template>
    <template #number-data="{ row }">
      <ULink
        :to="`https://brickset.com/sets/${row.number}`"
        target="_blank"
        rel="noopener noreferrer"
        class="text-purple-900 hover:text-purple-600 font-semibold transition-colors duration-100"
        >{{ row.number }}</ULink
      >
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
const themeOptions = computed((): Theme[] => lego.themes);
const subthemeOptions: Ref<Subtheme[]> = ref([]);
const sets: Ref<Set[]> = ref([]);
const rows: Ref<ThemeAnalysisTableRow[]> = ref([]);

const columns = [
  { label: 'Set Number', key: 'number', sortable: true },
  { label: 'Name', key: 'name', sortable: true },
  // { label: 'Subtheme', key: 'subtheme', sortable: true },
  { label: 'MSRP', key: 'msrp', sortable: true },
  { label: 'Shelf life', key: 'shelfLife', sortable: true },
  { label: 'Years retired', key: 'yearsRetired', sortable: true },
  { label: 'Current Value', key: 'currentValue', sortable: true },
  { label: 'ROI', key: 'roi', sortable: true },
  { label: 'Avg Annual ROI', key: 'avgAnnualRoi', sortable: true },
];

if (!lego.themes.length) {
  await callOnce(lego.getThemes);
}

watch(selectedTheme, async (newTheme, oldTheme) => {
  if (newTheme?.theme !== oldTheme?.theme) {
    selectedSubtheme.value = undefined;
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
      subtheme: set.subtheme,
      msrp: getRetailPrice(set),
      shelfLife: getShelfLife(set),
      yearsRetired: getYearsRetired(set),
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

function roi(row: ThemeAnalysisTableRow): number {
  return calclulateRoi(row);
}

function avgAnnualRoi(row: ThemeAnalysisTableRow): number {
  const roi = calclulateRoi(row);
  const yearsRetired = row.yearsRetired;

  if (yearsRetired && typeof yearsRetired === 'number') {
    return roi / yearsRetired;
  }

  return 0;
}
</script>
