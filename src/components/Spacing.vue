<script setup lang="ts">
import { computed } from 'vue'

interface SpacingProps {
  size?: 'sm' | 'md' | 'lg'
}

const props = defineProps<SpacingProps>()

const className = computed(() => {
  return {
    'h-8 lg:h-16': props.size === 'sm',
    'h-16 lg:h-24': props.size === 'md',
    'h-24 lg:h-32': props.size === 'lg'
  }
})
</script>

<template>
  <div :class="className"></div>
</template>
