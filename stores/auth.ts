import { defineStore } from 'pinia';
import type { Session, User } from '@supabase/supabase-js';

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref('');
  const maxAge = ref(3600);
  const refreshToken = useCookie('refreshToken', { maxAge: maxAge.value });
  const user: Ref<User | null> = ref(null);

  async function setAuthData(session: Session | null) {
    if (!session) {
      return;
    }

    maxAge.value = session.expires_in;
    accessToken.value = session.access_token;
    refreshToken.value = session.refresh_token;
  }

  async function setUserData(userData: User | null) {
    user.value = userData;
  }

  async function reset() {
    accessToken.value = '';
    refreshToken.value = '';
    user.value = null;
  }

  return {
    accessToken,
    refreshToken,
    user,
    setAuthData,
    setUserData,
    reset,
  };
});
