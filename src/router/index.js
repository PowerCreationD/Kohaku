import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import WorkView from '../views/WorkView.vue'
import WorkDetailView from '../views/WorkDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/service',
      name: 'Service',
      component: ServiceView
    },
    {
      path: '/work',
      name: 'Work',
      component: WorkView
    },
    {
      path: '/work/:id',
      name: 'WorkDetail',
      component: WorkDetailView,
      props: true
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
  ]
})

export default router
