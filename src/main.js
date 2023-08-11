import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

import loadimage from './assets/img_loading-background.jpg'
import errorimage from './assets/img_loading-background.jpg'

const app = createApp(App)
app.config.globalProperties.$mobileDeviceMaxWidth = 767
app.config.globalProperties.$mobileTabletDeviceMaxWidth = 1267

app.use(router)
app.use(VueLazyload, {
    preLoad: 1.3,
    error: errorimage,
    loading: loadimage,
    attempt: 1
})

app.mount('#app')
