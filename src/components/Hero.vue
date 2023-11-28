<script setup>
import Earth from './illustrations/Earth.vue'
defineProps({
  title: { type: String },
  description: { type: String },
  image: { type: String },
  imageAlt: { type: String },
  isMain: { type: Boolean, default: false }
})
</script>

<template>
  <section :class="[{ 'hero--main': isMain }, 'hero']">
    <div class="hero__overlay">
      <img
        v-if="isMain"
        class="hero__image-overlay"
        src="/assets/overlay-main.svg"
        role="presentation"
      />
      <img v-if="image" class="hero__image" :src="image" :alt="imageAlt" />
    </div>
    <div v-if="isMain" class="hero__wrapper">
      <div class="hero__text">
        <h1 class="hero__title">{{ title }}</h1>
        <p class="hero__description">{{ description }}</p>
      </div>
      <div v-if="isMain" class="hero__drawing">
        <Earth class="hero__earth" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  align-items: center;
  border-bottom: 4px solid var(--black);
  display: flex;
  min-height: 360px;
  position: relative;
  width: 100vw;
}

.hero:not(.hero--main) {
  padding-top: 72px;
  min-height: 432px;
}

.hero__wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 64px;
  width: 100%;
}

.hero:not(.hero--main) .hero__overlay {
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
}

.hero__image {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.hero__image-overlay {
  position: absolute;
  right: 0;
  top: 0;
}

.hero__text {
  z-index: 1;
}

.hero__title {
  font-size: 56px;
  font-weight: bold;
  line-height: 1;
}

.hero__description {
  font-size: 24px;
  line-height: 1.5;
  margin-top: 20px;
}

.hero__drawing {
  min-width: 300px;
}

.hero__earth {
  transform: scale(3);
}

.hero--main {
  margin-top: 0;
}

.hero--main .hero__text {
  width: 50%;
}
</style>
