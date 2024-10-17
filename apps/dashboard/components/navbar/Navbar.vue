<script setup lang="ts">
import type { NavItem } from '@/types';

defineProps<{
    tabs: NavItem[]
}>()

const router = useRoute()
</script>


<template>
    <div class="space-y-4">
        <nav class="sticky top-0 border-b border-border bg-background">
            <div class="flex items-center w-full pl-1 overflow-x-auto">
                <ul class="flex flex-row shrink-0 gap-6">
                    <li v-for="tab, idx in tabs" :key="idx"
                        :class="cn('flex border-b ', router.fullPath === tab.to ? 'border-primary' : 'border-transparent')">
                        <NavbarItem :tab="tab" />
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>