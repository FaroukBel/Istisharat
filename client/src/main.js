import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'ar',
    legacy:false,
    messages: {
        en:{
            hello:"Hello world",
            home:"Home",
            itemMenu2:"Therapists",
            itemMenu3:"Psychometer",
            itemMenu4:"Blog",
            HomeTitle:"Talk to your specialist online privately anytime anywhere!",
            HomeTitle2:"And book your appointment for free with ease",
            HomeButtom:"Find your specialist!"
        },
        ar:{
            hello:"مرحبا",
            home:"الصفحة الرئيسية",
            itemMenu2:"المعالجين",
            itemMenu3:"الإختبارات النفسية",
            itemMenu4:"المدونة",
            HomeTitle:"ابحث عن أخصائي",
            HomeTitle2:"و احجز موعدك مجانا بكل سهولة",
            HomeButtom:"اكتشف أخصائيين"

       
        }
    }
  })
  
const app = createApp(App).use(i18n)

app.use(createPinia())
app.use(router).use(BootstrapVue).use(vuetify)

app.mount('#app')
