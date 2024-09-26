<script setup>
import { inject } from 'vue'

import Spacing from './Spacing.vue'
import StackIcon from './StackIcon.vue'
import Separator from './ui/separator/Separator.vue'

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
  <section class="container">
    <div class="gap-10 border rounded-[--radius] px-8 py-14">
      <div class="flex flex-col">
        <h2
          class="font-caption text-4xl text-primary font-bold animate-fade-left animate-ease-out mb-2 w-3/4"
        >
          Mes Projets
        </h2>
        <Separator class="w-3/4" />
        <Spacing size="xs" />
        <!-- Project sreenshot carousel entire Structure -->
        <Carousel
          v-slot="{ canScrollNext }"
          class="relative w-full max-w-md animate-fade-left animate-delay-100 place-self-center"
        >
          <CarouselContent>
            <!-- One div for every project -->
            <CarouselItem v-for="(project, index) in GlobalStore.projects" :key="index">
              <div class="py-2">
                <!-- Popup appearing -->
                <HoverCard>
                  <!-- Element that triggers the popup on hover -->
                  <HoverCardTrigger>
                    <Card
                      class="animate-fade-left"
                      :class="{
                        'bg-black': isDark === true
                      }"
                    >
                      <!-- Dark mode image  -->
                      <CardContent
                        v-if="isDark"
                        class="flex aspect-square justify-center p-6 bg-center bg-[length:448px_280px] bg-no-repeat hover:animate-pulse hover:first-letter:animate-duration-2000"
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
                  <HoverCardContent>
                    <div class="flex flex-col items-center text-center gap-4">
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
    </div>
  </section>
</template>
