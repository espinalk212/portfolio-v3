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
  faBlog,
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
  faSchool,
  faCircle,
  faCircleCheck,
  faCircleInfo,
  faCircleExclamation,
  faTriangleExclamation,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

//Add all icons to the library so you can use it in your page
library.add(
  faHatWizard,
  faBasketball,
  faBlog,
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
  faSchool,
  faCircle,
  faCircleCheck,
  faCircleInfo,
  faCircleExclamation,
  faTriangleExclamation,
  faCircleXmark,
)

import "@fontsource/roboto"
import './assets/main.css'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Antd)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layers-text', FontAwesomeLayersText)

app.mount('#app')
