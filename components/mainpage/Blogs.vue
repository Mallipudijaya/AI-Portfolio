<script setup>
const { data } = await useFetch('https://dev.to/api/articles', {
  query: {
    username: 'owlnai',
    per_page: '3',
    pagination: '1',
  },
})
</script>

<template>
  <section
    class="border-t border-sky-400 dark:border-sky-900 bg-sky-50/50 dark:bg-#031621/30 dark:[background-image:radial-gradient(54.75%_54.75%_at_52.02%_-13.74%,_#12223d_0%,_rgba(26,_20,_48,_0)_100%)]"
  >
    <div
      class="relative container mx-auto flex flex-col lg:flex-row lg:items-center max-w-6xl justify-between w-full gap-10 py-16 font-sans md:py-24 lg:py-32 isolate px-6 2xl:px-0"
    >
      <UnoIcon
        class="-z-1 i-ph-notepad-duotone?mask text-6xl bg-gradient-to-br from-sky-600 to-cinder-1000 w-48 h-48 absolute left-0 top-10 opacity-50 hidden sm:block"
      />
      <UnoIcon
        class="-z-1 i-ph-pencil-duotone?mask text-6xl bg-gradient-to-br from-sky-600 to-cinder-1000 w-48 h-48 absolute left-50 top-10 opacity-50 hidden sm:block"
      />
      <div class="flex flex-col gap-y-5">
        <h2 class="text-3xl font-semibold font-headings 2xl:text-5xl magic">
          My latest blog posts
        </h2>
        <p
          class="prose text-lg sm:text-xl leading-8 dark:text-gray-300 max-w-43ch"
        >
          I write about my experiences, projects, and things I learn on dev.to. I hope you
          enjoy reading them!
        </p>
        <NuxtLink to="https://dev.to/owlnai">
          <uiNotReallyAButton class="mt-4">
            View all blog posts
          </uiNotReallyAButton>
        </NuxtLink>
      </div>
      <div class="flex flex-col justify-between">
        <nav aria-label="Latest 4 blog entries">
          <ol class="divide-y-2 divide-sky-900">
            <li v-for="post in data" :key="post.title" class="relative py-6">
              <div class="max-w-lg">
                <NuxtLink :to="post.url" class="space-y-2">
                  <div class="flex flex-wrap justify-between">
                    <h1
                      class="text-2xl font-headings font-semibold text-gray-800 dark:text-gray-200"
                    >
                      {{ post.title }}
                    </h1>
                  </div>
                  <div class="text-gray-500">
                    <time
                      v-if="post.created_at"
                      :datetime="post.created_at"
                    >
                      {{
                        new Date(post.created_at).toLocaleDateString(
                          "en-US",
                          {
                            dateStyle: "long",
                          }
                        )
                      }}
                    </time>
                    · {{ post.reading_time_minutes }} minutes read · {{ post.positive_reactions_count }} <UnoIcon class="i-ph-thumbs-up-bold" />
                  </div>

                  <p class="pb-2">
                    {{ post.description }}
                  </p>
                  <div class="flex flex-wrap justify-between">
                    <div class="flex flex-row gap-2">
                      <span
                        v-for="tag in post.tags.split(', ')"
                        :key="tag"
                        class="px-4 py-1 text-xs font-medium tracking-wide lowercase border rounded-full text-gray-800 border-gray-300 dark:border-gray-600/50 dark:text-gray-200/90 bg-gray-50 dark:bg-gray-800/40"
                      >
                        #{{ tag }}
                      </span>
                    </div>
                    <span
                      class="underline font-medium underline-offset-3 text-sky-500 dark:text-sky-400"
                    >Read more -></span>
                  </div>
                </NuxtLink>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
</template>
