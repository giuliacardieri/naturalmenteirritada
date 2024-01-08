export default defineNuxtConfig({
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: "https://shrouded-chamber-44012-cb885503a80c.herokuapp.com/api",
    },
  },
  modules: ["dayjs-nuxt", "@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://naturalmenteirritada.blog",
    routes: [
      "/post/chicxulub-o-asteroide-dos-dinossauros",
      "/post/o-tsunami-no-sudeste-asiatico",
      "/post/a-erupcao-de-eyjafjallajokull",
      "/post/entendendo-mais-sobre-vulcoes",
      "/post/o-tornado-de-indaiatuba",
      "/post/porque-tornados-acontecem",
      "/post/o-que-causa-um-tsunami",
    ],
  },
  dayjs: {
    locales: ["pt"],
    defaultLocale: "pt",
  },
});
