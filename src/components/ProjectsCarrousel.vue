<script setup>
// UI Card import
import { Card, CardContent } from '@/components/ui/card'

// UI Carousel import
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

// Ui Hover Card import
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

// Import to get isDark value for display
import { useDark } from '@vueuse/core'
const isDark = useDark()

//Multi-device Mockup import to use in projects object
import screenshotDarkMargaux from '@/assets/imgs/margaux-multi-device-black.png'
import screenshotLightMargaux from '@/assets/imgs/margaux-multi-device-white.png'
import screenshotDarkSimiliboncoin from '@/assets/imgs/similiboncoin-mockup-black.png'
import screenshotLightSimiliboncoin from '@/assets/imgs/similiboncoin-mockup-white.png'

// SVG Icons import
import Css3Icon from './icons/Css3Icon.vue'
import Html5Icon from './icons/Html5Icon.vue'
import JsIcon from './icons/JsIcon.vue'
import VueIcon from './icons/VueIcon.vue'

// Map des icônes
const iconMap = {
  html5: Html5Icon,
  css3: Css3Icon,
  js: JsIcon,
  vue: VueIcon
}

// Fonction pour récupérer le composant d'icône
const getIconComponent = (tech) => {
  return iconMap[tech] || null
}

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
    description: 'Replique du site leboncoin en fullstack',
    screenshotDark: screenshotDarkSimiliboncoin,
    screenshotLight: screenshotLightSimiliboncoin,
    url: 'https://similiboncoin.netlify.app/',
    stack: ['vue', 'Strapi', 'Stripe', 'postgresSQL']
  }
]
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-10">
    <h3 className="text-3xl font-caption ">Mes projets</h3>
    <Carousel v-slot="{ canScrollNext }" class="relative w-full max-w-md">
      <CarouselContent>
        <CarouselItem v-for="(project, index) in projects" :key="index" class="basis-full">
          <div class="p-1">
            <HoverCard>
              <HoverCardTrigger>
                <Card>
                  <!-- Dark mode  -->
                  <CardContent
                    v-if="isDark"
                    class="flex aspect-square justify-center p-6 bg-center bg-[length:460px_280px] bg-no-repeat"
                    :style="{ backgroundImage: `url(${project.screenshotDark})` }"
                  >
                    <a :href="project.url" target="_blank">
                      <span class="text-3xl font-semibold">{{ project.title }}</span>
                    </a>
                  </CardContent>

                  <!-- Light Mode  -->
                  <CardContent
                    v-else
                    class="flex aspect-square justify-center p-6 bg-center bg-[length:450px_260px] bg-no-repeat"
                    :style="{ backgroundImage: `url(${project.screenshotLight})` }"
                  >
                    <a href="https://margaux-naturopathebordeaux.com/" target="_blank">
                      <span class="text-3xl font-semibold">{{ project.title }}</span>
                    </a>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <!-- Gestion du contenu de la popup -->
              <HoverCardContent class="mr-14 mb-[356px]">
                <div>
                  <p>{{ project.description }}</p>

                  <div class="mt-4 flex justify-start items-center gap-4">
                    <component
                      v-for="tech in project.stack"
                      :key="tech"
                      :is="getIconComponent(tech)"
                      :size="36"
                      :theme="isDark ? 'dark' : 'light'"
                      :style="tech === 'js' ? { transform: 'translateY(8px)' } : {}"
                    />
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext v-if="canScrollNext" />
    </Carousel>
  </div>
</template>
