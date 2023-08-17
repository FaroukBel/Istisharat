import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import 'vuetify/styles'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



const i18n = createI18n({
    locale: 'ar',
    fallbackLocale: 'en',
    legacy:false,
    messages: {
        en:{
            hello:"Hello world",
            home:"Home",
            itemMenu2:"Therapists",
            itemMenu3:"Specializations",
            itemMenu4:"Blog",
            signUp:"Sign Up",
            signIn:"Sign In",
            HomeTitle:"Talk to your specialist online privately anytime anywhere!",
            HomeTitle2:"And book your appointment for free with ease",
            section2Title:"THE ONES WHO'S SPECIALIZED",
            HomeButtom:"Find your specialist!"
        },
        ar:{
            hello:"مرحبا",
            home:"الصفحة الرئيسية",
            itemMenu2:"المعالجين",
            itemMenu3:"التخصصات",
            itemMenu4:"المدونة",
            signUp:"إنشاء حساب",
            signIn:"تسجيل الدخول",
            HomeTitle:"تحدث مع أخصائيك بشكل خاص في أي وقت وأي مكان!",
            HomeTitle2:"و احجز موعدك مجانا بكل سهولة",
            section2Title:"الأشخاص المتخصصون",
            HomeButtom:"اكتشف أخصائيين"

       
        }
    }
  })
  
const app = createApp(App).use(i18n)
app.use(IconsPlugin)
app.use(BootstrapVue)
app.use(createPinia())
app.use(router)

app.mount('#app')
