<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import Hero from '../components/Hero.vue'
import CategoryList from '../components/CategoryList.vue'
import PostsGroup from '../components/PostsGroup.vue'

const category = ref('')
const route = useRoute()

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
