import md from "markdown-it";

export default defineNuxtPlugin(() => {
  const renderer = md();
  return {
    provide: {
      markdown: renderer,
    },
  };
});
