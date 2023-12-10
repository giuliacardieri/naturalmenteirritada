<template>
  <div>
    <Hero
      :imageAlignBottom="data?.data?.[0].attributes?.image?.imageAlignBottom"
      :imageAlt="
        data?.data?.[0].attributes?.image?.image?.data?.attributes
          ?.alternativeText
      "
      :image="data?.data?.[0].attributes?.image?.image?.data?.attributes?.url"
    ></Hero>
    <main class="main main--flex">
      <article class="main__section">
        <div class="post">
          <p class="post__date" itemprop="datePublished">
            Postado em
            {{
              $dayjs(data?.data?.[0].attributes?.date).format(
                "DD [de] MMMM [de] YYYY"
              )
            }}
          </p>
          <h1 class="post__title" itemprop="headline">
            {{ data?.data?.[0].attributes?.title }}
          </h1>
          <div
            v-if="data?.data?.[0].attributes?.content"
            class="markdown"
            v-html="$markdown.render(data?.data?.[0].attributes?.content)"
          ></div>
        </div>
        <EmbeddedVideo
          v-if="data?.data?.[0].attributes.video"
          :title="data?.data?.[0].attributes.video.title"
          :src="data?.data?.[0].attributes.video.src"
        />
      </article>
      <PostSidebar :post="data?.data" />
    </main>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const route = useRoute();
const loaded = ref(false);
const url = route.params.id;

const apiUrl = computed(() => {
  return `${runtimeConfig.public.apiUrl}/posts?populate[image][populate][0]=image&populate[category][populate][0]=category&populate[map][populate][0]=map&populate[video][populate][0]=video&filters[url]=${url}`;
});

const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch(apiUrl, { lazy: true, server: false });
loaded.value = true;

useSeoMeta({
  title: `${data?.data?.[0].attributes?.title} | Naturalmente Irritada`,
  robots: "index, follow",
  googlebot: "index, follow",
  canonical: `https://naturalmenteirritada.blog/post/${data?.data?.[0].attributes?.url}`,
  description: data?.data?.[0].attributes?.content?.substring(0, 150),
  ogDescription: data?.data?.[0].attributes?.content?.substring(0, 150),
  ogTitle: `${data?.data?.[0].attributes?.title} | Naturalmente Irritada`,
  ogImage: data?.data?.[0].attributes?.image?.image?.data?.attributes?.url,
  ogUrl: `https://naturalmenteirritada.blog/post/${data?.data?.[0].attributes?.url}`,
  ogType: "article",
  twitterCard: "summary_large_image",
});
</script>
<style scoped>
.post {
  max-width: 1440px;
  padding: var(--post-padding, 32px 64px);
}
@media (max-width: 767px) {
  .post {
    --post-padding: 32px 24px;
  }
}

.post__date {
  font-size: 14px;
  text-transform: uppercase;
}

.post__title {
  margin-bottom: 8px;
}
</style>
