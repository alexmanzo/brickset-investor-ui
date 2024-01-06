export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event)
  const loginRequest = await $fetch(`${config.bricksetApiUrl}/login`, {
    query: {
      username: config.bricksetUsername,
      password: config.bricksetPassword,
    },
  });

  return { loginRequest }
});
