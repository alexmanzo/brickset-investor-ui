export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
  const hashStatus = await $fetch(`${config.bricksetApiUrl}/checkUserHash`, {
    query: {
      apiKey: config.bricksetApiKey,
      userHash: query.userHash,
    },
  });

  return { hashStatus }
});
