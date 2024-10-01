<script setup>
import Spacing from '@/components/Spacing.vue'
import Button from '@/components/ui/button/Button.vue'
import Separator from '@/components/ui/separator/Separator.vue'

//Icon import
import GithubIcon from '@/components/icons/GithubIcon.vue'
import { CheckIcon } from '@heroicons/vue/16/solid'

// Accordion import
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

// Projects
const projectsDetails = [
  {
    value: 'item-1',
    title: 'Site Web Margaux Naturopathe',
    content: {
      technos: ['HTML, CSS, JavaScript'],
      description:
        "Création d'un site vitrine responsive pour une naturopathe, intégrant des fonctionnalités comme un formulaire de contact et une navigation fluide.",
      acquis: [
        'Maîtrise des bases du développement web frontend.',
        "Optimisation de l'interface utilisateur et des performances pour une meilleure expérience utilisateur.",
        'Compréhension approfondie de la structure HTML et du CSS pour un design propre et efficace.'
      ]
    },
    sourceCode: 'https://github.com/Jonathan-Hachette/margaux-naturopathe',
    projectLive: 'https://margaux-naturopathebordeaux.com/'
  },
  {
    value: 'item-2',
    title: 'Clone Leboncoin - Frontend',
    content: {
      technos: ['Vue.js'],
      description:
        "Développement de l'interface utilisateur d'un site similaire à Leboncoin, avec affichage, création et suppressions d'annonces, navigation par catégories et recherche dynamique, création et consultation de compte utilisateur.",
      acquis: [
        'Utilisation de Vue.js pour la gestion de composants et la manipulation du DOM.',
        "Intégration de routes dynamiques et gestion d'état avec Vue Router.",
        'Mise en place de bonnes pratiques de développement frontend, y compris la réutilisation de composants et la gestion de la réactivité.'
      ]
    },
    sourceCode: 'https://github.com/Jonathan-Hachette/leBonCoin-Front',
    projectLive: 'https://similiboncoin.netlify.app/'
  },
  {
    value: 'item-3',
    title: 'Clone Leboncoin - Backend',
    content: {
      technos: ['Strapi, PostgresSQL'],
      description:
        'Développement du backend pour gérer les annonces et les utilisateurs, avec Strapi comme CMS et PostgreSQL pour la base de données.',
      acquis: [
        'Gestion des relations entre utilisateurs et annonces avec une base de données relationnelle.',
        "Déploiement et gestion d'un CMS headless (Strapi) pour faciliter l'administration des contenus."
      ]
    },
    sourceCode: 'https://github.com/Jonathan-Hachette/leBonCoin-Backend'
  }
]
</script>

<template>
  <div>
    <h3
      class="font-caption text-lg lg:text-2xl text-primary font-bold mb-6 animate-fade-left animate-duration-[1000ms] animate-delay-[300ms] animate-ease-in-out"
    >
      Réalisations en Développement Web
    </h3>
  </div>
  <Accordion type="single" collapsible>
    <AccordionItem v-for="project in projectsDetails" :key="project.value" :value="project.value">
      <AccordionTrigger
        class="animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
      >
        <h4
          class="font-caption text-sm md:text-lg lg:text-lg text-primary animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
        >
          {{ project.title }}
        </h4>
      </AccordionTrigger>

      <AccordionContent class="flex flex-col gap-6 text-xs md:text-sm lg:text-sm">
        <p class="animate-fade animate-duration-[2000ms]">
          Technos :
          <span
            class="text-muted-foreground"
            v-for="techno in project.content.technos"
            :key="techno"
          >
            {{ techno }}
          </span>
        </p>

        <p class="animate-fade animate-duration-[2000ms]">
          Description:
          <span class="text-muted-foreground">{{ project.content.description }}</span>
        </p>

        <p class="animate-fade animate-duration-[2000ms]">Acquis :</p>

        <ul class="animate-fade animate-duration-[2000ms]">
          <div class="flex gap-2" v-for="acquis in project.content.acquis">
            <CheckIcon class="size-4" />
            <li class="flex-1">{{ acquis }}</li>
          </div>
        </ul>

        <div class="mt-8 flex flex-start gap-8">
          <Button
            v-if="project.title !== 'Clone Leboncoin - Backend'"
            class="px-10 animate-fade animate-duration-[2000ms] animate-delay-500"
          >
            <a :href="project.projectLive" target="_blank"> Visiter </a>
          </Button>
          <Button
            variant="outline"
            class="flex items-center p-3 animate-fade animate-duration-[2000ms] animate-delay-700"
          >
            <a
              :href="project.sourceCode"
              target="_blank"
              class="flex gap-2 items-center text-accent-foreground"
            >
              <GithubIcon :size="20" />
              Code Source
            </a>
          </Button>
        </div>
      </AccordionContent>
      <Separator />
      <Spacing size="xs" />
    </AccordionItem>
  </Accordion>
</template>
