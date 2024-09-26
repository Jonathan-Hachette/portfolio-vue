<script setup>
import Spacing from '@/components/Spacing.vue'
import Separator from '@/components/ui/separator/Separator.vue'
import { CheckIcon } from '@heroicons/vue/16/solid'

const projectsDetails = [
  {
    title: 'Site Web Margaux Naturopathe',
    technos: ['HTML, CSS, JavaScript'],
    description:
      "Création d'un site vitrine responsive pour une naturopathe, intégrant des fonctionnalités comme un formulaire de contact et une navigation fluide.",
    acquis: [
      'Maîtrise des bases du développement web frontend.',
      "Optimisation de l'interface utilisateur et des performances pour une meilleure expérience utilisateur.",
      'Compréhension approfondie de la structure HTML et du CSS pour un design propre et efficace.'
    ]
  },
  {
    title: 'Clone Leboncoin - Frontend',
    technos: ['Vue.js'],
    description:
      " Développement de l'interface utilisateur d'un site similaire à Leboncoin, avec affichage, création et suppressions d'annonces, navigation par catégories et recherche dynamique, création et consultation de compte utilisateur.",
    acquis: [
      'Utilisation de Vue.js pour la gestion de composants et la manipulation du DOM.',
      "Intégration de routes dynamiques et gestion d'état avec Vue Router.",
      'Mise en place de bonnes pratiques de développement frontend, y compris la réutilisation de composants et la gestion de la réactivité.'
    ]
  },
  {
    title: 'Clone Leboncoin - Backend',
    technos: ['Strapi', 'PostgresSQL'],
    description:
      'Développement du backend pour gérer les annonces et les utilisateurs, avec Strapi comme CMS et PostgreSQL pour la base de données.',
    acquis: [
      'Gestion des relations entre utilisateurs et annonces avec une base de données relationnelle.',
      "Déploiement et gestion d'un CMS headless (Strapi) pour faciliter l'administration des contenus."
    ]
  }
]
</script>

<template>
  <section class="container">
    <div class="flex flex-col gap-10 border rounded-[--radius] px-8 py-14">
      <div>
        <h2
          class="font-caption text-4xl text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-ease-in-out mb-2"
        >
          Mon CV
        </h2>
        <Separator class="w-2/3" />

        <Spacing size="sm" />

        <div>
          <h4 class="font-caption text-2xl text-primary font-bold mb-2">
            Réalisations en Développement Web
          </h4>
          <Separator class="w-full" />
          <Spacing size="sm" />

          <div class="flex flex-col gap-2" v-for="(project, index) in projectsDetails" :key="index">
            <h5 class="font-caption text-xl text-primary font-bold">
              {{ project.title }}
            </h5>

            <p>
              Technos :
              <span class="text-muted-foreground" v-for="techno in project.technos" :key="technos">
                {{ techno }}
              </span>
            </p>
            <p>
              Description: <span class="text-muted-foreground">{{ project.description }}</span>
            </p>
            <p>Acquis :</p>

            <ul>
              <div class="flex gap-2" v-for="skill in project.acquis">
                <CheckIcon class="size-5" />
                <li>{{ skill }}</li>
              </div>
            </ul>

            <Spacing size="sm" />
            <Separator />
            <Spacing size="sm" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
