<script setup>
import { ref, watchEffect, computed } from 'vue'
import { useRoute } from 'vue-router'

import Hero from '../components/Hero.vue'
import CategoryButton from '../components/CategoryButton.vue'
import IconsList from '../components/IconsList.vue'
import { useHead } from '@unhead/vue'

const route = useRoute()

const post = ref(null)
const loaded = ref(false)

const api = computed(() => import.meta.env.VITE_API)
const imagePath = computed(() => import.meta.env.VITE_IMAGE_PATH)

watchEffect(async () => {
  const url = route.params.url
  const response = await fetch(`${api.value}/posts?populate=*&filters[url]=${url}`).then(
    (response) => response.json()
  )
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
    :imageAlt="post?.[0].attributes?.image?.data?.attributes?.alternativeText"
    :image="`${imagePath}${post?.[0].attributes?.image?.data?.attributes?.url}`"
  ></Hero>
  <main class="main main--flex">
    <article class="main__section main__section--padding">
      <p class="post__date" itemprop="datePublished">
        Postado em {{ $dayjs(post?.[0].attributes?.date).format('DD [de] MMMM [de] YYYY') }}
      </p>
      <h1 class="post__title" itemprop="headline">{{ post?.[0].attributes?.title }}</h1>
      <div
        v-if="post?.[0].attributes?.content"
        class="markdown"
        v-html="$markdown.render(post?.[0].attributes?.content)"
      ></div>
    </article>
    <aside class="post__sidebar">
      <div class="post__content">
        <section class="post__section">
          <h2 class="post__h2">Categoria</h2>
          <CategoryButton
            :label="post?.[0].attributes?.category?.data?.attributes?.name"
            :value="post?.[0].attributes?.category?.data?.attributes?.value"
            large
            hasUrl
          />
        </section>
        <section class="post__section">
          <h2 class="post__h2">Fale com a gente sobre esse post!</h2>
          <IconsList small />
        </section>
      </div>
    </aside>
  </main>
</template>

<style scoped>
.post__date {
  font-size: 14px;
  text-transform: uppercase;
}

.post__sidebar {
  background-color: var(--white);
  min-width: 360px;
  padding: 32px 24px;
  position: relative;
}

.post__title {
  margin-bottom: 8px;
}

.post__h2 {
  font-size: 20px;
}

.post__section + .post__section {
  margin-top: 24px;
}

@media (min-width: 768px) {
  .post__content {
    position: sticky;
    top: 104px;
  }
}

@media (max-width: 767px) {
  .post__sidebar {
    min-width: 100vw;
    padding: 24px 24px 48px 24px;
  }

  .post__section + .post__section {
    margin-top: 16px;
  }
}
</style>
