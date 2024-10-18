<script setup lang="ts">
import { type NavItem } from '@/types';
import { cn } from '@/utils';

const tabs = ref<NavItem[]>([
    {
        title: "Bandwidth",
        to: "/networking/package-management/bandwidth"
    },
    {
        title: "Hotspot",
        to: "/networking/package-management/hotspot"
    },
    {
        title: "PPPOE",
        to: "/networking/package-management/pppoe"
    }
])

const router = useRoute()
</script>

<template>
    <NuxtLayout name="default">
        <UxPageHeading heading="Package Management" sub-heading="View and manage internet plans"/>
        <div mt-8>
            <Navbar :tabs="tabs"/>
            <div class="space-y-4 mt-2rem">
                <slot />
            </div>
        </div>
    </NuxtLayout>
</template>