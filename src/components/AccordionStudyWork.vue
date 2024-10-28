<script setup>
import Spacing from '@/components/Spacing.vue'
import Separator from '@/components/ui/separator/Separator.vue'

// Icon import
import { CheckIcon } from '@heroicons/vue/16/solid'

// Accordion import
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

// Modules
const modulesDetails = [
  {
    value: 'item-1',
    title: 'Bases du JavaScript',
    content: {
      technos: ['JavaScript', 'Node.js'],
      duration: '2 semaines',
      skills: ['Algorithmique']
    }
  },
  {
    value: 'item-2',
    title: 'Serveur / API / Bases de Données',
    content: {
      technos: ['Express', 'Northflank', 'Cloudinary', 'MongoDB', 'Stripe'],
      duration: '1 semaine',
      skills: [
        "Création d'API",
        'Authentification',
        'Sécurité',
        'Automatisation',
        'Gestion BDD',
        'Paiement en ligne',
        'Hébergement'
      ]
    }
  },
  {
    value: 'item-3',
    title: 'Intégration HTML5 / CSS3',

    content: {
      technos: ['HTML', 'Css', 'Vanilla JS'],
      duration: '1 semaine',
      skills: ['Mise en page', 'Optimisation', 'SEO']
    }
  },

  {
    value: 'item-4',
    title: 'Interface Web Dynamiques',

    content: {
      technos: ['React', 'Node.js'],
      duration: '3 semaines'
    }
  },
  {
    value: 'item-5',
    title: 'Applications Mobile iOS et Android',
    content: {
      technos: ['React Native', 'Expo', 'Node.js'],
      duration: '1 semaines',
      skills: ['Navigation', 'Géolocalisation', 'Stockage Mémoire', 'Live chat']
    }
  },
  {
    value: 'item-6',
    title: "Création d'un MVP pour une startup",
    content: {
      technos: ['React', 'React Native', 'Node.js', 'Retool'],
      duration: '2 semaines',
      skills: ['Gestion de projet', 'Agile']
    }
  },
  {
    value: 'item-7',
    title: 'Période en alternance',
    content: {
      technos: [
        'TypeScript',
        'Next.js',
        'Tailwind',
        'SWR',
        'Prisma',
        'Redux',
        'Electron',
        'WebSockets'
      ],
      duration: '2 semaines',
      skills: [
        'Test unitaires',
        'Sécurisation serveur',
        'Déploiement stores',
        'Notifications Push',
        'Mises à jour OTA',
        'Intégration IA'
      ]
    }
  }
]
</script>

<template>
  <section>
    <h3
      class="font-caption text-lg lg:text-2xl text-primary font-bold mb-6 animate-fade-left animate-duration-[1000ms] animate-delay-[300ms] animate-ease-in-out"
    >
      Programme
    </h3>

    <Accordion type="single" collapsible>
      <AccordionItem v-for="module in modulesDetails" :key="module.value" :value="module.value">
        <AccordionTrigger
          class="animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
        >
          <h4 class="font-caption text-sm md:text-lg lg:text-lg text-primary">
            {{ module.title }}
          </h4>
        </AccordionTrigger>

        <AccordionContent class="flex flex-col gap-6 text-xs md:text-sm lg:text-sm">
          <p class="animate-fade animate-duration-[2000ms]">
            Technologies :
            <span class="text-muted-foreground">
              {{ module.content.technos.join(', ') }}
            </span>
          </p>

          <p class="animate-fade animate-duration-[2000ms]">
            Durée :
            <span class="text-muted-foreground">{{ module.content.duration }}</span>
          </p>

          <p v-if="module.content.skills" class="animate-fade animate-duration-[2000ms]">
            Compétences :
          </p>

          <ul
            class="columns-1 md:columns-2 lg:grid lg:grid-cols-3 animate-fade animate-duration-[2000ms]"
          >
            <div class="flex gap-2" v-for="skills in module.content.skills" :key="skills">
              <CheckIcon class="size-4" />
              <li class="flex-1">{{ skills }}</li>
            </div>
          </ul>
        </AccordionContent>
        <Separator />
        <Spacing size="xs" />
      </AccordionItem>
    </Accordion>
  </section>
</template>
