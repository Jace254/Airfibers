<script setup lang="ts">
import Header from '@/components/Header/Header.vue';

const authed = ref(true)

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    title: 'Airfibers',
    meta: [
        { name: 'description', content: 'Accelerate your WISP business' },
        { property: 'og:title', content: 'Cutting-edge WISP Business Management' },
        { property: 'og:description', content: 'Accelerate your WISP business' },
        { property: 'og:url', content: 'https://dashboard.airfibers.com' },
        { property: 'og:site_name', content: 'dashboard.airfibers.com' },
        { property: 'og:image', content: 'https://dashboard-airfibers.vercel.app/og.svg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '675' },
        { name: 'twitter:title', content: 'Cutting-edge WISP Business Management' },
        { name: 'twitter:image', content: 'https://dashboard-airfibers.vercel.app/og.svg' },
        { name: 'twitter:description', content: 'Accelerate your WISP business' },
        { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
        { rel: 'shortcut icon', href: '/og.svg' },
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/wisp.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
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
    <main class="layoutScrollbarObtrusive h-[100vh] w-full bg-accent dark:bg-background font-display font-400 text-sm line-height-none">
        <div class="h-full w-full flex flex-row items-stretch text-foreground">
            <div v-if="!authed">
                Login
            </div>
            <div class="w-full flex flex-col" v-if="authed">
                <Header />
                <slot />
            </div>
        </div>
    </main>
</template>