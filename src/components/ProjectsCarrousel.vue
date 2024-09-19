<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-10">
    <h3 className="text-3xl font-caption ">Mes projets</h3>
    <Carousel v-slot="{ canScrollNext }" class="relative w-full max-w-xs">
      <CarouselContent>
        <CarouselItem v-for="(_, index) in 4" :key="index">
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-square items-center justify-center p-6">
                <span class="text-4xl font-semibold">{{ index + 1 }}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext v-if="canScrollNext" />
    </Carousel>
  </div>
</template>
