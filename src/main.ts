import { createApp } from 'vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoEnvelopeClosed, BiInstagram, BiLinkedin, BiGithub, BiYoutube, HiSolidMail, FaMediumM } from "oh-vue-icons/icons"

import App from './App.vue'
import router from './router'
import './assets/main.css'
addIcons(CoEnvelopeClosed, BiInstagram, BiLinkedin, BiGithub, BiYoutube, HiSolidMail, FaMediumM);


const app = createApp(App)

app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
