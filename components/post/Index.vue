<script setup lang="ts">
declare const process: {
  client: boolean;
};
const { visibleHeadings, activeHeadings, updateHeadings } = useScrollspy();

defineProps<{ project?: boolean }>();
if (process.client) {
  setTimeout(() => {
    updateHeadings([
      ...document.querySelectorAll(" h2"),
      ...document.querySelectorAll(" h3"),
    ]);
  }, 300);
}
</script>

<template>
  <article
    class="mx-auto container max-w-6xl pt-26 sm:py-8 px-6 2xl:px-0 print:p-0 relative isolate"
  >
            <div
            class="absolute w-full h-sm -z-1 right-80 top-0 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.6)_0%,_rgba(34,_57,_16,_0)_100%)] rotate-45"
          ></div>
                      <div
              class="absolute w-full h-sm -z-1 left-100 top-100 [background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(284,_84%,_60%,_0.1)_0%,_rgba(34,_57,_16,_0)_100%)] dark:[background-image:radial-gradient(48.64%_49.21%_at_49.24%_50.03%,_hsla(244,_64%,_25%,_0.6)_0%,_rgba(34,_57,_16,_0)_100%)] rotate--45"
            ></div>
    <ContentDoc>
      <template #default="{ doc }">
        <template v-if="project">
          <OgImageStatic component="PageOgImage" />

          <PostProjectHeader :doc="doc" />
        </template>
        <template v-else>
          <OgImageStatic component="PageOgImage" />

          <PostHeader :doc="doc" style="--stagger: 1"
              data-animate/>
        </template>

        <div
          class="relative flex flex-col-reverse gap-6 mx-auto lg:grid lg:grid-cols-4"
        >
          <div
            class="pt-10 print:p-0 lg:col-span-3"
          >
            <Lede style="--stagger: 2"
                data-animate>{{ doc.description }}</Lede>
            <ContentRenderer
              id="doc"
              :value="doc"
              class="prose text-gray-800 dark:text-gray-200/95 max-w-65ch text-lg xl:text-xl slide-enter-content" style="--stagger: 3"
                data-animate
            />
          </div>
          <postAside :activeHeadings="activeHeadings" :doc="doc" style="--stagger: 2"
                data-animate />
        </div>
      </template>
      <template #not-found>
        <div class="space-y-4 text-center">
          <h1 class="text-5xl font-headings font-bold text-white">404</h1>
          <p>Whoops! The page you requested was not found.</p>
          <NuxtLink
            to="/"
            class="block font-medium text-white underline underline-offset-4"
          >
            Go back
          </NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>
<style>
.prose a {
  color: #4491d8;
}

.prose h2 > a {
  text-decoration: none !important;
  font-weight: 600;
}

.dark .prose :where(h2, h3) a {
  color: white !important;
}
  .prose :where(h2, h3) a {
  color: black !important;
}

.prose h2 {
  color: black !important;
}

.prose h3 > a {
  text-decoration: none !important;
  font-weight: 500;
}
</style>
