<script setup>
// Vue import
import { inject } from 'vue'

// GlobalStore injection
const GlobalStore = inject('GlobalStore')

// Component import
import Spacing from '@/components/Spacing.vue'
import StackIcon from '@/components/StackIcon.vue'

// UI component import
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <main>
    <section aria-labelledby="technologies-section">
      <header class="w-3/4">
        <h2
          id="technologies-section"
          class="font-caption text-xl md:text-2xl lg:text-4xl text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-ease-in-out mb-2"
        >
          Mes Technos
        </h2>
        <Separator class="w-full mt-2" />
        <Spacing size="sm" />
      </header>

      <section
        class="grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:text-left lg:grid-cols-3 gap-y-10 md:gap-x-8"
        aria-labelledby="stack-list"
      >
        <h3 id="stack-list" class="sr-only">Liste des technologies</h3>
        <!-- Amélioration pour les lecteurs d'écran -->

        <article
          class="grid grid-cols-1 grid-rows-2 auto-rows-fr"
          v-for="(stack, index) in GlobalStore.stack"
          :key="index"
        >
          <figure
            class="flex justify-center md:justify-start lg:justify-start animate-fade-left animate-duration-[1000ms] animate-delay-500"
          >
            <StackIcon :stack="stack" aria-label="Icône pour {{ stack.title }}" />
          </figure>

          <div>
            <h4 class="animate-fade-left animate-delay-[1000ms] text-lg font-semibold mb-2">
              {{ stack.title }}
            </h4>
            <p class="animate-fade-left animate-delay-[1200ms] text-sm text-muted-foreground">
              {{ stack.description }}
            </p>
          </div>
        </article>
      </section>
    </section>
  </main>
</template>
