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
      meta: {
        title: `${KOHAKU}`,
        metaTags: [
          {
            property: 'og:title',
            content: '琥白Kohaku'
          },
          {
            property: 'og:description',
            content: '琥白為跨領域團隊，擅於提供科技設計的跨域解方。從系統設計開發、國內國際貿易、產品設計量產、品牌形象與視覺設計、企劃發想與活動策劃，解決客戶最真實的需求'
          }
        ]
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: `${KOHAKU} | About`,
        metaTags: [
          {
            property: 'og:title',
            content: '琥白Kohaku | About'
          },
          {
            property: 'og:description',
            content: '琥白我們珍惜人事物的原貌與初衷，保留價值核心、並為其增添輝光'
          }
        ]
      },
    },
    {
      path: '/services/:id?',
      name: 'Services',
      component: ServiceView,
      props: true,
      meta: {
        title: `${KOHAKU} | Services`,
        metaTags: [
          {
            property: 'og:title',
            content: '琥白Kohaku | Services'
          },
          {
            property: 'og:description',
            content: '三大語言五大領域，以跨域整合思維，串連所有端點，匯聚不同服務的影響力'
          }
        ]
      },
    },
    {
      path: '/work/:workType?',
      name: 'Work',
      component: WorkView,
      props: true,
      meta: {
        title: `${KOHAKU} | Work`,
        metaTags: [
          {
            property: 'og:title',
            content: '琥白Kohaku | Work'
          },
          {
            property: 'og:description',
            content: '從電商系統開發、書籍裝幀設計、傢俱產品設計到農產品進出口都有琥白的實績'
          }
        ]
      },
    },
    {
      path: '/work/detail/:id',
      name: 'WorkDetail',
      component: WorkDetailView,
      props: true,
      meta: {
        title: `${KOHAKU} | Work`,
        metaTags: [
          {
            property: 'og:title',
            content: '琥白Kohaku | Work'
          },
          {
            property: 'og:description',
            content: '從電商系統開發、書籍裝幀設計、傢俱產品設計到農產品進出口都有琥白的實績'
          }
        ]
      },
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberView.vue'),
      meta: {
        title: `${KOHAKU} | Member`,
        metaTags: [
          {
            property: 'og:title',
            content: '琥白Kohaku | Member'
          },
          {
            property: 'og:description',
            content: '琥白的團隊組成從傳產到資訊、設計到科技，提供最全面且獨到的見解'
          }
        ]
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: `${KOHAKU} | Contact`,
        metaTags: [
          {
            property: 'og:title',
            content: '琥白Kohaku | Contact'
          },
          {
            property: 'og:description',
            content: '琥白擅於結合設計力與資訊力！歡迎聯繫我們拓展產業的無限可能！'
          }
        ]
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach(async (to) => {
  document.title = to.meta.title;
  const metaTags = to.meta.metaTags
  metaTags.map((tagDef) => {
    const metas = document.getElementsByTagName('meta');
    let metaFlag = false;
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('property') === 'og:description') {
        if (metas[i].getAttribute('content')) {
          metaFlag = true;
        }
      }
    }
    if (!metaFlag) {
      let meta = document.createElement('meta');
      Object.keys(tagDef).forEach(key => {
        meta.setAttribute(key, tagDef[key]);
        document.getElementsByTagName('head')[0].appendChild(meta);
      })
    } else {
      Object.keys(tagDef).forEach(key => {
        document.head.querySelector(`meta[property="${tagDef.property}"]`).content = tagDef[key]
      })
    }

  });
})


export default router
