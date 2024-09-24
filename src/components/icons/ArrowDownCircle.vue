<template>
  <div class="flex justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="mt-4 animate-bounce"
      :width="size"
      :height="size"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'ArrowDownCircle',
  props: {
    size: {
      type: Number as PropType<number>,
      default: 24
    },
    theme: {
      type: String as PropType<'light' | 'dark'>,
      default: 'light'
    }
  }
})
</script>
