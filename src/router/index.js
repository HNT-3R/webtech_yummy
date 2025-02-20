import { createRouter, createWebHistory } from 'vue-router'
import BakeView from "@/views/BakeView.vue";
import HomeView from "@/views/HomeView.vue";
import CookView from "@/views/CookView.vue";
import LoadView from "@/views/LoadView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cooking',
      name: 'cooking',
      component: CookView,
    },
    {
      path: '/baking',
      name: 'baking',
      component: BakeView,
    },
    {
      path: '/load',
      name: 'load',
      component: LoadView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
