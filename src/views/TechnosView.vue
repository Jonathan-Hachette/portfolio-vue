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
          class="mb-2 font-bold font-caption text-primary text-xl md:text-2xl lg:text-4xl animate-ease-in-out animate-fade-left animate-duration-[1000ms]"
        >
          Mes Technos
        </h2>
        <Separator class="mt-2 w-full" />
        <Spacing size="sm" />
      </header>

      <section
        class="gap-y-10 md:gap-x-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left lg:text-left"
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
            class="flex justify-center md:justify-start lg:justify-start animate-delay-500 animate-fade-left animate-duration-[1000ms]"
          >
            <StackIcon
              :stack="stack"
              aria-label="Icône pour {{ stack.title }}"
              class="flex justify-center lg:justify-start"
            />
          </figure>

          <div>
            <h4 class="mb-2 font-semibold text-lg animate-delay-[1000ms] animate-fade-left">
              {{ stack.title }}
            </h4>
            <p class="text-muted-foreground text-sm animate-delay-[1200ms] animate-fade-left">
              {{ stack.description }}
            </p>
          </div>
        </article>
      </section>
    </section>
  </main>
</template>
