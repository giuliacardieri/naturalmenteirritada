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

<script setup>
defineProps({
  title: { type: String },
  src: { type: String },
});
</script>

<style scoped>
.embedded-video {
  width: 100%;
}

@media (min-width: 1025px) {
  .embedded-video {
    margin: 0 0 24px 0;
  }
}
</style>
