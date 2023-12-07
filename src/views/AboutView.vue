<script setup>
import { computed } from 'vue'
import Hero from '../components/Hero.vue'
import IconsList from '../components/IconsList.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Sobre | Naturalmente Irritada',
  meta: [
    {
      name: 'description',
      content:
        'Naturalmente Irritada é um blog informativo sobre desastres naturais em nosso planeta. Falamos desde enchentes até quedas de asteroídes.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'og:url',
      content: 'https://naturalmenteirritada.blog/sobre'
    },
    {
      name: 'og:title',
      content: 'Sobre | Naturalmente Irritada'
    },
    {
      name: 'og:description',
      content:
        'Naturalmente Irritada é um blog informativo sobre desastres naturais em nosso planeta. Falamos desde enchentes até quedas de asteroídes.'
    },
    {
      name: 'og:image',
      content: 'https://naturalmenteirritada.blog/assets/naturalmente.png'
    },
    {
      name: 'og:image:type',
      content: 'image/png'
    },
    {
      name: 'og:image:width',
      content: '2094'
    },
    {
      name: 'og:image:height',
      content: '708'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:url',
      content: 'https://naturalmenteirritada.blog/sobre'
    },
    {
      name: 'twitter:title',
      content: 'Sobre | Naturalmente Irritada'
    },
    {
      name: 'twitter:description',
      content:
        'Naturalmente Irritada é um blog informativo sobre desastres naturais em nosso planeta. Falamos desde enchentes até quedas de asteroídes.'
    },
    {
      name: 'twitter:image',
      content: 'http://naturalmenteirritada.blog/assets/naturalmente.png'
    }
  ]
})

const imagePath = computed(() => import.meta.env.VITE_IMAGE_PATH)
</script>

<template>
  <Hero
    image="/assets/popo.jpeg"
    imageAlt="Uma parede com vários cartões postais de papel colados. Eles são coloridos."
  ></Hero>
  <main class="main">
    <section class="main__section main__section--flex">
      <img
        class="main__image"
        src="/assets/cho.jpg"
        alt="Uma placa branca e azul em inglês escrito rota de evacuação para tsunami"
      />
      <div>
        <h1>Quem é você?</h1>
        <p>
          Somos um blog informativo sobre desastres naturais. Usamos como referências artigos
          científicos e reportagens de portais de notícias. Nosso objetivo é trazer informações
          sobre as causas, curiosidades e fatos de desastres naturais. Não somos cientistas e nem
          pretendemos fazer hipóteses ou trazer nossa própria opinião, queremos apenas transmitir as
          informações coletadas por cientistas e jornalistas.
        </p>
        <br />
        <p>
          Você se interessa por esse tema? Tem vontade de escrever um post? Mande uma mensagem para
          gente.
        </p>
        <IconsList class="main__icons" />
      </div>
    </section>
  </main>
</template>

<style scoped></style>
