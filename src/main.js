import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$mobileDeviceMaxWidth = 767
app.config.globalProperties.$mobileTabletDeviceMaxWidth = 1267

app.use(router)

app.mount('#app')
