<script setup lang="ts">
import { cn } from '@/utils';

interface Props {
    icon: string
    label: string
    onClick: () => void
}

defineProps<Props>()
</script>

<template>
    <button shadow-sm m-0 py=".375rem" px=".75rem" outline-0 select-none cursor-pointer text-semifaded
        rounded="[.375rem]" isolate inline-flex transition-all duration-100 font-500 text=".8125rem"
        line-height="1.38462" border border-border w-full gap="1rem" relative justify-start hover:bg-accent
        @click="onClick">
        <span box-border flex items-center justify-center gap=".75rem" w-full overflow-hidden>
            <div :class="cn(icon, 'text-lg')" />
            <span text-sm font-500>{{ label }}</span>
        </span>
    </button>
</template>