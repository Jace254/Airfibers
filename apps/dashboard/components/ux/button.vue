<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
    text: string
    icon?: string
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <button shadow-sm m-0 py=".375rem" px=".75rem" outline-0 select-none cursor-pointer bg-primary rounded=".375rem"
        text=".8125rem" isolate relative inline-flex justify-center items-center transition-all duration-100 font-500
        border border-primary w-full hover:bg-primary:80 after:absolute after:z-1 after:inset-0 after:transition-all
        after:bg-gradient-to-b after:from-white:15 after:to-transparent after:opacity-100 after:rounded-inherit
        after:content-empty :class="props.class">
        <span text-white box-border flex flex-row items-center justify-start>
            {{ props.text }}
            <div v-if="props.icon" :class="cn('w-[.625rem] h-[.625rem] opacity-62 ml-[.5rem] shrink-0', props.icon)" />
        </span>
    </button>
</template>