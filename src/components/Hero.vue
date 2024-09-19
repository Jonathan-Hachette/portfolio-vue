<script setup>
import Code from '../components/Code.vue'
</script>

<template>
  <section className="flex-col max-md:flex-col items-start radius gap-4">
    <div className="flex-[3] text-center flex flex-col gap-2">
      <h2 className="font-caption text-5xl text-primary font-bold">Jonathan Hachette</h2>
      <h3 className="text-3xl font-caption ">Recherche Stage / Alternance</h3>
      <p class="font-caption">
        En reconversion Développeur Web avec le
        <Code>
          <a
            href="https://www.lereacteur.io/formation-alternance/concepteur-developpeur-applications/"
          >
            Reacteur
          </a>
        </Code>
      </p>
    </div>
    <div className="flex flex-[2] justify-center">
      <img
        src="https://avatars.githubusercontent.com/u/127342727?v=4"
        className=" h-auto max-w-xs rounded-full my-6 justify-center max-md:w-56"
        alt="Jonathan's picture"
      />
    </div>
  </section>
</template>

<style scoped></style>
