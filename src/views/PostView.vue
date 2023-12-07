<script setup>
import { ref, watchEffect, computed } from 'vue'
import { useRoute } from 'vue-router'

import Hero from '../components/Hero.vue'
import EmbeddedVideo from '../components/EmbeddedVideo.vue'
import PostSidebar from '../components/PostSidebar.vue'
import { useHead } from '@unhead/vue'

const route = useRoute()

const post = ref(null)
const loaded = ref(false)

const api = computed(() => import.meta.env.VITE_API)

watchEffect(async () => {
  const url = route.params.url
  const response = await fetch(
    `${api.value}/posts?populate[image][populate][0]=image&populate[category][populate][0]=category&populate[map][populate][0]=map&populate[video][populate][0]=video&filters[url]=${url}`
  ).then((response) => response.json())
  post.value = response.data
  const postDescription = (post?.value?.[0].attributes?.content).substring(0, 150)
  loaded.value = true

  useHead({
    title: `${post?.value?.[0].attributes?.title} | Naturalmente Irritada`,
    meta: [
      {
        name: 'description',
        content: postDescription
      },
      {
        name: 'robots',
        content: 'index, follow'
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:url',
        content: `https://naturalmenteirritada.blog/${post?.value?.[0].attributes?.url}`
      },
      {
        name: 'og:title',
        content: `${post?.value?.[0].attributes?.title} | Naturalmente Irritada`
      },
      {
        name: 'og:description',
        content: postDescription
      },
      {
        name: 'og:image',
        content: `${imagePath.value}${post?.value?.[0].attributes?.image?.data?.attributes?.url}`
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'og:url',
        content: `https://naturalmenteirritada.blog/${post?.value?.[0].attributes?.url}`
      },
      {
        name: 'og:title',
        content: `${post?.value?.[0].attributes?.title} | Naturalmente Irritada`
      },
      {
        name: 'twitter:description',
        content: postDescription
      },
      {
        name: 'twitter:image',
        content: `${imagePath.value}${post?.value?.[0].attributes?.image?.data?.attributes?.url}`
      }
    ]
  })
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
