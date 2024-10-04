<script setup>
// import { Separator } from 'radix-vue'
import Separator from '@/components/ui/separator/Separator.vue'

// Receive the current project's stack via props
const props = defineProps({
  stack: {
    type: Array
  },
  stack: {
    type: Object
  }
})

// Custom SVG Icons import
import Css3Icon from './icons/Css3Icon.vue'
import Html5Icon from './icons/Html5Icon.vue'
import JsIcon from './icons/JsIcon.vue'
import PostgreIcon from './icons/PostgreIcon.vue'
import StrapiIcon from './icons/StrapiIcon.vue'
import StrapiNoText from './icons/StrapiNoText.vue'
import StripeIcon from './icons/StripeIcon.vue'
import TailwindIcon from './icons/TailwindIcon.vue'
import VueIcon from './icons/VueIcon.vue'

// Icons map
const iconMap = {
  html5: Html5Icon,
  css3: Css3Icon,
  js: JsIcon,
  vue: VueIcon,
  strapi: StrapiIcon,
  StrapiNoText: StrapiNoText,
  stripe: StripeIcon,
  postgre: PostgreIcon,
  tailwind: TailwindIcon
}

// function to get the correspondant component from the stack in the object projects defined in main.ts
const getIconComponent = (stack) => {
  return iconMap[stack] || null
}
</script>

<template>
  <div class="flex items-center flex-1">
    <!-- v-for to get all stack passed in prop -->
    <div v-for="(stack, index) in stack" :key="stack" class="flex justify-center items-center">
      <component
        :is="getIconComponent(stack)"
        :size="36"
        :style="stack === 'js' ? { transform: 'translateY(8px)' } : {}"
      />

      <Separator v-if="index < props.stack.length - 1" orientation="vertical" class="mx-[10px]" />
    </div>
  </div>
</template>

<style scoped></style>
