import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faDiscord, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";

library.add(faDiscord)
library.add(faTwitter)
library.add(faGithub)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
