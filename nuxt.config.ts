export default defineNuxtConfig({
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: "http://localhost:1337/api",
    },
  },
  modules: ["dayjs-nuxt"],
  dayjs: {
    locales: ["pt"],
    defaultLocale: "pt",
  },
});
