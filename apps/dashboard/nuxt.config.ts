// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'radix-vue/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-og-image'
  ],
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
    './styles/main.css'
  ],
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
