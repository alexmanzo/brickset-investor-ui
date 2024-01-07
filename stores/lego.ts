import { defineStore } from 'pinia';
import type { Theme, ThemeResponse } from '~/types/theme';

export const useLegoStore = defineStore('legoStore', () => {
  const allThemes: Ref<Theme[]> = ref([]);
  const themes = computed((): Theme[] => {
    return allThemes.value.filter(
      (theme) =>
        theme.theme !== '{Unknown}' &&
        theme.setCount > 0 &&
        (theme.yearFrom > 2010 || theme.yearTo >= new Date().getFullYear())
    );
  });
  async function getThemes() {
    const themeResponse: ThemeResponse = await $fetch('/api/themes');
    allThemes.value = themeResponse.themes;
  }

  return { themes, getThemes };
});
