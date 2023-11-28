import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/:category',
      name: 'category',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/post/:url',
      name: 'post',
      component: () => import('../views/PostView.vue')
    }
  ]
})

export default router
