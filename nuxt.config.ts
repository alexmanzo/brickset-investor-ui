// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 8081,
  },
  // routeRules: {
  //   // Homepage pre-rendered at build time
  //   '/': { prerender: true },
  //   // Product page generated on-demand, revalidates in background
  //   '/products/**': { swr: 3600 },
  //   // Blog post generated on-demand once until next deploy
  //   '/blog/**': { isr: true },
  //   // Admin dashboard renders only on client-side
  //   '/admin/**': { ssr: false },
  //   // Add cors headers on API routes
  //   '/api/**': { cors: true },
  //   // Redirects legacy urls
  //   '/old-page': { redirect: '/new-page' }
  // }
  typescript: {
    typeCheck: true
  },
  modules: ['@nuxt/ui']
});
