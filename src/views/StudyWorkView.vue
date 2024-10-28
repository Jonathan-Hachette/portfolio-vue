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
          class="mb-2 w-full font-bold font-caption text-primary text-xl md:text-2xl lg:text-4xl animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
          id="studywork"
        >
          Alternance
        </h2>
        <Separator class="w-full" />
      </div>

      <Spacing size="sm" />

      <div class="lg:flex lg:justify-between gap-14 grid grid-cols-1">
        <div class="flex-1">
          <AccordionStudyWork />
        </div>

        <div class="row-start-1">
          <div>
            <h3
              class="mb-2 font-bold font-caption text-primary text-xl lg:text-2xl animate-delay-[300ms] animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
            >
              Début de la formation
            </h3>
            <p
              class="animate-delay-[600ms] animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
            >
              03 Février 2025
            </p>
          </div>

          <Spacing size="sm" />

          <h3
            class="mb-2 font-bold font-caption text-primary text-xl lg:text-2xl animate-delay-[300ms] animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
          >
            Rythme
          </h3>
          <div
            class="animate-delay-[600ms] animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
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
