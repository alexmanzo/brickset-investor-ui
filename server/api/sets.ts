export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  const stringifiedParams = `{${Object.entries(query)
    .map(([key, value]) => {
      if (key !== 'userHash') return `'${key}':'${value}'`;
    })
    .join(',')}}`;

    const userHash = query.userHash || '';

  const sets = await $fetch(`${config.bricksetApiUrl}/getSets`, {
    query: {
      userHash,
      params: stringifiedParams,
      apiKey: config.bricksetApiKey,
    },
  });

  return sets;
});
