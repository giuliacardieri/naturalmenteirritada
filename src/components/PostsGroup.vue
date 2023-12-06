<script setup>
import { ref, watchEffect, computed } from 'vue'
import Earth from '../components/illustrations/Earth.vue'
import PostCard from '../components/PostCard.vue'

const props = defineProps({
  category: {
    type: String
  }
})

const posts = ref([])
const loaded = ref(false)

const api = computed(() => import.meta.env.VITE_API)

watchEffect(async () => {
  let url = `${api.value}/posts?populate[image][populate][0]=image&populate[category][populate][0]=category&sort[0]=date:DESC`
  if (props.category.length)
    url = `${api.value}/posts?populate[image][populate][0]=image&populate[category][populate][0]=category&filters[category][value]=${props.category}&sort[0]=date:DESC`

  const response = await fetch(url).then((response) => response.json())
  posts.value = response.data
  loaded.value = true
})
</script>

<template>
  <div v-if="loaded" class="posts">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
  <section v-if="!loaded || !posts.length">
    <div class="posts__empty">
      <Earth mad />
      <h2 class="main__h2">Que droga!<br />Ainda não temos posts nessa categoria.</h2>
    </div>
  </section>
</template>

<style scoped>
.posts {
  display: grid;
  grid-column-gap: 48px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.posts__empty {
  align-items: center;
  display: flex;
  gap: 16px;
}

@media (max-width: 1124px) {
  .posts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .posts {
    grid-template-columns: minmax(0, 1fr);
  }
  .posts__empty {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
