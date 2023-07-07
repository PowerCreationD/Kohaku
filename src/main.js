import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

import loadimage from './assets/img_loading-background.jpg'
import errorimage from './assets/img_loading-background.jpg'

// i18n
import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs'
import zh from './locale/zh'
import ja from './locale/ja'
import en from './locale/en'

const app = createApp(App)
app.config.globalProperties.$mobileDeviceMaxWidth = 767
app.config.globalProperties.$mobileTabletDeviceMaxWidth = 1267

const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    zh: zh,
    ja: ja,
    en: en
  }
})

app.use(i18n)
app.use(router)
app.use(VueLazyload, {
    preLoad: 1.3,
    error: errorimage,
    loading: loadimage,
    attempt: 1
})

app.mount('#app')
