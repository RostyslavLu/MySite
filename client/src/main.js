import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/main.css'
import { i18n } from './i18n'
import { VueReCaptcha } from 'vue-recaptcha-v3'

const app = createApp(App)
app.use(VueReCaptcha, {
  siteKey: '6Ld8HE4qAAAAAOAUkg9u_Rvgv8fHzw17sHxZdNVq',
  loaderOptions: {
    autoHideBadge: true
  }
})
app.use(router)
app.use(i18n)
app.mount('#app')
