<script setup>
import { Separator } from 'radix-vue'
import { defineProps } from 'vue'

// Receive the current project's stack via props
const props = defineProps({
  stack: {
    type: Array,
    required: true
  }
})

// Custom SVG Icons import
import Css3Icon from './icons/Css3Icon.vue'
import Html5Icon from './icons/Html5Icon.vue'
import JsIcon from './icons/JsIcon.vue'
import PostgresIcon from './icons/PostgresIcon.vue'
import StrapiIcon from './icons/StrapiIcon.vue'
import StripeIcon from './icons/StripeIcon.vue'
import VueIcon from './icons/VueIcon.vue'

// Icons map
const iconMap = {
  html5: Html5Icon,
  css3: Css3Icon,
  js: JsIcon,
  vue: VueIcon,
  strapi: StrapiIcon,
  stripe: StripeIcon,
  postgres: PostgresIcon
}

// function to get the correspondant component from the stack in the object projects defined in main.ts
const getIconComponent = (stack) => {
  return iconMap[stack] || null
}
</script>

<template>
  <div class="flex justify-center items-center flex-1">
    <!-- v-for to get all stack passed in prop -->
    <div v-for="(stack, index) in stack" :key="stack" class="flex items-center">
      <component
        :is="getIconComponent(stack)"
        :size="36"
        :style="stack === 'js' ? { transform: 'translateY(8px)' } : {}"
      />
      <Separator
        v-if="index < stack.length - 1"
        class="bg-popover-foreground data-[orientation=vertical]:h-8 data-[orientation=vertical]:w-px data-[orientation=vertical]:mt-1 mx-[15px]"
        decorative
        orientation="vertical"
      />
    </div>
  </div>
</template>

<style scoped></style>
