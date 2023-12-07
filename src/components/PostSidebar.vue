<script setup>
import CategoryButton from '../components/CategoryButton.vue'
import EmbeddedMap from '../components/EmbeddedMap.vue'
import IconsList from '../components/IconsList.vue'

import Calendar from '../components/illustrations/Calendar.vue'
import Currency from '../components/illustrations/Currency.vue'
import Cross from '../components/illustrations/Cross.vue'
import Earthquake from '../components/illustrations/Earthquake.vue'
import Map from '../components/illustrations/Map.vue'
import Ruler from '../components/illustrations/Ruler.vue'

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
        <div class="sidebar__group">
          <Calendar class="sidebar__illustration" />
          <p>{{ post?.[0].attributes?.eventDate }}</p>
        </div>
      </section>
      <section v-if="post?.[0].attributes?.victims" class="sidebar__section">
        <h2 class="sidebar__h2">Vítimas</h2>
        <div class="sidebar__group">
          <Cross class="sidebar__illustration" />
          <p>
            {{ post?.[0].attributes?.victims }} pessoa<span v-if="post?.[0].attributes?.victims > 1"
              >s</span
            >
          </p>
        </div>
      </section>
      <section v-if="post?.[0].attributes?.damage" class="sidebar__section">
        <h2 class="sidebar__h2">Estimativa de danos</h2>
        <div class="sidebar__group">
          <Currency class="sidebar__illustration" />
          <p>{{ post?.[0].attributes?.damage }}</p>
        </div>
      </section>
      <section v-if="post?.[0].attributes?.earthquake" class="sidebar__section">
        <h2 class="sidebar__h2">Magnitude</h2>
        <div class="sidebar__group">
          <Earthquake class="sidebar__illustration" />
          <p>{{ post?.[0].attributes?.earthquake }} na escala Richter</p>
        </div>
      </section>
      <section v-if="post?.[0].attributes?.tsunami" class="sidebar__section">
        <h2 class="sidebar__h2">Altura máxima da onda</h2>
        <div class="sidebar__group">
          <Ruler class="sidebar__illustration" />
          <p>{{ post?.[0].attributes?.tsunami }} metros</p>
        </div>
      </section>
      <section
        v-if="post?.[0].attributes.map"
        class="sidebar__section sidebar__section--no-padding"
      >
        <h2 class="sidebar__h2 sidebar__h2--padding">Local</h2>
        <div class="sidebar__group sidebar__group--padding">
          <Map class="sidebar__illustration" />
          <p>{{ post?.[0].attributes.map?.title }}</p>
        </div>
        <EmbeddedMap
          v-if="post?.[0].attributes.map"
          :src="post?.[0].attributes.map?.src"
          :title="post?.[0].attributes.map?.title"
        />
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
  margin-top: var(--sidebar-margin-top, 20px);
}

.sidebar__group {
  display: flex;
  gap: 8px;
}

.sidebar__h2 {
  font-size: 20px;
  margin-bottom: 4px;
}

.sidebar__h2--padding,
.sidebar__group--padding {
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
