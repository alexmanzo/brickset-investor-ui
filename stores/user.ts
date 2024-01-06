import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', () => {
  const userHash = ref('');

  async function login() {
    const loginRequest: { hash: string } = await $fetch('/api/login');

    userHash.value = loginRequest.hash;
  }

  async function checkHash() {
    const checkUserHash = await $fetch('/api/checkUserHash', {
      query: { userHash: userHash.value },
    });
    console.log(checkUserHash.hashStatus);
  }

  return { userHash, login, checkHash };
});
