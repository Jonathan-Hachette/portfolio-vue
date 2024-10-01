<script setup>
// Components import
import ResumeSkillsSection from '@/components/ResumeSkillsSection.vue'
import Spacing from '@/components/Spacing.vue'

//UI Components import
import AccordionExperiences from '@/components/AccordionExperiences.vue'
import AccordionProjects from '@/components/AccordionProjects.vue'
import Separator from '@/components/ui/separator/Separator.vue'
</script>

<template>
  <main class="container">
    <!-- Div du bloc avec bordure -->
    <div class="flex flex-col bg-card gap-10 border rounded-[--radius] px-8 py-14">
      <div class="w-full lg:w-3/4">
        <h2
          class="font-caption text-xl md:text-2xl lg:text-4xl text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-ease-in-out"
        >
          Alternance / Stage Développeur Web Frontend
        </h2>
        <Separator class="w-full mt-2" />
        <Spacing size="xs" />
      </div>

      <div class="grid grid-cols-1 gap-10 lg:flex lg:text-left lg:gap-20">
        <!-- Accorion Section -->
        <section class="w-full lg:w-3/5">
          <!-- Project Accordion -->
          <AccordionProjects />

          <!-- Experiences Accordion -->

          <AccordionExperiences />
        </section>

        <h3
          class="font-caption text-xl lg:text-2xl text-primary font-bold animate-fade-left animate-duration-[1000ms] animate-delay-[300ms] animate-ease-in-out"
        >
          Profil et Compétences
        </h3>
        <section class="flex flex-col items-start gap-10 md:grid md:grid-cols-2">
          <ResumeSkillsSection />
        </section>
      </div>
    </div>
  </main>
</template>
