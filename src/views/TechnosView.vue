<script setup>
import Spacing from '@/components/Spacing.vue'
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <section class="container">
    <div class="flex flex-col gap-10 border rounded-[--radius] py-6">
      <div class="p-8">
        <div class="flex justify-between">
          <div class="w-4/5">
            <h2
              class="font-caption text-5xl text-primary font-bold animate-fade-left animate-ease-out mb-2"
            >
              Mes Technos
            </h2>

            <Separator class="w-2/3" />
            <Spacing size="xs" />

            <div class="w-full">
              <p class="animate-fade-left animate-ease-out animate-delay-500">
                HTML CSS Js Vue TailwindCss Strapi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
