<script setup>
import CategoryButton from '../components/CategoryButton.vue'
import EmbeddedMap from '../components/EmbeddedMap.vue'
import IconsList from '../components/IconsList.vue'

defineProps({
  post: { type: Object }
})
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__content">
      <section class="sidebar__section">
        <h2 class="sidebar__h2">Categoria</h2>
        <CategoryButton
          :label="post?.[0].attributes?.category?.data?.attributes?.name"
          :value="post?.[0].attributes?.category?.data?.attributes?.value"
          large
          hasUrl
        />
      </section>
      <section v-if="post?.[0].attributes?.eventDate" class="sidebar__section">
        <h2 class="sidebar__h2">Data</h2>
        <p>{{ post?.[0].attributes?.eventDate }}</p>
      </section>
      <section v-if="post?.[0].attributes?.damage" class="sidebar__section">
        <h2 class="sidebar__h2">Estimativa de danos</h2>
        <p>{{ post?.[0].attributes?.damage }}</p>
      </section>
      <section v-if="post?.[0].attributes?.victims" class="sidebar__section">
        <h2 class="sidebar__h2">Vítimas</h2>
        <p>
          {{ post?.[0].attributes?.victims }} pessoa<span v-if="post?.[0].attributes?.victims > 1"
            >s</span
          >
        </p>
      </section>
      <section v-if="post?.[0].attributes?.earthquake" class="sidebar__section">
        <h2 class="sidebar__h2">Magnitude</h2>
        <p>{{ post?.[0].attributes?.earthquake }} na escala Richter</p>
      </section>
      <section v-if="post?.[0].attributes?.tsunami" class="sidebar__section">
        <h2 class="sidebar__h2">Altura máxima da onda</h2>
        <p>{{ post?.[0].attributes?.tsunami }} metros</p>
      </section>
      <section class="sidebar__section sidebar__section--no-padding">
        <h2 v-if="post?.[0].attributes.map" class="sidebar__h2 sidebar__h2--padding">
          {{ post?.[0].attributes.map?.title }}
        </h2>
        <EmbeddedMap v-if="post?.[0].attributes.map" :src="post?.[0].attributes.map?.src" />
      </section>
      <section class="sidebar__section">
        <h2 class="sidebar__h2">Fale com a gente sobre esse post!</h2>
        <IconsList small />
      </section>
      <section class="sidebar__section">
        <h2 class="sidebar__h2">Referências</h2>
        <div
          v-if="post?.[0].attributes?.references"
          class="markdown"
          v-html="$markdown.render(post?.[0].attributes?.references)"
        ></div>
      </section>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  background-color: var(--white);
  padding: var(--sidebar-padding, 32px 0);
  position: relative;
}

.sidebar__section:not(.sidebar__section--no-padding) {
  padding: 0 24px;
}

.sidebar__section + .sidebar__section {
  margin-top: var(--sidebar-margin-top, 24px);
}

.sidebar__h2 {
  font-size: 20px;
}

.sidebar__h2--padding {
  padding: 0 24px;
}

@media (min-width: 1025px) {
  .sidebar__content {
    position: sticky;
    top: 104px;
  }
}

@media (max-width: 1025px) {
  .sidebar {
    --sidebar-padding: 32px 72px 48px 72px;
  }
}

@media (max-width: 767px) {
  .sidebar {
    min-width: 100vw;
    --sidebar-padding: 24px 24px 48px 24px;
  }

  .sidebar__section + .sidebar__section {
    --sidebar-margin-top: 16px;
  }
}
</style>
