<script setup lang="ts">
import { ref } from 'vue'

const project = defineProps<{
  path: string
  title: string
  technologies?: string[]
  date: number
  thumbnail?: string
  type: string
  description?: string
  url?: string
  width: string
  height: string
}>()

const card = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(card)

const cardTransform = computed(() => {
  return isOutside.value
    ? ''
    : `radial-gradient(
      circle at
      ${elementX.value}px
      ${elementY.value}px,
      #ffffff55,
      #0000000f)`
})
</script>

<template>
  <NuxtLink
    ref="card"
    :to="project.path"
        class="relative flex flex-col justify-between w-100 h-96 gap-4 pt-6 overflow-hidden bg-white border isolate dark:bg-black border-zinc-300 dark:border-zinc-700 rounded-xl"

  >
    <div class="absolute top-0 left-0 z-20 w-full h-full glow" />
    <ul class="flex gap-2 px-4">
     
      <li>
      <div class="badge-container">
        <uiBadge
      v-for="(tech, index) in project.technologies"
      :key="index"
      class="text-sm badge-spacing"
    >
      {{ tech }}
    </uiBadge>
    </div>
      </li>
    </ul>
    <div class="px-4 @container">
      <h2 class="text-2xl @sm:text-2xl @sm:py-2 font-semibold text-black dark:text-white">
        {{ project.title }}
      </h2>
      <p class="text-sm">
        {{ project.description }}
      </p>
    </div>
    <NuxtImg
      :src="project.thumbnail || 'https://placekitten.com/268/168'"
      alt=""
      height=height
      width=weight
      class="w-full border-t --1 border-zinc-300 dark:border-zinc-700"
    />
  </NuxtLink>
</template>

<style>
.badge-container {
  display: flex;
  flex-wrap: wrap; /* Allows badges to wrap to the next line */
  gap: 8px; /* Adjust this value to control the space between badges */
}

.badge-spacing {
  /* Optional: Add padding or borders if needed */
}
</style>
