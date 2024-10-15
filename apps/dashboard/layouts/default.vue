<script setup lang="ts">
import type { Navigation as NavigationType } from '@/types'
import { TooltipProvider } from '@/components/ui/tooltip';


const navigation = ref<NavigationType>({
    navItems: [
        {
            title: 'Overview',
            icon: 'i-material-symbols-team-dashboard',
            to: '/',
        },
        {
            title: 'Analytics',
            icon: 'i-material-symbols-analytics',
            to: '/analytics',
        },
        {
            title: 'Customers',
            icon: 'i-ion-person-circle',
            subItems: [
                {
                    title: "Hotspot users",
                    to: '/cutomers/hotspot-users'
                },
                {
                    title: "Fixed users",
                    to: '/cutomers/fixed-users'
                }
            ],
            to: '/customers',
        },
        {
            title: 'Networking',
            icon: 'i-ion-git-network',
            subItems: [
                {
                    title: "Routers",
                    to: '/networking/routers'
                },
                {
                    title: "Package Management",
                    to: '/networking/package-management'
                }
            ],
            to: '/networking',
        },
        {
            title: 'CRM',
            icon: 'i-fluent-people-community-24-filled',
            subItems: [
                {
                    title: 'Campaigns',
                    to: '/crm/campaigns'
                },
                {
                    title: 'Workflows',
                    to: '/crm/workflows'
                },
            ],
            to: '/crm',
        },
        {
            title: 'Finance',
            icon: 'i-ph-money-wavy-fill',
            subItems: [
                {
                    title: 'Transactions',
                    to: '/finance/transactions'
                },
                {
                    title: 'Invoices',
                    to: '/finance/invoices'
                },
            ],
            to: '/finance',
        },
        {
            title: 'Settings',
            icon: 'i-hugeicons-preference-horizontal',
            to: '/finance',
        },
    ],
    navSections: [
        {
            title: 'Resources',
            navItems: [
                {
                    title: 'Documentation',
                    icon: 'i-oui-documentation',
                    to: 'https://docs.airfibers.com',
                },
                {
                    title: 'Feedback',
                    icon: 'i-ic-twotone-feedback',
                    to: 'https://feedback.airfibers.com',
                },
            ],
        },
    ],
})

const navOpen = ref(false)
const dynamicMain = ref<HTMLElement>()

function setDynamicHeight() {
    if (dynamicMain.value)
        dynamicMain.value.style.height = `${window.innerHeight}px`
}

onMounted(() => {
    // setDynamicHeight()
    // useEventListener('resize', setDynamicHeight)
})


useHead({
    htmlAttrs: {
        lang: 'en'
    },
    title: 'AIRFibers',
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
    <TooltipProvider>
        <main ref="dynamicMain"
            class="layoutScrollbarObtrusive  w-full h-screen min-h-screen bg-accent dark:bg-background font-display font-400 text-sm line-height-none">
            <div class="h-full w-full flex flex-row items-stretch text-foreground">
                <div class="w-full flex flex-col">
                    <Header />
                    <div class="h-full w-full flex flex-row items-stretch text-foreground">
                        <Navigation v-model="navOpen" :nav-items="navigation.navItems"
                            :nav-sections="navigation.navSections" />
                        <div class="min-w-[0px] w-full flex flex-col transition-all lg:p-2 lg:ps-0">
                            <div
                                class="h-full w-full border border-border lg:rounded-sm bg-background dark:bg-accent:40">
                                <slot />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </TooltipProvider>
</template>

<style>
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-height: -webkit-fill-available;
}

html {
    height: -webkit-fill-available;
}

#dynamicMain {
    min-height: -webkit-fill-available;
}
</style>