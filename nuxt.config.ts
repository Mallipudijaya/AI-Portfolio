import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: ["nuxt-seo-kit"],
  experimental: {
    payloadExtraction: true,
    componentIslands: true,
    typedPages: true,
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  routeRules: {
    "/**": { isr: 3600 },
  },
  modules: [
    "@unocss/nuxt",
    "@nuxt/content",
    [
      "@nuxtjs/color-mode",
      {
        classSuffix: "",
      },
    ],
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/fontaine",
    "@nuxtjs/web-vitals",
  ],

  runtimeConfig: {
    lastfmKey: "",
    public: {
      siteUrl: "https://owln.ai/",
      siteName: "Unai Mengual",
      siteDescription:
        "Owl of the open-source, webdev, UI designer, translator.",
      language: "en-US",
    },
  },

  typescript: {
    shim: false,
  },
  css: ["@unocss/reset/tailwind.css"],
  devtools: {
    enabled: true,
  },
});
