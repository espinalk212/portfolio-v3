import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
import Antd from 'ant-design-vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faHatWizard,
  faBasketball,
  faCar,
  faGlasses,
  faBriefcase,
  faHome,
  faUser,
  faLaptop,
  faFile,
  faFilePen,
  faMoon,
  faSun,
  faCircleCheck,
  faCircleInfo,
  faCircleExclamation,
  faTriangleExclamation,
  faX
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//Add all icons to the library so you can use it in your page
library.add(
  faHatWizard,
  faBasketball,
  faCar,
  faGlasses,
  faBriefcase,
  faHome,
  faUser,
  faLaptop,
  faFile,
  faFilePen,
  faMoon,
  faSun,
  faCircleCheck,
  faCircleInfo,
  faCircleExclamation,
  faTriangleExclamation,
  faX
)

import "@fontsource/roboto"
import './assets/main.css'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Antd)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
