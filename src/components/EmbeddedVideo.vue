<script setup>
defineProps({
  title: { type: String },
  src: { type: String }
})
</script>

<template>
  <iframe
    class="embedded-video"
    height="480"
    :src="src"
    :title="title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</template>

<style scoped>
.embedded-video {
  margin: 0 0 24px 0;
  width: 100%;
}
</style>
