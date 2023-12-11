<template>
  <div>
    <Hero
      title="Naturalmente Irritada"
      description="Todos admiramos a natureza, mas porque será que ela parece sempre estar irritada?"
      isMain
    ></Hero>
    <main class="main">
      <section class="main__section">
        <h2>Categorias</h2>
        <CategoryList />
      </section>
      <section class="main__section">
        <h2>Posts</h2>
        <PostsGroup />
      </section>
    </main>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Naturalmente Irritada",
  robots: "index, follow",
  googlebot: "index, follow",
  canonical: "https://naturalmenteirritada.blog",
  description:
    "Naturalmente Irritada é um blog informativo sobre desastres naturais em nosso planeta. Falamos desde enchentes até quedas de asteroídes.",
  ogDescription:
    "Naturalmente Irritada é um blog informativo sobre desastres naturais em nosso planeta. Falamos desde enchentes até quedas de asteroídes.",
  ogTitle: "Naturalmente Irritada",
  ogImage:
    "https://res.cloudinary.com/du9aie2jo/image/upload/v1702254950/urivgijvxon9xpp7rz4g.png",
  ogUrl: "https://naturalmenteirritada.blog/",
  ogType: "website",
  twitterCard: "summary_large_image",
});
</script>

<style scoped></style>
