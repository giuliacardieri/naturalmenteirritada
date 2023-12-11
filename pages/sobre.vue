<template>
  <div>
    <Hero
      image="/popo.jpeg"
      imageAlt="Uma parede com vários cartões postais de papel colados. Eles são coloridos."
    ></Hero>
    <main class="main">
      <section class="main__section main__section--flex">
        <img
          class="main__image"
          src="~/assets/img/cho.jpg"
          alt="Uma placa branca e azul em inglês escrito rota de evacuação para tsunami"
        />
        <div>
          <h1>Quem é você?</h1>
          <p>
            Somos um blog informativo sobre desastres naturais. Usamos como
            referências artigos científicos e reportagens de portais de
            notícias. Nosso objetivo é trazer informações sobre as causas,
            curiosidades e fatos de desastres naturais. Não somos cientistas e
            nem pretendemos fazer hipóteses ou trazer nossa própria opinião,
            queremos apenas transmitir as informações coletadas por cientistas e
            jornalistas.
          </p>
          <br />
          <p>
            Você se interessa por esse tema? Tem vontade de escrever um post?
            Mande uma mensagem para gente.
          </p>
          <IconsList class="main__icons" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { useSeoMeta } from "@unhead/vue";

useSeoMeta({
  title: "Sobre | Naturalmente Irritada",
  robots: "index, follow",
  googlebot: "index, follow",
  canonical: "https://naturalmenteirritada.blog/sobre",
  description:
    "Naturalmente Irritada é um blog informativo sobre desastres naturais em nosso planeta. Falamos desde enchentes até quedas de asteroídes.",
  ogDescription:
    "Naturalmente Irritada é um blog informativo sobre desastres naturais em nosso planeta. Falamos desde enchentes até quedas de asteroídes.",
  ogTitle: "Sobre | Naturalmente Irritada",
  ogImage:
    "https://res.cloudinary.com/du9aie2jo/image/upload/v1702254950/urivgijvxon9xpp7rz4g.png",
  ogUrl: "https://naturalmenteirritada.blog/sobre/",
  ogType: "website",
  twitterCard: "summary_large_image",
});
</script>

<style scoped></style>
