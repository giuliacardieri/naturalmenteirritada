<script setup>
import { ref, watchEffect, computed } from 'vue'
import { useRoute } from 'vue-router'

import Hero from '../components/Hero.vue'
import EmbeddedVideo from '../components/EmbeddedVideo.vue'
import PostSidebar from '../components/PostSidebar.vue'
import { useSeoMeta } from '@unhead/vue'

const route = useRoute()

const post = ref(null)
const loaded = ref(false)
const postDescription = ref('')

const api = computed(() => import.meta.env.VITE_API)

useSeoMeta({
  title: `${post?.value?.[0].attributes?.title} | Naturalmente Irritada`,
  description: postDescription,
  ogDescription: postDescription,
  ogTitle: `${post?.value?.[0].attributes?.title} | Naturalmente Irritada`,
  ogImage: `${post?.value?.[0].attributes?.image?.image?.data?.attributes?.url}`,
  ogUrl: `https://naturalmenteirritada.blog/post/${post?.value?.[0].attributes?.url}`,
  ogType: 'article',
  twitterCard: 'summary_large_image'
})

watchEffect(async () => {
  const url = route.params.url
  const response = await fetch(
    `${api.value}/posts?populate[image][populate][0]=image&populate[category][populate][0]=category&populate[map][populate][0]=map&populate[video][populate][0]=video&filters[url]=${url}`
  ).then((response) => response.json())
  post.value = response.data
  postDescription.value = (post?.value?.[0].attributes?.content).substring(0, 150)
  loaded.value = true
})
</script>

<template>
  <Hero
    :imageAlignBottom="post?.[0].attributes?.image?.imageAlignBottom"
    :imageAlt="post?.[0].attributes?.image?.image?.data?.attributes?.alternativeText"
    :image="post?.[0].attributes?.image?.image?.data?.attributes?.url"
  ></Hero>
  <main class="main main--flex">
    <article class="main__section">
      <div class="post">
        <p class="post__date" itemprop="datePublished">
          Postado em {{ $dayjs(post?.[0].attributes?.date).format('DD [de] MMMM [de] YYYY') }}
        </p>
        <h1 class="post__title" itemprop="headline">{{ post?.[0].attributes?.title }}</h1>
        <div
          v-if="post?.[0].attributes?.content"
          class="markdown"
          v-html="$markdown.render(post?.[0].attributes?.content)"
        ></div>
      </div>
      <EmbeddedVideo
        v-if="post?.[0].attributes.video"
        :title="post?.[0].attributes.video.title"
        :src="post?.[0].attributes.video.src"
      />
    </article>
    <PostSidebar :post="post" />
  </main>
</template>

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
