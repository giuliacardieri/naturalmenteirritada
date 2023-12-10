<template>
  <iframe
    class="embedded-map"
    :src="src"
    :title="title"
    width="600"
    height="400"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</template>

<script setup>
defineProps({
  title: { type: String },
  src: { type: String },
});
</script>

<style scoped>
.embedded-map {
  margin-top: 8px;
  width: 100%;
}
</style>
