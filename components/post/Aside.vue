<script setup lang="ts">
defineProps<{ doc: any; activeHeadings: any }>()
function doPrint() {
  print()
}
</script>

<template>
  <aside
    v-if="doc.body.toc.links.length"
    class="self-start lg:sticky py-3 top-6 border-b pt-6 lg:pl-6 sm:border-0 h-full print:hidden dark:border-zinc-700"
  >
    <div class="border-b dark:border-zinc-500 border-zinc-300 mb-6 pb-3 ">
      <span class="font-bold tracking-tight text-sm"><UnoIcon class="i-iconoir-menu-scale w-5 h-5" /> On this page</span>
      <section
        v-for="(link, index) in doc.body.toc.links"
        :key="link.id"
        class="my-4 text-sm"
      >
        <h2 class="font-medium">
          <NuxtLink
            :class="[activeHeadings.includes(link.id) && 'dark:text-zinc-200']"
            :to="`#${link.id}`"
            class="hover:text-blue-500 dark:hover:text-zinc-200"
          >
            {{ index + 1 }}. {{ link.text }}
          </NuxtLink>
        </h2>
        <div v-if="link.children" class="border-l ml-4 pl-2 border-current">
          <h3 v-for="(sublink, subindex) in link.children" :key="sublink.id">
            <NuxtLink
              :to="`#${sublink.id}`"
              class="hover:text-blue-500 dark:hover:text-zinc-200 block my-1"
            >
              {{ index + 1 }}.{{ subindex + 1 }} - {{ sublink.text }}
            </NuxtLink>
          </h3>
        </div>
      </section>
    </div>
    <button class="font-bold tracking-tight text-sm hover:text-white" @click="doPrint">
      <UnoIcon class="i-ph-printer w-5 h-5 mr-2" />Print this page
    </button>
    <NuxtLink
      :to="`https://twitter.com/intent/tweet?text=Reading%20%40owln_ai's%20https%3A//owln.ai${doc._path}`"
      class="block mt-3 font-bold tracking-tight text-sm hover:text-blue-500 dark:hover:text-blue-400"
    >
      <UnoIcon class="i-ph-twitter-logo-bold w-5 h-5 mr-2" /> Comment on Twitter
    </NuxtLink>
  </aside>
</template>
