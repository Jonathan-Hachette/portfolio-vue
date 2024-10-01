<script setup>
import { inject } from 'vue'

const GlobalStore = inject('GlobalStore')

import Spacing from '@/components/Spacing.vue'
import StackIcon from '@/components/StackIcon.vue'
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <section class="container">
    <!-- Div du bloc avec bordure -->
    <div class="flex flex-col gap-10 border rounded-[--radius] px-8 py-14">
      <div>
        <div class="w-3/4">
          <h2
            class="font-caption text-xl md:text-2xl lg:text-4xl text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-ease-in-out mb-2"
          >
            Mes Technos
          </h2>
          <Separator class="w-full mt-2" />

          <Spacing size="xs" />
        </div>

        <div
          class="grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:text-left lg:grid-cols-3 gap-y-6"
        >
          <div
            class="grid grid-cols-1 grid-rows-2 auto-rows-fr"
            v-for="(stack, index) in GlobalStore.stack"
            :key="index"
          >
            <StackIcon
              class="flex justify-center md:justify-start lg:justify-start animate-fade-left animate-duration-[1000ms] animate-delay-500"
              :stack="stack"
            />

            <div>
              <h2 class="animate-fade-left animate-delay-[1000ms] text-lg font-semibold mb-2">
                {{ stack.title }}
              </h2>
              <p class="animate-fade-left animate-delay-[1200ms] text-sm text-muted-foreground">
                {{ stack.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
