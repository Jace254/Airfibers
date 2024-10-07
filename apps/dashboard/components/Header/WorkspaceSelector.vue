<script setup lang="ts">
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import SelectorButton from './SelectorButton.vue';

const open = ref(false)
</script>

<template>
    <Popover v-model:open="open">
        <PopoverTrigger as-child>
            <SelectorButton>
                Joashnet
            </SelectorButton>
        </PopoverTrigger>
        <PopoverContent class="w-[250px] p-0 border border-gray-300 rounded-xl overflow-hidden" align="start">
            <div class=" w-full h-auto  bg-accent text-sm">
                <div class="w-full flex flex-col items-center overflow-hidden bg-background border-b rounded-xl shadow-sm border-gray-300">
                    <div class="h-[40px] w-full px-4 flex items-center justify-between border-b border-dashed border-border">
                        <span>Joashnet</span>
                        <UiBadge variant="outline" >Current</UiBadge>
                    </div>
                    <button class="h-[40px] w-full px-4 flex items-center border-dashed border-border hover:bg-active">
                        Mikenet
                    </button>
                </div>
                <button
                    class="h-[35px] w-full flex flex-row items-center px-4 gap-[8px] text-faded hover:text-foreground">
                    <div i-pepicons-print-plus-circle-filled />
                    <span>Create new workspace</span>
                </button>
            </div>
        </PopoverContent>
    </Popover>
</template>