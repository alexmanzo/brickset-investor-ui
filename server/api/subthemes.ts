export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  const subthemes = await $fetch(`${config.bricksetApiUrl}/getSubthemes`, {
    query: {
      theme: query.theme,
      apiKey: config.bricksetApiKey,
    },
  });

  return subthemes;
});
