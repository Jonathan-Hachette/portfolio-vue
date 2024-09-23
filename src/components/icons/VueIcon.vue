<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 256 221"
    version="1.1"
    preserveAspectRatio="xMidYMid"
  >
    <g>
      <path
        d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
        fill="#41B883"
      ></path>
      <path d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z" fill="#41B883"></path>
      <path
        d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
        fill="#35495E"
      ></path>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'VueIcon',
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
