import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', () => {
  const userHash = ref('');

  async function loginToBrickset() {
    const loginRequest: { hash: string } = await $fetch('/api/brickset-login');

    userHash.value = loginRequest.hash;
  }

  async function checkHash() {
    const checkUserHash = await $fetch('/api/checkUserHash', {
      query: { userHash: userHash.value },
    });
    console.log(checkUserHash.hashStatus);
  }

  return { userHash, checkHash, loginToBrickset };
});
