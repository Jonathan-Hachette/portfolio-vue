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
    <div class="gap-10 border rounded-[--radius] px-6 py-8 lg:px-8 lg:py-10">
      <div class="flex flex-col">
        <h2
          class="font-caption text-xl md:text-2xl lg:text-4xl text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-ease-in-out mb-2 w-3/4"
        >
          Mes Projets
        </h2>
        <Separator class="w-3/4" />
        <Spacing size="xs" />
        <!-- Project sreenshot carousel entire Structure -->
        <Carousel
          v-slot="{ canScrollNext }"
          class="relative w-64 lg:w-full max-w-md animate-fade-left animate-delay-100 place-self-center"
        >
          <CarouselContent>
            <!-- One div for every project -->
            <CarouselItem v-for="(project, index) in GlobalStore.projects" :key="index">
              <div class="py-2">
                <a :href="project.url" target="_blank">
                  <span class="flex justify-center text-xl lg:text-3xl font-semibold mb-4">{{
                    project.title
                  }}</span>
                </a>
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
                        class="flex aspect-square justify-center p-6 bg-center bg-contain md:bg-contain lg:bg-[length:448px_280px] bg-no-repeat hover:animate-pulse hover:first-letter:animate-duration-2000"
                        :style="{ backgroundImage: `url(${project.screenshotDark})` }"
                      >
                      </CardContent>

                      <!-- Light Mode image -->
                      <CardContent
                        v-else
                        class="flex aspect-square justify-center p-6 bg-center bg-cover lg:bg-[length:448px_280px] bg-no-repeat"
                        :style="{ backgroundImage: `url(${project.screenshotLight})` }"
                      >
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
