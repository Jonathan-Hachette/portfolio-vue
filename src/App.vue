<script setup>
import Header from '../src/components/Header.vue'
import Hero from './components/Hero.vue'
import ArrowDownCircle from './components/icons/ArrowDownCircle.vue'
import Navigation from './components/Navigation.vue'
import Spacing from './components/Spacing.vue'

const scrollToProjects = () => {
  const element = document.getElementById('content')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <Header />

  <main class="py-8">
    <Hero />

    <ArrowDownCircle :size="36" class="cursor-pointer animate-bouce" @click="scrollToProjects" />

    <div></div>
    <Spacing size="md" />

    <Navigation id="content" />

    <div class="container">
      <section class="gap-10 border rounded-[--radius] px-6 py-8 lg:p-12">
        <RouterView />
      </section>
    </div>
  </main>
</template>

<style scoped></style>
