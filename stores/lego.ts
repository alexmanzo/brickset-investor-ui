import { defineStore } from 'pinia';
import type { Theme, ThemeResponse } from '~/types/theme';

export const useLegoStore = defineStore('legoStore', () => {
  const themes: Ref<Theme[]> = ref([]);

  async function getThemes() {
    const themeReponse: ThemeResponse = await $fetch('/api/themes');

    themes.value = themeReponse.themes
  }


  return { themes, getThemes };
});
