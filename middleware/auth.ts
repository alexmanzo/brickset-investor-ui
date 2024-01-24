export default defineNuxtRouteMiddleware(async (to, _from) => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();
  const auth = useAuthStore();

  if (!user.value) {
    if (!auth.refreshToken) {
      return navigateTo('/login');
    }

    if (auth.refreshToken) {
      const { data, error } = await supabase.auth.refreshSession({ refresh_token: auth.refreshToken });
      const { session, user } = data;
      auth.setAuthData(session);
      auth.setUserData(user);

      if (!session?.access_token || error) {
        return navigateTo('/login');
      }

      return navigateTo(to.path)
    }
  }
});
