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
  'bg-accent/30 border border-accent hover:bg-accent/50 transition-colors p-1 font-mono rounded-sm',
  props.className
])
</script>

<template>
  <span :class="computedClass" v-bind="$attrs">
    <slot></slot>
  </span>
</template>
