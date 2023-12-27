import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

import loadimage from './assets/image/global/image_loading-background.jpg'
import errorimage from './assets/image/global/image_loading-background.jpg'

// i18n
import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs'
import zh from './locale/zh'
import ja from './locale/ja'
import en from './locale/en'

const LOCALE_KEY = 'LOCALE_KEY'
const defaultLocale = 'zh'
const savedLocale = localStorage.getItem(LOCALE_KEY)

const i18n = createI18n({
  locale: savedLocale || defaultLocale,
  fallbackLocale: 'en',
  messages: {
    zh: zh,
    ja: ja,
    en: en
  }
})

const app = createApp(App)
app.config.globalProperties.$mobileDeviceMaxWidth = 767
app.config.globalProperties.$mobileTabletDeviceMaxWidth = 1267

app.use(i18n)
app.use(router)
app.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1
})

app.mount('#app')

export default i18n
