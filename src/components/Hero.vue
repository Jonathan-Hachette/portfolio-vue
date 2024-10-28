<script setup>
import Code from '../components/Code.vue'
</script>

<template>
  <section class="flex-col max-md:flex-col items-start radius gap-4">
    <div class="flex-[3] text-center flex flex-col gap-2">
      <h2
        class="text-2xl md:text-3xl lg:text-5xl text-primary font-caption font-bold animate-fade-left animate-ease-out"
      >
        Jonathan Hachette
      </h2>
      <h3
        class="text-xl md:text-2xl lg:text-3xl font-caption animate-fade-left animate-delay-100 animate-ease-out"
      >
        Recherche
        <Code
          class="text-xl md:text-2xl lg:text-2xl font-caption animate-fade-left animate-delay-100 animate-ease-out"
        >
          <RouterLink to="/#studywork">Alternance</RouterLink>
        </Code>
        Développeur Web Frontend
      </h3>

      <p class="text-base font-caption animate-fade-left animate-delay-200 animate-ease-out">
        En reconversion avec le
        <Code class="text-base">
          <a
            href="https://www.lereacteur.io/formation-alternance/concepteur-developpeur-applications/"
            target="_blank"
          >
            Reacteur
          </a>
        </Code>
      </p>
    </div>

    <div class="flex flex-[2] justify-center animate-fade-left animate-delay-300 animate-ease-out">
      <img
        src="https://avatars.githubusercontent.com/u/127342727?v=4"
        class="h-auto max-w-xs rounded-full my-6 justify-center max-md:w-56"
        alt="Jonathan's picture"
      />
    </div>
  </section>
</template>
