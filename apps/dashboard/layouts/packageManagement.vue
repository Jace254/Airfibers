<script lang="ts">
import { type NavItem } from '@/types';

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
</script>

<template>
    <NuxtLayout name="default">
        <slot name="bandwidth"/>
        <slot name="hotspot"/>
        <slot name="pppoe"/>
    </NuxtLayout>
</template>