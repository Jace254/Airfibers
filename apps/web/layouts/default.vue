<script setup lang="ts">  
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'Airfibers',
  meta: [
    { name: 'description', content: 'Accelerate your WISP business' },
    { property: 'og:title', content: 'Cutting-edge WISP Business Management' },
    { property: 'og:description', content: 'Accelerate your WISP business' },
    { property: 'og:url', content: 'https://airfibers.com' },
    { property: 'og:site_name', content: 'airfibers.com' },
    { property: 'og:image', content: 'https://airfibers.com/og.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '675' },
    { name: 'twitter:title', content: 'Airfibers' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'shortcut icon', href: '/og.png' },
  ],
  script: [
    {
      src: 'https://beamanalytics.b-cdn.net/beam.min.js',
      'data-token': '4d4a9f6f-e990-41a6-86f6-051aca3e5d34',
      async: true,
    },
  ],
})
</script>

<template>
    <div class="bg-black font-sans">
      <slot />
    </div>
</template>
  

  