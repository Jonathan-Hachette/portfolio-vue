<script setup>
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="container py-8">
    <header class="flex gap-4">
      <RouterLink :to="{ name: 'home' }"> <Button>Home </Button> </RouterLink>
      <Button @click="toggleDark()" variant="default">Dark mode </Button>
      <button
        class="bg-secondary text-primary-foreground border border-border px-4 py-2 rounded-lg"
      >
        Mon bouton
      </button>
    </header>
  </div>
</template>

<style scoped></style>
