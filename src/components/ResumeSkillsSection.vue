<script setup>
// Heroincons import
import { DevicePhoneMobileIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import EmailDialog from './EmailDialog.vue'
</script>

<template>
  <div>
    <h4
      class="font-caption text-lg text-primary font-bold mb-2 lg:mb-4 animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
    >
      Contact
    </h4>
    <address class="flex flex-col gap-2 text-sm">
      <div class="flex gap-3">
        <DevicePhoneMobileIcon class="size-6" />
        <a
          href="tel:+33614773065"
          class="text-muted-foreground transition hover:text-primary hover:underline hover:-translate-y-1 hover:scale-110 duration-500 animate-fade-left animate-duration-[1000ms] animate-ease-in-out animate-delay-[1000ms]"
          >+33 6 14 77 30 65</a
        >
      </div>

      <EmailDialog />

      <div class="flex gap-4 text-sm">
        <MapPinIcon class="size-6" />
        <p
          class="text-muted-foreground cursor-pointer transition hover:text-primary hover:underline hover:-translate-y-1 hover:scale-105 duration-500"
        >
          Lieu
        </p>
      </div>

      <div class="flex gap-4 text-sm">
        <GlobeAltIcon class="size-6" />
        <p
          class="text-muted-foreground cursor-pointer transition hover:text-primary hover:underline hover:-translate-y-1 hover:scale-105 duration-500"
        >
          Link ?
        </p>
      </div>
    </address>
  </div>

  <div class="text-sm">
    <h4
      class="font-caption text-lg text-primary font-bold mb-2 lg:mb-4 animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
    >
      Skills
    </h4>
    <p class="text-muted-foreground">HTML, CSS</p>
    <p class="text-muted-foreground">JavaScript</p>
    <p class="text-muted-foreground">Vue.Js</p>
    <p class="text-muted-foreground">Strapi</p>
    <p class="text-muted-foreground">Stripe</p>
    <p class="text-muted-foreground">Git / Github</p>
  </div>

  <div class="text-sm">
    <h4
      class="font-caption text-lg text-primary font-bold mb-2 lg:mb-4 animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
    >
      Soft Skills
    </h4>
    <p class="text-muted-foreground">Empathique</p>
    <p class="text-muted-foreground">Rigoureux</p>
    <p class="text-muted-foreground">Enthousiate et Curieux</p>
    <p class="text-muted-foreground">Team Player</p>
    <p class="text-muted-foreground">Orienté Solutions</p>
  </div>

  <div class="text-sm">
    <h4
      class="font-caption text-lg text-primary font-bold mb-2 lg:mb-4 animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
    >
      Interêts
    </h4>
    <p class="text-muted-foreground">Basket-Ball</p>
    <p class="text-muted-foreground">Cuisine et Vin</p>
    <p class="text-muted-foreground">Développement Web</p>
    <p class="text-muted-foreground">Voyage</p>
  </div>
</template>
