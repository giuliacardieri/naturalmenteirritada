<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

defineProps({
  post: { type: Object }
})

function getImageUrl(value) {
  return new URL(`../assets/icons/${value}.png`, import.meta.url).href
}
</script>

<template>
  <RouterLink
    class="card"
    itemprop="url"
    :to="`/post/${post?.attributes?.url}`"
    itemscope
    itemtype="https://schema.org/NewsArticle"
  >
    <img
      v-if="post?.attributes?.image"
      :class="[
        {
          'card__image--bottom': post?.attributes?.image?.imageAlignBottom
        },
        'card__image'
      ]"
      :src="post?.attributes?.image?.image?.data?.attributes?.formats?.small?.url"
      :alt="post?.attributes?.image?.image?.data?.attributes?.alternativeText"
    />
    <div class="card__text">
      <p class="card__info">
        <span>
          <img
            class="card__icon"
            :alt="post?.attributes?.category?.data?.attributes?.name"
            :src="getImageUrl(post?.attributes?.category?.data?.attributes?.value)"
            itemprop="image"
        /></span>
        {{ post?.attributes?.category?.data?.attributes?.name }} -
        <span itemprop="datePublished">{{
          $dayjs(post?.attributes?.date).format('DD [de] MMM [de] YYYY')
        }}</span>
      </p>
      <h3 class="card__title" itemprop="headline">{{ post?.attributes?.title }}</h3>
      <p class="card__description">{{ post?.attributes?.content }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  background-color: var(--white);
  border: 1px solid rgba(66, 83, 51, 0.28);
  border-radius: 10px;
  color: var(--black);
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
}

.card:hover,
.card:focus {
  transform: scale(0.975);
}

.card__image {
  border-radius: 10px 10px 0 0;
  height: 160px;
  object-fit: cover;
  object-position: top;
  width: 100%;
}

.card__image--bottom {
  object-position: bottom;
}

.card__text {
  padding: 16px 24px;
}

.card__info {
  align-items: center;
  display: flex;
  font-size: 14px;
  gap: 4px;
  text-transform: uppercase;
}

.card__icon {
  width: 24px;
}

.card__title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.card__description {
  display: -webkit-box;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
</style>
