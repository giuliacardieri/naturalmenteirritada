export default defineNuxtConfig({
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: "https://shrouded-chamber-44012-cb885503a80c.herokuapp.com/api",
    },
  },
  modules: ["dayjs-nuxt"],
  dayjs: {
    locales: ["pt"],
    defaultLocale: "pt",
  },
});
