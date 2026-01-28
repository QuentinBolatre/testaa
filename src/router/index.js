import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ThankYouPage from '../views/ThankYouPage.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/merci',
    name: 'ThankYou',
    component: ThankYouPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
