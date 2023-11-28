<script setup>
import { useRouter } from 'vue-router'

defineProps({
  label: { type: String },
  value: { type: String },
  noIcon: { type: Boolean, default: false },
  active: { type: Boolean, default: false },
  large: { type: Boolean, default: false },
  hasUrl: { type: Boolean, default: false }
})

const router = useRouter()

function getImageUrl(value) {
  return new URL(`../assets/icons/${value}.png`, import.meta.url).href
}

function goToUrl(url, value) {
  if (url) router.push(`/${value}`)
}
</script>

<template>
  <button
    :class="[{ 'button--active': active, 'button--large': large }, 'button']"
    @click="goToUrl(hasUrl, value)"
  >
    <img v-if="!noIcon" class="button__icon" :alt="label" :src="getImageUrl(value)" />
    {{ label }}
  </button>
</template>

<style scoped>
.button {
  align-items: center;
  background-color: transparent;
  border: 1px solid var(--black);
  border-radius: 10px;
  color: var(--black);
  cursor: pointer;
  display: flex;
  font-family: 'Futura';
  gap: 8px;
  line-height: 1;
  min-height: 48px;
  padding: 6px 16px;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;
}
.button:hover .button__icon {
  transform: scale(1.25);
}

.button:focus,
.button--active {
  background-color: var(--dark-blue);
  color: var(--white);
}

.button--large {
  font-size: 18px;
}

.button__icon {
  transition: transform 0.3s ease-in-out;
  width: 28px;
}
</style>
