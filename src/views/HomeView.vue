<script setup>
import ProjectsCarrousel from '@/components/ProjectsCarrousel.vue'
import Spacing from '@/components/Spacing.vue'
import Hero from '../components/Hero.vue'

// Icon import
import ArrowDownCircle from '@/components/icons/ArrowDownCircle.vue'

const scrollToProjects = () => {
  const element = document.getElementById('projectsCarrousel')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <main>
    <div class="container">
      <Hero />

      <div class="flex justify-center">
        <ArrowDownCircle
          :size="36"
          class="cursor-pointer animate-fade-up animate-delay-500"
          @click="scrollToProjects"
        />
      </div>

      <Spacing size="lg" />

      <ProjectsCarrousel id="projectsCarrousel" />
    </div>
  </main>
</template>
