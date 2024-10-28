<script setup>
// Component import

import Spacing from '@/components/Spacing.vue'
import Code from '../components/Code.vue'

//UI component import
import { Separator } from '@/components/ui/separator'

//Icon import
import Css3Icon from '@/components/icons/Css3Icon.vue'
import Html5Icon from '@/components/icons/Html5Icon.vue'
import JsIcon from '@/components/icons/JsIcon.vue'
import StrapiNoText from '@/components/icons/StrapiNoText.vue'
import VueIcon from '@/components/icons/VueIcon.vue'

// IMG import
import imageSrc from '@/assets/imgs/IMG_1644.jpg'
</script>

<template>
  <main>
    <div class="flex justify-between">
      <div class="w-full">
        <h2
          class="mb-2 w-full font-bold font-caption text-primary text-xl md:text-2xl lg:text-4xl animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
        >
          Mon Histoire
        </h2>
        <Separator class="w-full" />
        <Spacing size="sm" />

        <section class="w-full font-geist-sans text-pretty text-sm leading-7">
          <p
            class="animate-delay-500 animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
          >
            Je m'appelle <Code>Jonathan</Code> et je suis né à <Code>Cayenne</Code> en Guyane
            Française. Arrivé très jeune à <Code>Bordeaux</Code>, j'ai grandi dans un environnement
            où la curiosité a toujours été encouragée. J'ai toujours été fasciné par l'évolution des
            outils numériques et par la manière dont ils ont transformé notre quotidien.
          </p>
          <br />
          <p
            class="animate-delay-[800ms] animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
          >
            Après mon <Code>Baccalauréat Scientifique</Code>, mon parcours professionnel m'a amené à
            explorer le secteur du vin.
          </p>
          <p
            class="animate-delay-[800ms] animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
          >
            Je me suis naturellement tourné vers des études de <Code>marketing</Code>, et j'ai
            exercé le métier de responsable caviste principalement.
          </p>
          <p
            class="animate-delay-[800ms] animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
          >
            Une constante est demeurée : mon intérêt croissant pour le développement web. J'ai
            constaté à quel point les compétences techniques et créatives peuvent ouvrir de
            nouvelles perspectives et apporter des solutions concrètes aux défis modernes.
          </p>
          <br />
          <p
            class="animate-delay-[1100ms] animate-ease-out animate-fade-left animate-duration-[1000ms]"
          >
            Après une période de réflexion, j'ai décidé de me lancer dans une reconversion en tant
            que <Code>Développeur Web</Code> avec
            <Code class="text-nowrap"><a href="https://www.lereacteur.io/">Le Réacteur</a></Code
            >. Ce choix n'était pas le fruit du hasard, mais plutôt le résultat d'une volonté
            d'allier ma créativité et ma passion pour la technologie. Je suis convaincu que le
            développement web est un moyen d'exprimer mes idées.
          </p>
          <br />
          <p
            class="animate-delay-[1400ms] animate-ease-out animate-fade-left animate-duration-[1000ms]"
          >
            J'ai acquis de solides compétences en
            <Code>HTML<Html5Icon :size="Number(20)" class="inline relative bottom-0.5" /></Code>,
            <Code>CSS<Css3Icon :size="Number(24)" class="inline relative bottom-0.5" /></Code> et
            <Code>Javascript<JsIcon :size="Number(20)" class="inline relative top-0.5" /></Code>
            pour le front. J'utilise
            <Code>Vue.js<VueIcon :size="Number(20)" class="inline" /></Code> comme framework
            préféré. J'ai aussi travaillé sur du back-end avec
            <Code>Strapi<StrapiNoText :size="Number(18)" class="inline" /></Code> et intégré un
            système de paiement avec <Code>Stripe</Code>.
          </p>
          <br />
          <p
            class="animate-delay-[1700ms] animate-ease-out animate-fade-left animate-duration-[1000ms]"
          >
            Je suis particulièrement enthousiaste à l'idée de collaborer avec d'autres
            professionnels passionnés, et de contribuer à des projets ayant un impact positif. Mon
            objectif est de créer des solutions numériques répondant aux besoins des utilisateurs
            tout en intégrant une esthétique soignée.
          </p>
          <br />
          <p
            class="animate-delay-[2000ms] animate-ease-out animate-fade-left animate-duration-[1000ms]"
          >
            Je vous invite à explorer mon portfolio pour découvrir mes projets récents et en
            apprendre davantage sur ma vision en tant que développeur web.
          </p>
          <br />
          <p
            class="animate-delay-[2300ms] animate-ease-out animate-fade-left animate-duration-[1000ms]"
          >
            J'espère avoir l'occasion d'échanger avec vous et de partager cette aventure
            passionnante.
          </p>
        </section>
      </div>

      <aside
        class="lg:flex justify-center hidden w-1/3 animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
      >
        <img
          :src="imageSrc"
          class="justify-center opacity-75 rounded-full max-md:w-56 lg:w-48 max-w-xs lg:h-48 overflow-hidden object-cover"
          alt="Mon Histoire"
        />
      </aside>
    </div>
  </main>
</template>

<style scoped></style>
