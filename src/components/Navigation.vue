<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="container flex items-center mb-4">
    <RouterLink
      :to="{ name: 'home' }"
      class="px-4"
      :class="{
        'text-[var(--primary-foreground)]': $route.name === 'home',
        'text-muted-foreground': $route.name !== 'home'
      }"
    >
      Mes Projets
    </RouterLink>

    <RouterLink
      :to="{ name: 'aboutMe' }"
      class="px-4"
      :class="{
        'text-[var(--primary-foreground)]': $route.name === 'aboutMe',
        'text-muted-foreground': $route.name !== 'aboutMe'
      }"
    >
      Mon Histoire
    </RouterLink>

    <RouterLink
      :to="{ name: 'technos' }"
      class="px-4"
      :class="{
        'text-[var(--primary-foreground)]': $route.name === 'technos',
        'text-muted-foreground': $route.name !== 'technos'
      }"
    >
      Mes Technos
    </RouterLink>

    <RouterLink
      :to="{ name: 'resume' }"
      class="px-4"
      :class="{
        'text-[var(--primary-foreground)]': $route.name === 'resume',
        'text-muted-foreground': $route.name !== 'resume'
      }"
    >
      Mon CV
    </RouterLink>

    <RouterLink
      :to="{ name: 'test' }"
      class="px-4"
      :class="{
        'text-[var(--primary-foreground)]': $route.name === 'test',
        'text-muted-foreground': $route.name !== 'test'
      }"
    >
      Test
    </RouterLink>

    <!-- Penser à toujours utiliser la syntaxe 
     :class="{
        'text-[var(--primary-foreground)]': $route.name === 'resume',
        'text-muted-foreground': $route.name !== 'resume'
      }"
      Si une classe "classique" de couleur de texte est donnée elle prendra le dessus
      -->
  </nav>
</template>
