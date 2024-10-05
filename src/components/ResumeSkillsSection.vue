<script setup>
// Heroincons import
import { DevicePhoneMobileIcon, MapPinIcon } from '@heroicons/vue/24/outline'

// Component import
import EmailDialog from './EmailDialog.vue'
</script>

<template>
  <main class="flex flex-col items-start gap-10">
    <address class="flex flex-col gap-2 text-sm mb-4">
      <h4
        class="font-caption not-italic text-lg text-primary font-bold mb-2 lg:mb-4 animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
      >
        Contact
      </h4>

      <div class="flex gap-3">
        <DevicePhoneMobileIcon
          class="size-6 animate-fade-left animate-duration-[1000ms] animate-ease-in-out animate-delay-[600ms]"
        />
        <a
          href="tel:+33614773065"
          class="text-muted-foreground transition hover:text-primary hover:underline hover:-translate-y-1 hover:scale-110 duration-500 animate-fade-left animate-duration-[1000ms] animate-ease-in-out animate-delay-[1000ms]"
        >
          +33 6 14 77 30 65
        </a>
      </div>

      <!-- Popup appearing when clicking on email -->
      <EmailDialog />

      <div class="flex gap-4 text-sm">
        <MapPinIcon
          class="size-6 animate-duration-[1000ms] animate-fade-left animate-ease-in-out animate-delay-[600ms]"
        />
        <p
          class="text-muted-foreground transition hover:text-primary hover:underline animate-fade-left animate-duration-[1000ms] animate-ease-in-out animate-delay-[1000ms]"
        >
          Bordeaux, Gironde
        </p>
      </div>
    </address>

    <div class="text-sm mb-4">
      <h4
        class="font-caption text-lg text-primary font-bold mb-2 lg:mb-4 animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
      >
        Compétences
      </h4>
      <div
        class="animate-fade-left animate-duration-[1000ms] animate-ease-in-out animate-delay-[1000ms]"
      >
        <p class="text-muted-foreground">HTML, CSS</p>
        <p class="text-muted-foreground">JavaScript</p>
        <p class="text-muted-foreground">Vue.js</p>
        <p class="text-muted-foreground">Strapi</p>
        <p class="text-muted-foreground">Stripe</p>
        <p class="text-muted-foreground">Git / GitHub</p>
      </div>
    </div>

    <div class="text-sm mb-4">
      <h4
        class="font-caption text-lg text-primary font-bold mb-2 lg:mb-4 animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
      >
        Soft Skills
      </h4>
      <div
        class="animate-fade-left animate-duration-[1000ms] animate-ease-in-out animate-delay-[1000ms]"
      >
        <p class="text-muted-foreground">Empathique</p>
        <p class="text-muted-foreground">Rigoureux</p>
        <p class="text-muted-foreground">Enthousiaste et Curieux</p>
        <p class="text-muted-foreground">Team Player</p>
        <p class="text-muted-foreground">Orienté Solutions</p>
      </div>
    </div>

    <div class="text-sm mb-4">
      <h4
        class="font-caption text-lg text-primary font-bold mb-2 lg:mb-4 animate-fade-left animate-duration-[1000ms] animate-delay-[600ms] animate-ease-in-out"
      >
        Intérêts
      </h4>
      <div
        class="animate-fade-left animate-duration-[1000ms] animate-ease-in-out animate-delay-[1000ms]"
      >
        <p class="text-muted-foreground">Basket-ball</p>
        <p class="text-muted-foreground">Cuisine et Vin</p>
        <p class="text-muted-foreground">Développement Web</p>
        <p class="text-muted-foreground">Voyages</p>
      </div>
    </div>
  </main>
</template>
