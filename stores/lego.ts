import { defineStore } from 'pinia';
import type { GetSetsParams, GetSetsResponse } from '~/types';
import type { Theme, ThemeResponse } from '~/types/theme';
import type { Set } from '~/types/set';

export const useLegoStore = defineStore('legoStore', () => {
  const themes: Ref<Theme[]> = ref([]);

  async function getThemes() {
    const themeReponse: ThemeResponse = await $fetch('/api/themes');
    themes.value = themeReponse.themes.filter((theme) => theme.theme !== '{Unknown}' && theme.setCount > 0);
  }

  return { themes, getThemes };
});
