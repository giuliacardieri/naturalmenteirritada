<script setup>
import Earth from './illustrations/Earth.vue'
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()

const isHome = computed(() => {
  if (route.name === 'home' || route.name === 'category') return true
  return false
})
</script>

<template>
  <nav :class="[{ 'header--home': isHome }, 'header']">
    <h1 v-if="!isHome" class="header__title">
      <RouterLink class="header__title-link" to="/">Naturalmente Irritada</RouterLink>
    </h1>
    <div v-if="!isHome" class="header__illustration">
      <Earth />
    </div>
    <ul class="header__ul">
      <li class="header__li">
        <RouterLink class="header__link" to="/">Home</RouterLink>
      </li>
      <li class="header__li">
        <RouterLink class="header__link" to="/sobre">Sobre</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 72px;
  padding: 20px 64px;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 1;
}

.header:not(.header--home) {
  background-color: var(--black);
  position: sticky;
  top: 0;
}

.header--home {
  justify-content: flex-end;
}

.header--home .header__link {
  color: var(--black);
}

.header--home .header__link.router-link-exact-active:after {
  background-color: var(--black);
}
.header--home .header__link:hover {
  background-color: rgba(0, 0, 0, 0.25);
}

.header__title {
  font-size: 32px;
  line-height: 1;
  margin: 0;
  z-index: 1;
}

.header__title-link {
  color: var(--white);
  font-weight: bold;
  text-decoration: none;
}

.header__illustration {
  bottom: -16px;
  display: flex;
  left: 0;
  justify-content: center;
  margin: auto;
  position: absolute;
  right: 0;
}

.header__ul {
  display: flex;
  gap: 30px;
  padding: 0;
}

.header__li {
  list-style-type: none;
}

.header__link {
  color: var(--white);
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;
}

.header__link:hover {
  background-color: rgba(255, 255, 255, 0.25);
}
.header__link:focus:after,
.header__link.router-link-exact-active:after {
  background-color: var(--white);
  bottom: -2px;
  content: '';
  height: 2px;
  left: 0;
  position: absolute;
  width: 16px;
}
</style>
