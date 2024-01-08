<template>
  <div>
    <div v-if="loaded" class="posts">
      <PostCard v-for="post in posts?.data" :key="post.id" :post="post" />
    </div>
    <section v-else>
      <div class="posts__empty">
        <IllustrationEarth mad spinning />
        <h2 class="main__h2">Carregando...</h2>
      </div>
    </section>
    <section v-if="loaded && !posts?.data?.length">
      <div class="posts__empty">
        <IllustrationEarth mad />
        <h2 class="main__h2">
          Que droga!<br />Ainda não temos posts nessa categoria.
        </h2>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  category: {
    type: String,
    default: "",
  },
});

const url = computed(() => {
  if (props.category.length)
    return `${runtimeConfig.public.apiUrl}/posts?populate[image][populate][0]=image&populate[category][populate][0]=category&filters[category][value]=${props.category}&sort[0]=date:DESC`;
  return `${runtimeConfig.public.apiUrl}/posts?populate[image][populate][0]=image&populate[category][populate][0]=category&sort[0]=date:DESC`;
});

const loaded = ref(false);
const runtimeConfig = useRuntimeConfig();
const { data: posts } = await useFetch(url, {
  lazy: true,
  server: false,
  onResponse() {
    loaded.value = true;
  },
});
</script>
<style scoped>
.posts {
  display: grid;
  grid-column-gap: 32px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: 32px;
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
