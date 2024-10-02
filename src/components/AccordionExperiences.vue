<script setup>
import Spacing from '@/components/Spacing.vue'
import Separator from '@/components/ui/separator/Separator.vue'

// Import des icônes

// Import de l'Accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

// Expériences

const experiencesDetails = [
  {
    value: 'item-3',
    date: '2023 - 2024',
    position: 'Responsable de cave',
    title: 'Super Graal Darwin',
    description:
      'Gestion de projet, relation client B2B/B2C, création de contenus pour e-commerce (Shopify).'
  },
  {
    value: 'item-4',
    date: '2020 - 2023',
    position: 'Responsable rayon alcools',
    title: 'Intermarché Hyper La Teste',
    description:
      'Management d’équipe, gestion de l’approvisionnement, veille concurrentielle et merchandising.'
  },
  {
    value: 'item-5',
    date: '2018 - 2020',
    position: 'Chargé de développement',
    title: 'Château Pape Clément',
    description: 'Conseil client, développement commercial et organisation de visites VIP.'
  }
]
</script>

<template>
  <div>
    <h4
      class="font-caption text-lg lg:text-2xl text-primary font-bold mt-10 lg:mt-20 mb-4 animate-fade-left animate-duration-[1000ms] animate-delay-[300ms] animate-ease-in-out"
    >
      Expériences professionnelles
    </h4>
  </div>
  <Accordion type="single" collapsible>
    <AccordionItem
      class="flex flex-col gap-2"
      v-for="experience in experiencesDetails"
      :key="experience.value"
      :value="experience.value"
    >
      <AccordionTrigger
        class="animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
      >
        <h4 class="font-caption text-left text-sm md:text-lg lg:text-lg text-primary">
          {{ experience.position }} - {{ experience.title }}
        </h4>
      </AccordionTrigger>

      <AccordionContent class="text-xs md:text-sm lg:text-sm">
        <p class="animate-fade animate-duration-[2000ms] mb-4">
          {{ experience.date }}
        </p>
        <p class="animate-fade animate-duration-[2000ms]">
          Description :
          <span class="text-muted-foreground">{{ experience.description }}</span>
        </p>
      </AccordionContent>
      <Separator />
      <Spacing size="xs" />
    </AccordionItem>
  </Accordion>
</template>
