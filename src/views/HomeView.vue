<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

import Hero from '../components/Hero.vue'
import CategoryList from '../components/CategoryList.vue'
import PostsGroup from '../components/PostsGroup.vue'

const category = ref('')
const route = useRoute()

function getImageUrl(value) {
  return new URL(`../assets/naturalmente.png`, import.meta.url).href
}

useHead({
  title: 'Naturalmente Irritada',
  meta: [
    {
      name: 'description',
      content:
        'Naturalmente Irritada é um blog informativo sobre desastres naturais em nosso planeta. Falamos desde enchentes até quedas de asteroídes.'
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
      content: 'https://naturalmenteirritada.blog/'
    },
    {
      name: 'og:title',
      content: 'Naturalmente Irritada'
    },
    {
      name: 'og:description',
      content:
        'Naturalmente Irritada é um blog informativo sobre desastres naturais em nosso planeta. Falamos desde enchentes até quedas de asteroídes.'
    },
    {
      name: 'og:image',
      content: getImageUrl()
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'og:url',
      content: 'https://naturalmenteirritada.blog/'
    },
    {
      name: 'og:title',
      content: 'Naturalmente Irritada'
    },
    {
      name: 'twitter:description',
      content:
        'Naturalmente Irritada é um blog informativo sobre desastres naturais em nosso planeta. Falamos desde enchentes até quedas de asteroídes.'
    },
    {
      name: 'twitter:image',
      content: getImageUrl()
    }
  ]
})

if (route.params.category) setCategory(route.params.category)

function setCategory(value) {
  category.value = value
}
</script>

<template>
  <Hero
    title="Naturalmente Irritada"
    description="Todos admiramos a natureza, mas porque será que ela parece sempre estar irritada?"
    isMain
  ></Hero>
  <main class="main">
    <section class="main__section">
      <h2>Categorias</h2>
      <CategoryList :category="route.params.category" @updateCategory="setCategory" />
    </section>
    <section class="main__section">
      <h2>Posts</h2>
      <PostsGroup :category="category" />
    </section>
  </main>
</template>

<style scoped></style>
