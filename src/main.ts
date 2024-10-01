import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

//Multi-device Mockup import to use in projects object
import screenshotDarkMargaux from '@/assets/imgs/margaux-multi-device-black.png'
import screenshotLightMargaux from '@/assets/imgs/margaux-multi-device-white.png'
import screenshotDarkSimiliboncoin from '@/assets/imgs/similiboncoin-mockup-black.png'
import screenshotLightSimiliboncoin from '@/assets/imgs/similiboncoin-mockup-white.png'

const projects = [
  {
    title: 'Margaux Naturopathe',
    description: 'Site statique pour une practicienne de santé.',
    screenshotDark: screenshotDarkMargaux,
    screenshotLight: screenshotLightMargaux,
    url: 'https://margaux-naturopathebordeaux.com/',
    stack: ['html5', 'css3', 'js']
  },

  {
    title: 'Similiboncoin',
    description: 'Replique du site leboncoin en fullstack.',
    screenshotDark: screenshotDarkSimiliboncoin,
    screenshotLight: screenshotLightSimiliboncoin,
    url: 'https://similiboncoin.netlify.app/',
    stack: ['vue', 'strapi', 'stripe', 'postgres']
  }
]

const stack = [
  {
    iconMap: 'js',
    title: 'Javascript',
    description: 'Mon langage de programmation principal.'
  },
  {
    iconMap: 'vue',
    title: 'Vue',
    description: 'Mon framework préféré.'
  },
  {
    iconMap: 'html5',
    title: 'HTML',
    description: 'Mon langage de programmation principal.'
  },
  {
    iconMap: 'css3',
    title: 'CSS',
    description: 'Mon langage de programmation principal.'
  },
  {
    iconMap: 'tailwind',
    title: 'Tailwindcss',
    description: 'Mon framework préféré.'
  },

  {
    iconMap: 'StrapiNoText',
    title: 'Strapi',
    description: 'Gestion et customisation des routes du CRUD.'
  }
]
// Provider
app.provide('GlobalStore', { projects: projects, stack: stack })

app.mount('#app')
