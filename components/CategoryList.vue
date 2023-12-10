<template>
  <ul class="categories">
    <li class="categories__item">
      <CategoryButton
        label="Todos"
        value=""
        :active="route.name === 'index'"
        @click="updateActive('')"
      />
    </li>
    <li
      v-for="categoryItem in categories?.data"
      :key="categoryItem.id"
      class="categories__item"
    >
      <CategoryButton
        :label="categoryItem?.attributes?.name"
        :value="categoryItem?.attributes?.value"
        :active="
          state.active === categoryItem?.attributes?.value ||
          (category === categoryItem?.attributes?.value && state.firstLoad)
        "
        @click="updateActive(categoryItem?.attributes?.value)"
      />
    </li>
  </ul>
</template>
<script setup>
import { reactive, defineEmits, watch } from "vue";
const state = reactive({ active: "", firstLoad: true });
const emit = defineEmits(["updateCategory"]);
const loaded = ref(false);
const route = useRoute();

defineProps({
  category: { type: String, default: "" },
});

watch((category) => {
  state.active = category;
});

function updateActive(value) {
  state.firstLoad = false;
  state.active = value;
  emit("updateCategory", value);
}

const apiUrl = computed(() => {
  return `${runtimeConfig.public.apiUrl}/categories?sort[0]=name`;
});

const runtimeConfig = useRuntimeConfig();
const { data: categories } = await useFetch(apiUrl, {
  lazy: true,
  server: false,
});
loaded.value = true;
</script>
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

@media (max-width: 1300px) {
  .categories {
    overflow-x: auto;
  }
}
</style>
