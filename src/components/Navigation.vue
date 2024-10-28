<script setup>
// RouterLink import
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="container flex justify-between items-center mb-4 text-xs sm:text-lg md:text-md lg:text-xl"
  >
    <RouterLink
      :to="{ name: 'studywork' }"
      :class="{
        'text-[var(--primary-foreground)]': $route.name === 'studywork',
        'text-muted-foreground': $route.name !== 'studywork'
      }"
    >
      Alternance
    </RouterLink>

    <RouterLink
      :to="{ name: 'projects' }"
      :class="{
        'text-[var(--primary-foreground)]': $route.name === 'projects',
        'text-muted-foreground': $route.name !== 'projects'
      }"
    >
      Mes Projets
    </RouterLink>

    <RouterLink
      :to="{ name: 'aboutMe' }"
      :class="{
        'text-[var(--primary-foreground)]': $route.name === 'aboutMe',
        'text-muted-foreground': $route.name !== 'aboutMe'
      }"
    >
      Mon Histoire
    </RouterLink>

    <RouterLink
      :to="{ name: 'technos' }"
      :class="{
        'text-[var(--primary-foreground)]': $route.name === 'technos',
        'text-muted-foreground': $route.name !== 'technos'
      }"
    >
      Mes Technos
    </RouterLink>

    <RouterLink
      :to="{ name: 'resume' }"
      :class="{
        'text-[var(--primary-foreground)]': $route.name === 'resume',
        'text-muted-foreground': $route.name !== 'resume'
      }"
    >
      Mon CV
    </RouterLink>

    <!-- Toujours utiliser la syntaxe :
     :class="{
       'text-[var(--primary-foreground)]': $route.name === 'resume',
       'text-muted-foreground': $route.name !== 'resume'
     }"
     Si une classe CSS standard est donnée, elle prendra le dessus sur la classe dynamique.
-->
  </nav>
</template>
