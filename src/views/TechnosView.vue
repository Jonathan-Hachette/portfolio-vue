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
            class="font-caption text-4xl text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-ease-in-out mb-2"
          >
            Mes Technos
          </h2>
          <Separator class="w-full mt-2" />

          <Spacing size="xs" />
        </div>

        <div class="grid grid-cols-3 grid-rows-2 gap-y-6">
          <div
            class="grid grid-cols-1 grid-rows-2 auto-rows-fr"
            v-for="(stack, index) in GlobalStore.stack"
            :key="index"
          >
            <StackIcon class="animate-fade-left animate-delay-500" :stack="stack" />

            <div class="animate-fade-left animate-delay-[800ms]">
              <h2 class="text-lg font-semibold mb-2">{{ stack.title }}</h2>
              <p class="text-sm text-muted-foreground">{{ stack.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
