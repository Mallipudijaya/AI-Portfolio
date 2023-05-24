import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: ['nuxt-seo-kit', 'nuxt-lego'],
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
    '/**': { isr: true },
    '/projects': { isr: 3600 },
  },
  unlighthouse: {
    puppeteerOptions: {
      executablePath: '/usr/bin/google-chrome',
    },
  },
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '',
      },
    ],
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/fontaine',
    '@unlighthouse/nuxt',
  ],

  runtimeConfig: {
    lastfmKey: '',
    public: {
      siteUrl: 'https://owln.ai/',
      siteName: 'Unai Mengual',
      siteDescription:
        'Owl of the open-source, webdev, UI designer, translator.',
      language: 'en-US',
    },
  },

  css: ['@unocss/reset/tailwind.css'],
  devtools: {
    enabled: true,
  },

  typescript: {
    shim: false,
  },
})
