import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'

const AnaPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{amber.50}',
      100: '{amber.100}',
      200: '{amber.200}',
      300: '{amber.300}',
      400: '{amber.400}',
      500: '{amber.500}',
      600: '{amber.600}',
      700: '{amber.700}',
      800: '{amber.800}',
      900: '{amber.900}',
      950: '{amber.950}',
    },
  },
})

export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: true },

  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: AnaPreset,
        options: {
          darkModeSelector: '.dark',
        },
      },
    },
  },

  css: ['primeicons/primeicons.css', '~/assets/css/main.css'],

  app: {
    head: {
      title: 'Ana Cosméticos — Perfumaria e Beleza em Itapipoca',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Revendedora Diamante de O Boticário, Natura, Avon e Eudora. Pronta-entrega e encomendas em Itapipoca, CE. Preço e qualidade você encontra aqui.',
        },
        { property: 'og:title', content: 'Ana Cosméticos — Perfumaria e Beleza em Itapipoca' },
        {
          property: 'og:description',
          content: 'Revendedora Diamante de O Boticário, Natura, Avon e Eudora em Itapipoca, CE.',
        },
        { name: 'theme-color', content: '#C4933F' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },
})
