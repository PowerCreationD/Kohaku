import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import WorkView from '../views/WorkView.vue'
import WorkDetailView from '../views/WorkDetailView.vue'

const KOHAKU = '琥白Kohaku'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: `${KOHAKU}` }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: `${KOHAKU} | About` }
    },
    {
      path: '/services',
      name: 'Services',
      component: ServiceView,
      meta: { title: `${KOHAKU} | Services` }
    },
    {
      path: '/work',
      name: 'Work',
      component: WorkView,
      meta: { title: `${KOHAKU} | Work` }
    },
    {
      path: '/work/:id',
      name: 'WorkDetail',
      component: WorkDetailView,
      props: true,
      meta: { title: `${KOHAKU} | Work` }
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberView.vue'),
      meta: { title: `${KOHAKU} | Member` }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: `${KOHAKU} | Contact` }
    },
  ]
})

router.afterEach(async (to) => {
  document.title = to.meta.title;
});

export default router
