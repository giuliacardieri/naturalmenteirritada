<template>
  <button
    :class="[{ 'button--active': active }, 'button']"
    @click="goToUrl(value)"
  >
    <img
      v-if="value"
      class="button__icon"
      height="28"
      width="28"
      :src="`/icons/${value}.webp`"
    />
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: { type: String },
  value: { type: String },
  active: { type: Boolean, default: false },
  hasUrl: { type: Boolean, default: false },
});

async function goToUrl(value) {
  if (value) await navigateTo(`/${value}`);
}
</script>

<style scoped>
.button {
  align-items: center;
  background-color: transparent;
  border: 1px solid var(--black);
  border-radius: 10px;
  color: var(--black);
  cursor: pointer;
  display: flex;
  font-family: "Futura";
  gap: 8px;
  line-height: 1;
  min-height: 48px;
  padding: 6px 16px;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;
}
.button:hover .button__icon {
  transform: scale(1.25);
}

.button:focus,
.button--active {
  background-color: var(--dark-blue);
  color: var(--white);
}

.button__icon {
  transition: transform 0.3s ease-in-out;
  width: 28px;
}
</style>
