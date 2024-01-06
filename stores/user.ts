import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userHash: '',
  }),
  actions: {
    async login() {
      const loginRequest: { hash: string } = await $fetch('/api/login');

      this.userHash = loginRequest.hash;
    },
    async checkHash() {
      const checkUserHash = await $fetch('/api/checkUserHash', {
        query: { userHash: this.userHash },
      });
      console.log(checkUserHash.hashStatus);
    },
  },
});
