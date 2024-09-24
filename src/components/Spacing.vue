<script setup lang="ts">
import { computed } from 'vue'

interface SpacingProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const props = defineProps<SpacingProps>()

const className = computed(() => {
  return {
    'h-4 lg:h-8': props.size === 'xs',
    'h-8 lg:h-16': props.size === 'sm',
    'h-16 lg:h-24': props.size === 'md',
    'h-24 lg:h-32': props.size === 'lg',
    'h-36 lg:h-44': props.size === 'xl'
  }
})
</script>

<template>
  <div :class="className"></div>
</template>
