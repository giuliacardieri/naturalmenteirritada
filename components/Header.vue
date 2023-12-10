<template>
  <nav
    :class="[{ 'header--home': isHome, 'header--closed': !openMenu }, 'header']"
  >
    <h1 v-if="!isHome" class="header__title">
      <NuxtLink class="header__title-link" to="/"
        >Naturalmente Irritada</NuxtLink
      >
    </h1>
    <div v-if="!isHome" class="header__illustration">
      <IllustrationEarth />
    </div>
    <ul class="header__ul">
      <li class="header__li">
        <NuxtLink
          :class="[isHome ? 'header__link--active' : '', 'header__link']"
          to="/"
          >Home</NuxtLink
        >
      </li>
      <li class="header__li">
        <NuxtLink class="header__link" to="/sobre">Sobre</NuxtLink>
      </li>
    </ul>
    <button
      class="header__button"
      aria-label="Abrir ou fechar menu"
      @click="toggleMenu"
    >
      <svg
        class="header__icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 33.49C22 32.662 22.672 31.99 23.5 31.99H42.5C43.328 31.99 44 32.662 44 33.49C44 34.318 43.328 34.99 42.5 34.99H23.5C22.672 34.99 22 34.318 22 33.49ZM4 23.49C4 22.662 4.672 21.99 5.5 21.99H42.5C43.328 21.99 44 22.662 44 23.49C44 24.318 43.328 24.99 42.5 24.99H5.5C4.672 24.99 4 24.318 4 23.49ZM12 13.49C12 12.662 12.672 11.99 13.5 11.99H42.5C43.328 11.99 44 12.662 44 13.49C44 14.318 43.328 14.99 42.5 14.99H13.5C12.672 14.99 12 14.318 12 13.49Z"
          fill="#f9f9f9"
        />
      </svg>
    </button>
  </nav>
</template>
<script setup>
import { computed, ref } from "vue";

const route = useRoute();
const router = useRouter();
const openMenu = ref(false);

const isHome = computed(() => {
  if (route.name === "index" || route.name === "category") return true;
  return false;
});

router.afterEach((to, from) => {
  openMenu.value = false;
});

async function toggleMenu() {
  openMenu.value = !openMenu.value;
}
</script>
<style scoped>
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 72px;
  padding: 20px 64px;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 1;
}

.header:not(.header--home) {
  background-color: var(--black);
  position: sticky;
  top: 0;
}

.header--home {
  justify-content: flex-end;
}

.header--home .header__icon path,
.header:not(.header--closed) .header__icon path {
  fill: var(--black);
}

.header--home .header__link {
  color: var(--black);
}

.header--home .header__link--active:after,
.header--home .header__link.router-link-exact-active:after {
  background-color: var(--black);
}

.header--home .header__link:hover {
  background-color: rgba(0, 0, 0, 0.25);
}

.header__button {
  background-color: transparent;
  border: 0;
  display: none;
  z-index: 2;
}

.header__button:focus .header__icon {
  transform: scale(1.25);
}

.header__icon path {
  transition: fill 0.3s ease-in-out;
}

.header__title {
  font-size: 32px;
  line-height: 1;
  margin: 0;
  z-index: 1;
}

.header__title-link {
  color: var(--white);
  font-weight: bold;
  text-decoration: none;
}

.header__illustration {
  bottom: -16px;
  display: flex;
  left: 0;
  justify-content: center;
  margin: auto;
  position: absolute;
  right: 0;
}

.header__ul {
  display: flex;
  gap: 30px;
  padding: 0;
  transition: left 0.3s ease-in-out;
  z-index: 2;
}

.header__li {
  list-style-type: none;
}

.header:not(.header--closed) .header__link {
  color: var(--black);
}
.header__link {
  color: var(--white);
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;
}
.header__link:hover {
  background-color: rgba(255, 255, 255, 0.25);
}
.header__link:focus:after,
.header__link--active:after,
.header__link.router-link-exact-active:after {
  background-color: var(--white);
  bottom: -2px;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  width: 16px;
}

@media (max-width: 1024px) {
  .header__title {
    font-size: 24px;
  }
}

@media (max-width: 767px) {
  .header {
    padding: 16px 24px 24px 24px;
  }

  .header:not(.header--closed) .header__ul {
    left: 0;
  }

  .header--closed .header__ul {
    left: -120%;
  }

  .header__ul {
    background-color: var(--white);
    flex-direction: column;
    font-size: 32px;
    height: 100vh;
    left: 0;
    padding: 24px 0;
    position: fixed;
    top: 0;
    width: 100vw;
  }

  .header__illustration {
    bottom: -36px;
    transform: scale(0.5);
  }

  .header__button {
    display: block;
  }

  .header__link {
    display: block;
    font-size: 32px;
    padding: 0 24px;
  }

  .header__link:focus:after,
  .header__link.router-link-exact-active:after {
    display: none;
  }
}
</style>
