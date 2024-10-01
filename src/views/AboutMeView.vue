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
          class="font-caption text-xl md:text-2xl lg:text-4xl text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-ease-in-out mb-2 w-full"
        >
          Mon Histoire
        </h2>
        <Separator class="w-ful" />
        <Spacing size="sm" />

        <div class="w-full text-base leading-7 font-geist-sans">
          <p
            class="animate-fade-left animate-ease-in-out animate-delay-500 animate-duration-[1000ms]"
          >
            Je m'appelle <Code>Jonathan</Code> et je suis né à <Code>Cayenne</Code> en Guyanne
            Française. Arrivé tout jeune à <Code>Bordeaux</Code>, j'ai grandi dans un environnement
            ou la curiosité à toujours été encouragée. J'ai toujours été fasciné par l'évolution des
            outils numériques et comment ils ont transformés notre quotidien.
          </p>
          <br />
          <p
            class="animate-fade-left animate-ease-in-out animate-delay-[800ms] animate-duration-[1000ms]"
          >
            Après mon <Code>Bacalauréat Scientifique</Code> mon parcours professionel ma amené à
            explorer le secteur du vin.
          </p>
          <p
            class="animate-fade-left animate-ease-in-out animate-delay-[800ms] animate-duration-[1000ms]"
          >
            Je me suis naturellement tourné vers des études de <Code>marketing</Code> et j'ai exercé
            le metier de responsable caviste principalement.
          </p>
          <p
            class="animate-fade-left animate-ease-in-out animate-delay-[800ms] animate-duration-[1000ms]"
          >
            Une constante est demeurée : mon intérêt croisant pour développement web. J'ai constaté
            à quel point les compétences techniques et créatives peuvent ouvrir de nuvelles
            perspectives et apporter des solutions concrètes aux défis modernes.
          </p>
          <br />
          <p
            class="animate-fade-left animate-ease-out animate-delay-[1100ms] animate-duration-[1000ms]"
          >
            Après une période de réflexion j'ai décidé de me lancer dans une reconversion en tant
            que <Code>Développeur web</Code> avec
            <Code><a href="https://www.lereacteur.io/">Le Reacteur</a></Code
            >. Ce choix n'était pas le fruit du hasard, mais plutôt le résultat d'une volonté
            d'allier ma créativité et ma passion pour la technologie. Je suis convaincu que le
            développement web est le moyen pour exprimer mes idées.
          </p>
          <br />
          <p
            class="animate-fade-left animate-ease-out animate-delay-[1400ms] animate-duration-[1000ms]"
          >
            J'ai acquis de solides compétences en
            <Code>HTML <Html5Icon :size="Number(20)" class="inline relative bottom-0.5" /></Code>,
            <Code>CSS <Css3Icon :size="Number(24)" class="inline relative bottom-0.5" /></Code> et
            <Code>Javascript <JsIcon :size="Number(20)" class="inline relative top-0.5" /> </Code>
            pour le front. J'utilise
            <Code>Vue.js <VueIcon :size="Number(20)" class="inline" /></Code> comme framework
            préférenciel. J'ai aussi réalisé du back avec
            <Code>Strapi <StrapiNoText :size="Number(18)" class="inline" /></Code>, intégré une
            méthode paiement avec <Code>Stripe</Code>.
          </p>
          <br />
          <p
            class="animate-fade-left animate-ease-out animate-delay-[1700ms] animate-duration-[1000ms]"
          >
            Je suis particulièrement enthousiaste à l'idée de collaborer avec d'autres
            professionnels passionnés, et de contribuer à des projets qui ont un impact positif. Mon
            objctif est de créer des solutions numériques qui répondnent aux besoins des
            utilisateurs tout en intégrant une esthétique soignée.
          </p>
          <br />
          <p
            class="animate-fade-left animate-ease-out animate-delay-[2000ms] animate-duration-[1000ms]"
          >
            Je vous invite à explorer mon portfolio pour découvrir mes projets récents et en
            apprendre davantage sur ma vision en tant que développeur web. J'espère avoir l'occasion
            d'échanger avec vous et de partager cette aventure passionnante.
          </p>
        </div>
      </div>

      <div
        class="hidden lg:flex justify-center w-1/3 animate-fade-left animate-ease-in-out animate-duration-[1000ms]"
      >
        <img
          :src="imageSrc"
          class="opacity-75 overflow-hidden object-cover lg:w-48 lg:h-48 max-w-xs rounded-full justify-center max-md:w-56"
          alt="Mon Histoire"
        />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
