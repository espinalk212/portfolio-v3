import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAlertStore } from '@/stores/AlertStore.js'
let alertStore
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/technologies',
    name: 'tech',
    component: () => import('../views/TechView.vue'),
    beforeEnter: (to, from) => {
      alertStore = useAlertStore()
      alertStore.triggerNotification({
        message: 'Sorry this functionality isn\'t available yet',
        type: 'error',
        description: 'Stay tuned, it\'s coming soon',
    })
      return false
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    beforeEnter: (to, from) => {
      if(process.env.NODE_ENV === 'development') { return }
      alertStore = useAlertStore()
      alertStore.triggerNotification({
        message: 'Sorry this functionality isn\'t fully available yet',
        type: 'warning',
        description: 'I\'m actively working on it 👨🏽‍💻',
    })
      return false
    }
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/ResumeView.vue'),
    beforeEnter: (to, from) => {
      alertStore = useAlertStore()
      alertStore.triggerNotification({
        message: 'Sorry this functionality isn\'t available yet',
        type: 'error',
        description: 'Stay tuned, it\'s coming soon',
    })
      return false
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    beforeEnter: (to, from) => {
      alertStore = useAlertStore()
      alertStore.triggerNotification({
        message: 'Sorry this functionality isn\'t available yet',
        type: 'error',
        description: 'It\'s coming soon',
    })
      return false
    }
  },

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export {routes};

export default router
