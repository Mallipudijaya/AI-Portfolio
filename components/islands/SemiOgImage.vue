<script setup lang="ts">
defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <div
    class="w-full h-full text-white px-24 flex flex-col justify-center"
    :style="{ backgroundImage: 'url(https://owln.ai/moon.png)' }"
  >
    <div class="flex flex-row text-5xl items-center">
      <h2 class="mr-4 text-purple-200">
        JayaShree · owln.ai
      </h2>
      <img
        src="/pixels/logo2.png"
        width="48"
        class="transform"
      >
    </div>
    <h1 class="font-bold text-8xl">
      {{ title }}
    </h1>
    <p class="text-4xl max-w-2xl">
      {{ description }}
    </p>
  </div>
</template>
