<script setup lang="ts">
import { Tooltip, TooltipTrigger , TooltipContent} from '@/components/ui/tooltip';

defineProps<{ content: string }>()
</script>

<template>
    <Tooltip>
        <TooltipTrigger>
            <slot />
        </TooltipTrigger>
        <TooltipContent class="bg-gray-800 text-white py-1 px-1 rounded-md font-sans text-xs my-[10px]" align="start" :side-offset="0">
            <p>{{ content }}</p>
        </TooltipContent>
    </Tooltip>
</template>