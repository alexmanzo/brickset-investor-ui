export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const loginRequest = await $fetch(`${config.bricksetApiUrl}/login`, {
    query: {
      username: config.bricksetUsername,
      password: config.bricksetPassword,
      apiKey: config.bricksetApiKey,
    },
  });

  return loginRequest;
});
