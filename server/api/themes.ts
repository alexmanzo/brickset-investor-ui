export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const themes = await $fetch(`${config.bricksetApiUrl}/getThemes`, {
    query: {
      apiKey: config.bricksetApiKey,
    },
  });

  return themes;
});
