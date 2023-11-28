<script setup>
import IconButton from '../components/IconButton.vue'

defineProps({
  small: { type: Boolean, default: false }
})

const icons = [
  { label: 'Email', link: 'mailto:naturalmenteirritada@gmail.com', icon: 'email' },
  { label: 'Instagram', link: 'https://instagram.com/naturalmenteirritada', icon: 'instagram' }
]
</script>

<template>
  <ul class="icons">
    <li class="icons__item" v-for="icon in icons" :key="icon.label">
      <IconButton :icon="icon.icon" :label="icon.label" :link="icon.link" :small="small" />
    </li>
  </ul>
</template>

<style scoped>
.icons {
  display: flex;
  gap: 16px;
  padding: 0;
}

.icons__item {
  list-style-type: none;
}
</style>
