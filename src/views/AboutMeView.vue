<script setup>
import imageSrc from '@/assets/imgs/IMG_1644.jpg'
import Css3Icon from '@/components/icons/Css3Icon.vue'
import Html5Icon from '@/components/icons/Html5Icon.vue'
import JsIcon from '@/components/icons/JsIcon.vue'
import StrapiNoText from '@/components/icons/StrapiNoText.vue'
import VueIcon from '@/components/icons/VueIcon.vue'
import Spacing from '@/components/Spacing.vue'
import { Separator } from '@/components/ui/separator'
import Code from '../components/Code.vue'
</script>

<template>
  <section class="container">
    <div class="flex flex-col gap-10 border rounded-[--radius] py-6">
      <div class="p-8">
        <div class="flex justify-between">
          <div class="w-3/4">
            <h2
              class="font-caption text-5xl text-primary font-bold animate-fade-left animate-ease-out mb-2"
            >
              Mon Histoire
            </h2>

            <Separator class="w-2/3" />
            <Spacing size="xs" />

            <div class="w-full leading-7 font-geist-sans">
              <p class="animate-fade-left animate-ease-out animate-delay-500">
                Je m'appelle <Code>Jonathan</Code> et je suis né à <Code>Cayenne</Code> en Guyanne
                Française. Arrivé tout jeune à <Code>Bordeaux</Code>, j'ai grandi dans un
                environnement ou la curiosité à toujours été encouragée. J'ai toujours été fasciné
                par l'évolution des outils numériques et comment ils ont transformés notre
                quotidien.
              </p>
              <br />
              <p>
                Après mon <Code>Bacalauréat Scientifique</Code> mon parcours professionel ma amené à
                explorer le secteur du vin.
              </p>
              <p>
                D'abord par sa fabrication alliant mon interêt scientifique et ce produit
                passionnant, ensuite sa vente poussé par mon envie de partage.
              </p>
              <p>
                Je me suis naturellement tourné vers des études de <Code>marketing</Code> et j'ai
                exercé le metier de responsable caviste principalement.
              </p>

              <p>
                Une constante est demeurée : mon intérêt croisant pour développement web. J'ai
                constaté à quel point les compétences techniques et créatives peuvent ouvrir de
                nuvelles perspectives et apporter des solutions concrètes aux défis modernes.
              </p>
              <br />
              <p>
                Après une période de réflexion j'ai décidé de me lancer dans une reconversion en
                tant que <Code>Développeur web</Code>
                Ce choix n'était pas le fruit du hasard, mais plutôt le résultat d'une volonté
                d'allier ma créativité et ma passion pour la technologie. Je suis convaincu que le
                développement web est le moyen pour exprimer mes idées.
              </p>
              <br />
              <p>
                Au cours de ma formation avec

                <Code><a href="https://www.lereacteur.io/">Le Reacteur</a></Code>
                j'ai acquis de solides compétences en
                <Code>HTML <Html5Icon size="20" class="inline relative bottom-0.5" /></Code>,
                <Code>CSS <Css3Icon size="24" class="inline relative bottom-0.5" /></Code> et
                <Code>Javascript <JsIcon size="20" class="inline relative top-0.5" /> </Code> pour
                le front. J'utilise <Code>Vue.js <VueIcon size="20" class="inline" /></Code> comme
                framework préférenciel. J'ai aussi réalisé du back avec
                <Code>Strapi <StrapiNoText size="18" class="inline" /></Code>, intégré une méthode
                paiement avec <Code>Stripe</Code>.
              </p>
              <br />
              <p>
                Je suis particulièrement enthousiaste à l'idée de collaborer avec d'autres
                professionnels passionnés, et de contribuer à des projets qui ont un impact positif.
                Mon objctif est de créer des solutions numériques qui répondnent aux besoins des
                utilisateurs tout en intégrant une esthétique soignée.
              </p>
              <br />
              <p>
                Je vous invite à explorer mon portfolio pour découvrir mes projets récents et en
                apprendre davantage sur ma vision en tant que développeur web. J'espère avoir
                l'occasion d'échanger avec vous et de partager cette aventure passionnante.
              </p>
            </div>
          </div>

          <div class="flex justify-center w-1/3 animate-fade-left">
            <img
              :src="imageSrc"
              class="opacity-75 overflow-hidden object-cover w-48 h-48 max-w-xs rounded-full justify-center max-md:w-56 animate-float"
              alt="Mon Histoire"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
