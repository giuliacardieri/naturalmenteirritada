<template>
  <a
    :class="[{ 'icon--small': small }, 'icon']"
    :href="link"
    :aria-label="label"
    target="_blank"
  >
    <img class="icon__image" :src="`/icons/${icon}.svg`" :alt="label" />
  </a>
</template>
<script setup>
defineProps({
  icon: { type: String },
  label: { type: String },
  link: { type: String },
  small: { type: Boolean, default: false },
});
</script>
<style scoped>
.icon {
  align-items: center;
  background-color: #222;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  height: 64px;
  width: 64px;
}

.icon--small {
  height: 48px;
  width: 48px;
}

.icon--small .icon__image {
  height: 24px;
  width: 24px;
}

.icon:hover,
.icon:focus {
  transform: scale(1.1);
}

.icon__image {
  height: 32px;
  width: 32px;
}
</style>
