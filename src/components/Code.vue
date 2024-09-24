<script setup>
import { computed } from 'vue'

// Déclaration des props
const props = defineProps({
  className: {
    type: String,
    default: ''
  }
})

// Calcul de la classe CSS combinée
const computedClass = computed(() => [
  'bg-background border border-input font-bold hover:bg-accent hover:text-accent-foreground transition-colors p-1 font-mono text-sm shadow-sm rounded-sm',
  props.className
])
</script>

<template>
  <span :class="computedClass" v-bind="$attrs">
    <slot></slot>
  </span>
</template>
