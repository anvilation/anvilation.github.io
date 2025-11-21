import { createApp } from 'vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoEnvelopeClosed, BiInstagram, BiLinkedin, BiGithub, BiYoutube, HiSolidMail, FaMediumM } from "oh-vue-icons/icons"
import { VueUmamiPlugin } from '@jaseeey/vue-umami-plugin';
import App from './App.vue'
import router from './router'
import './assets/main.css'
addIcons(CoEnvelopeClosed, BiInstagram, BiLinkedin, BiGithub, BiYoutube, HiSolidMail, FaMediumM);

const analyticsConfig = {
    websiteID: '3ee6b508-72a8-4aca-b248-6a0cb1369fcb',
    scriptSrc: 'https://analytics.anvilation.com/script.js',
    router: router,
    extraDataAttributes: {
        'data-host-url': 'https://anvilation.github.io/',
        'data-domains': 'anvilation.github.io,anvilation.com'
    }

}

const app = createApp(App)
app.use(VueUmamiPlugin(analyticsConfig));

app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
