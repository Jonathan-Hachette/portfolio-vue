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
    description:
      'Premier site vitrine statique réalisé pour une praticienne en naturopathie, avec une attention particulière portée à la simplicité du design et à l’accessibilité du contenu.',
    screenshotDark: screenshotDarkMargaux,
    screenshotLight: screenshotLightMargaux,
    url: 'https://margaux-naturopathebordeaux.com/',
    stack: ['html5', 'css3', 'js']
  },

  {
    title: 'Similiboncoin',
    description:
      'Réplique complète du site Leboncoin en fullstack, intégrant une API backend avec Strapi, des paiements via Stripe, et une base de données PostgreSQL.',
    screenshotDark: screenshotDarkSimiliboncoin,
    screenshotLight: screenshotLightSimiliboncoin,
    url: 'https://similiboncoin.netlify.app/',
    stack: ['vue', 'strapi', 'stripe', 'postgres']
  }
]

const stack = [
  {
    iconMap: 'js',
    title: 'JavaScript',
    description: 'Mon langage de programmation principal.'
  },
  {
    iconMap: 'vue',
    title: 'Vue',
    description:
      'Mon framework front préféré pour construire des interfaces dynamiques et réactives.'
  },
  {
    iconMap: 'html5',
    title: 'HTML',
    description: 'Le langage de balisage qui structure mes applications web.'
  },
  {
    iconMap: 'css3',
    title: 'CSS',
    description: 'Le langage de style qui façonne mes interfaces web.'
  },
  {
    iconMap: 'tailwind',
    title: 'Tailwind CSS',
    description:
      'Un framework CSS utilitaire qui me permet de concevoir des interfaces rapidement et efficacement.'
  },

  {
    iconMap: 'StrapiNoText',
    title: 'Strapi',
    description: 'Mon outil CMS headless prévilégié pour plus de flexibilité'
  }
]
// Provider
app.provide('GlobalStore', { projects: projects, stack: stack })

app.mount('#app')
