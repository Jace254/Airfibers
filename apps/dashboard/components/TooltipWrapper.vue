<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

defineProps<{
    content: string,
    align: 'start' | 'center' | 'end',
    side?: "top" | "right" | "bottom" | "left" | undefined
}>()
</script>

<template>
    <Tooltip>
        <TooltipTrigger as-child>
            <slot />
        </TooltipTrigger>
        <TooltipContent class="bg-inverted text-background py-1 px-1 rounded-md font-sans text-xs my-[10px]" :align="align"
            :side="side" :side-offset="3">
            <p>{{ content }}</p>
        </TooltipContent>
    </Tooltip>
</template>