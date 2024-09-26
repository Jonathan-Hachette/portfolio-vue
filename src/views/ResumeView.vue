<script setup>
import Spacing from '@/components/Spacing.vue'

import AccordionExperiences from '@/components/AccordionExperiences.vue'
import AccordionProjects from '@/components/AccordionProjects.vue'
import Separator from '@/components/ui/separator/Separator.vue'
</script>

<template>
  <section class="container">
    <!-- Div du bloc avec bordure -->
    <div class="flex flex-col bg-card gap-10 border rounded-[--radius] px-8 py-14">
      <div>
        <div class="w-3/4">
          <h2
            class="font-caption text-4xl text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-ease-in-out"
          >
            Alternance / Stage Développeur Web Frontend
          </h2>
          <Separator class="w-full mt-2" />

          <Spacing size="sm" />
        </div>

        <div>
          <h4
            class="font-caption text-2xl text-primary font-bold mb-4 animate-fade-left animate-duration-[1000ms] animate-delay-[300ms] animate-ease-in-out"
          >
            Réalisations en Développement Web
          </h4>

          <AccordionProjects />
        </div>

        <div>
          <h4
            class="font-caption text-2xl text-primary font-bold mt-20 mb-4 animate-fade-left animate-duration-[1000ms] animate-delay-[300ms] animate-ease-in-out"
          >
            Expériences professionnelles
          </h4>
          <AccordionExperiences />
        </div>
      </div>
    </div>
  </section>
</template>
