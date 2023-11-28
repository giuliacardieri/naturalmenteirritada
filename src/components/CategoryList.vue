<script setup>
import { reactive, defineEmits, watch } from 'vue'
import CategoryButton from '../components/CategoryButton.vue'
const state = reactive({ active: '', firstLoad: true })
const emit = defineEmits(['updateCategory'])

defineProps({
  category: { type: String, default: '' }
})

const categories = [
  { label: 'Todos', value: '', noIcon: true },
  { label: 'Asteroídes', value: 'asteroides', noIcon: false },
  { label: 'Enchentes', value: 'enchentes', noIcon: false },
  { label: 'Furacões', value: 'furacoes', noIcon: false },
  { label: 'Terremotos', value: 'terremotos', noIcon: false },
  { label: 'Tornados', value: 'tornados', noIcon: false },
  { label: 'Tsunamis', value: 'tsunamis', noIcon: false },
  { label: 'Vulcões', value: 'vulcoes', noIcon: false }
]

watch((category) => {
  state.active = category
})

function updateActive(value) {
  state.firstLoad = false
  state.active = value
  emit('updateCategory', value)
}
</script>

<template>
  <ul class="categories">
    <li v-for="categoryItem in categories" :key="categoryItem.value" class="categories__item">
      <CategoryButton
        :label="categoryItem.label"
        :value="categoryItem.value"
        :noIcon="categoryItem.noIcon"
        :active="
          state.active === categoryItem.value ||
          (category === categoryItem.value && state.firstLoad)
        "
        @click="updateActive(categoryItem.value)"
      />
    </li>
  </ul>
</template>

<style scoped>
.categories {
  display: flex;
  gap: 16px;
  padding: 0;
  width: 100%;
}

.categories__item {
  list-style-type: none;
}
</style>
