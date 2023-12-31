import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const KOHAKU = '琥白 Kohaku - Design for Nature'
const validTypes = ['system', 'design', 'content']

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
            content:
              '琥白為跨領域團隊，擅於提供科技設計的跨域解方。從系統設計開發、國內國際貿易、產品設計量產、品牌形象與視覺設計、企劃發想與活動策劃，解決客戶最真實的需求'
          }
        ],
        canonicalUrl: () => {
          return `https://kohakustudio.co`
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: `About｜${KOHAKU}`,
        metaTags: [
          {
            property: 'og:title',
            content: `About｜${KOHAKU}`
          },
          {
            property: 'og:description',
            content: '在琥白我們珍惜人事物的原貌與初衷，保留價值核心、並為其增添輝光'
          }
        ],
        canonicalUrl: () => {
          return `https://kohakustudio.co/about`
        }
      }
    },
    {
      path: '/services/:type?',
      name: 'Services',
      component: () => import('../views/ServiceView.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        const requestedType = to.params.type
        if (requestedType && validTypes.includes(requestedType)) {
          next()
        } else {
          next('/services/system')
        }
      },
      meta: {
        title: `Services｜${KOHAKU}`,
        metaTags: [
          {
            property: 'og:title',
            content: `Services｜${KOHAKU}`
          },
          {
            property: 'og:description',
            content: '三大語言五大領域，以跨域整合思維，串連所有端點，匯聚不同服務的影響力'
          }
        ],
        canonicalUrl: (to) => {
          let servicesUrl = `/${to.params.type}`
          return `https://kohakustudio.co/services${to.params.type ? servicesUrl : ''}`
        }
      }
    },
    {
      path: '/work/:type?',
      name: 'Work',
      component: () => import('../views/WorkView.vue'),
      props: true,
      meta: {
        title: `Work｜${KOHAKU}`,
        metaTags: [
          {
            property: 'og:title',
            content: `Work｜${KOHAKU}`
          },
          {
            property: 'og:description',
            content: '從電商系統開發、書籍裝幀設計、傢俱產品設計到農產品進出口都有琥白的實績'
          }
        ],
        canonicalUrl: () => {
          return `https://kohakustudio.co/work`
        }
      }
    },
    {
      path: '/work/:project',
      name: 'WorkDetail',
      component: () => import('../views/WorkDetailView.vue'),
      props: true,
      meta: {
        title: `Work｜${KOHAKU}`,
        metaTags: [
          {
            property: 'og:title',
            content: `Work｜${KOHAKU}`
          },
          {
            property: 'og:description',
            content: '從電商系統開發、書籍裝幀設計、傢俱產品設計到農產品進出口都有琥白的實績'
          }
        ],
        canonicalUrl: (to) => {
          return `https://kohakustudio.co/work/${to.params.project}`
        }
      }
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberView.vue'),
      meta: {
        title: `Member｜${KOHAKU}`,
        metaTags: [
          {
            property: 'og:title',
            content: `Member｜${KOHAKU}`
          },
          {
            property: 'og:description',
            content: '琥白的團隊組成從傳產到資訊、設計到科技，提供最全面且獨到的見解'
          }
        ],
        canonicalUrl: () => {
          return `https://kohakustudio.co/member`
        }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: `Contact｜${KOHAKU}`,
        metaTags: [
          {
            property: 'og:title',
            content: `Contact｜${KOHAKU}`
          },
          {
            property: 'og:description',
            content: '琥白擅於結合設計力與資訊力！歡迎聯繫我們拓展產業的無限可能！'
          }
        ],
        canonicalUrl: () => {
          return `https://kohakustudio.co/contact`
        }
      }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // Remove existing canonicalLink
  const prevCanonicalLink = document.querySelector('link[rel="canonical"]')
  if (prevCanonicalLink) {
    prevCanonicalLink.remove()
  }

  // Create a new rel="canonical"
  const canonicalLink = document.createElement('link')
  canonicalLink.setAttribute('rel', 'canonical')
  canonicalLink.setAttribute('href', to.meta.canonicalUrl(to))
  document.head.appendChild(canonicalLink)

  // Set meta tags
  document.title = to.meta.title
  const metaTags = to.meta.metaTags
  metaTags.forEach((tagDef) => {
    const existingMeta = document.head.querySelector(`meta[property="${tagDef.property}"]`)
    if (!existingMeta) {
      // If meta tag doesn't exist, create a new one
      const meta = document.createElement('meta')
      Object.keys(tagDef).forEach((key) => {
        meta.setAttribute(key, tagDef[key])
      })
      document.head.appendChild(meta)
    } else {
      // If meta tag already exists, update its content
      existingMeta.content = tagDef.content
    }
  })

  // Set meta name="description" tag
  const ogDescriptionTag = to.meta.metaTags.find((tag) => tag.property === 'og:description')
  if (ogDescriptionTag) {
    const existingDescriptionMeta = document.head.querySelector('meta[name="description"]')
    if (existingDescriptionMeta) {
      // If meta name="description" tag already exists, update its content
      existingDescriptionMeta.content = ogDescriptionTag.content
    } else {
      // Otherwise, create a new meta name="description" tag
      const descriptionMeta = document.createElement('meta')
      descriptionMeta.setAttribute('name', 'description')
      descriptionMeta.setAttribute('content', ogDescriptionTag.content)
      document.head.appendChild(descriptionMeta)
    }
  }

  next()
})
export default router
