<script setup>
// Component import

import Spacing from '@/components/Spacing.vue'

//UI component import
import { Separator } from '@/components/ui/separator'

//Icon import
import AccordionStudyWork from '@/components/AccordionStudyWork.vue'
</script>

<template>
  <main>
    <div>
      <div class="w-3/4">
        <h2
          class="font-caption text-xl md:text-2xl lg:text-4xl text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-ease-in-out mb-2 w-full"
          id="studywork"
        >
          Alternance
        </h2>
        <Separator class="w-full" />
      </div>

      <Spacing size="sm" />

      <div class="flex justify-between gap-14">
        <div class="flex-1">
          <AccordionStudyWork />
        </div>

        <div>
          <div>
            <h3
              class="font-caption text-xl lg:text-2xl mb-2 text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-delay-[300ms] animate-ease-in-out"
            >
              Début de la formation
            </h3>
            <p
              class="animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
            >
              03 Février 2025
            </p>
          </div>

          <Spacing size="sm" />

          <h3
            class="font-caption text-xl lg:text-2xl mb-2 text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-delay-[300ms] animate-ease-in-out"
          >
            Rythme
          </h3>
          <div
            class="animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
          >
            <p>10 semaines de Bootcamp intensif.</p>
            <p class="text-balance">Puis 3 semaines en entreprise, 1 semaine en formation.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
