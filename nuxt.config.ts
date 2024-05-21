import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  experimental: {
    payloadExtraction: true,
    componentIslands: true,
    typedPages: true,
  },
  extends: ["@nuxthub/core", "nuxt-lego"],
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  routeRules: {
    "/**": { isr: true },
    "/projects": { isr: 3600 },
  },
  modules: [
    "@unocss/nuxt",
    "@nuxt/content",
    "@nuxtjs/seo",
    [
      "@nuxtjs/color-mode",
      {
        classSuffix: "",
      },
    ],
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/fontaine",
  ],

  runtimeConfig: {
    lastfmKey: "",
  },
  site: {
    url: "https://mallipudijaya.github.io/AI-Portfolio/",
    name: "JayaShree",
    description: "Owl of the open-source, webdev, UI designer, translator.",
    defaultLocale: "en-US",
  },
  css: ["@unocss/reset/tailwind.css"],
  devtools: {
    enabled: true,
  },

  typescript: {
    shim: false,
  },
});
