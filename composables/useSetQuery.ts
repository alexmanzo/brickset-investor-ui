import type { GetSetsParams, GetSetsResponse } from '~/types';
import type { Set } from '~/types/set';

export function useSetQuery(pageSize: number = 20) {
  const sets = ref<Set[]>([]);
  const loading = ref(false);
  const totalMatches = ref(0);
  const currentPage: Ref<number> = ref(1);
  const totalPages = computed(() => Math.ceil(totalMatches.value / pageSize));
  const user = useUserStore();

  async function executeQuery(query: GetSetsParams) {
    loading.value = true;
    try {
      const setsResponse: GetSetsResponse = await $fetch('/api/sets', {
        query: {
          ...query,
          pageSize,
          userHash: user.userHash,
        },
      });

      if (setsResponse.status === 'error') {
        throw new Error(setsResponse.message)
      }

      sets.value = setsResponse.sets;
      totalMatches.value = setsResponse.matches;
    } catch (e) {
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  function setCurrentPage(page: number) {
    currentPage.value = page;
  }

  return { sets, loading, totalMatches, currentPage, totalPages, executeQuery, setCurrentPage };
}
