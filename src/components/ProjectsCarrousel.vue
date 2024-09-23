<script setup>
import { inject } from 'vue'

import StackIcon from './StackIcon.vue'

const GlobalStore = inject('GlobalStore')

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

// UI Hover Card import
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

// UI Button import
import { Button } from '@/components/ui/button'

// Import to get isDark value for display
import { useDark } from '@vueuse/core'
const isDark = useDark()

//Multi-device Mockup import to use in projects object
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-10">
    <h3 className="text-3xl font-caption ">Mes projets</h3>

    <!-- Project sreenshot carousel entire Structure -->
    <Carousel v-slot="{ canScrollNext }" class="relative w-full max-w-md hover:animate-pulse">
      <CarouselContent>
        <!-- One div for every project -->
        <CarouselItem
          v-for="(project, index) in GlobalStore.projects"
          :key="index"
          class="basis-full"
        >
          <div class="p-1">
            <!-- Popup appearing -->
            <HoverCard>
              <!-- Element that triggers the popup on hover -->
              <HoverCardTrigger>
                <Card>
                  <!-- Dark mode image  -->
                  <CardContent
                    v-if="isDark"
                    class="flex aspect-square justify-center p-6 bg-center bg-[length:460px_280px] bg-no-repeat"
                    :style="{ backgroundImage: `url(${project.screenshotDark})` }"
                  >
                    <a :href="project.url" target="_blank">
                      <span class="text-3xl font-semibold">{{ project.title }}</span>
                    </a>
                  </CardContent>

                  <!-- Light Mode image -->
                  <CardContent
                    v-else
                    class="flex aspect-square justify-center p-6 bg-center bg-[length:450px_260px] bg-no-repeat"
                    :style="{ backgroundImage: `url(${project.screenshotLight})` }"
                  >
                    <a :href="project.url" target="_blank">
                      <span class="text-3xl font-semibold">{{ project.title }}</span>
                    </a>
                  </CardContent>
                </Card>
              </HoverCardTrigger>

              <!-- Popup content -->
              <HoverCardContent class="animate-fade-left animate-duration-2000">
                <div class="flex flex-col text-center gap-4 animate-fade-left">
                  <p>{{ project.description }}</p>

                  <!-- Dynamic "stack" icon display -->
                  <!--Passing stack prop to the component   -->
                  <StackIcon :stack="project.stack" />

                  <!-- CTA to live project or Details page -->
                  <div class="flex justify-center gap-8 mt-2">
                    <Button size="sm">Détails</Button>
                    <Button size="sm">
                      <a :href="project.url" target="_blank">Visiter </a>
                    </Button>
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
