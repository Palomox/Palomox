import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faDiscord, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import vuetify from "@/plugins/vuetify";
import { loadFonts } from './plugins/webfontloader'

loadFonts()

library.add(faDiscord)
library.add(faTwitter)
library.add(faGithub)



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(vuetify)
    .mount('#app')
