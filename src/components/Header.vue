<script setup>
// UI components import
import { Button } from '@/components/ui/button'

//Custom icons imports
import GithubIcon from './icons/GithubIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import SunIcon from './icons/SunIcon.vue'

//  Dark mode management
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="py-3 border-b items-center sticky top-0 backdrop-blur-sm z-50">
    <div class="container flex justify-between items-center">
      <p class="text-lg font-semibold opacity-80">Jonathan Hachette</p>

      <div class="flex gap-3">
        <Button variant="outline" class="flex items-center p-3 cursor-pointer">
          <a
            target="_blank"
            href="https://github.com/Jonathan-Hachette"
            class="text-accent-foreground border rounded-sm"
          >
            <GithubIcon :size="16" />
          </a>
        </Button>

        <Button variant="outline" class="flex items-center p-3 cursor-pointer">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jonathan-hachette"
            class="text-accent-foreground border rounded-sm"
          >
            <LinkedinIcon :size="16" />
          </a>
        </Button>

        <Button
          @click="toggleDark()"
          variant="outline"
          class="flex items-center p-3 border-0 cursor-pointer"
        >
          <SunIcon v-if="isDark" class="text-foreground" />
          <MoonIcon v-else class="text-foreground" />
        </Button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
