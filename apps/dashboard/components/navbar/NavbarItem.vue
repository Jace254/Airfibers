<script setup lang="ts">
import type { NavItem } from '@/types';

defineProps<{ tab: NavItem}>()

const router = useRoute()
</script>

<template>
    <NuxtLink prefetch :to="tab.to" :class="cn(router.fullPath === tab.to ? 'text-primary' : 'text-secondary')"
        class="relative isolate select-none items-center justify-center pb-3 pt-2 hover:text-primary:80 leading-none outline-none">
        {{ tab.title }}
    </NuxtLink>
</template>