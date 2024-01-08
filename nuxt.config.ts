export default defineNuxtConfig({
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: "https://shrouded-chamber-44012-cb885503a80c.herokuapp.com/api",
    },
  },
  modules: ["dayjs-nuxt", "@nuxtjs/sitemap", "nuxt-gtag"],
  site: {
    url: "https://naturalmenteirritada.blog",
  },
  sitemap: {
    urls: async () => {
      const response = await fetch(
        "https://shrouded-chamber-44012-cb885503a80c.herokuapp.com/api/posts"
      );
      const data = await response.json();
      return data.data.map((post) => `/post/${post.attributes.url}`);
    },
  },
  dayjs: {
    locales: ["pt"],
    defaultLocale: "pt",
  },
  gtag: {
    id: "G-3JE1D3J5H2",
  },
});
