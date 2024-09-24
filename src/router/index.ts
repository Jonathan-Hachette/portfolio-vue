import AboutMeView from '@/views/AboutMeView.vue'
import ResumeView from '@/views/ResumeView.vue'
import TechnosView from '@/views/TechnosView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Testview from '@/views/Testview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutme',
      name: 'aboutMe',
      component: AboutMeView
    },
    {
      path: '/technos',
      name: 'technos',
      component: TechnosView
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/test',
      name: 'test',
      component: Testview
    }
  ]
})

export default router
