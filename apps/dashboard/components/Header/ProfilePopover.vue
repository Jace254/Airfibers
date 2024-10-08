<script setup lang="ts">
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

const open = ref(false)
</script>

<template>
    <div>
        <Popover v-model:open="open">
            <PopoverTrigger as-child>
                <button class="bg-inverted w-[24px] h-[24px] rounded-full overflow-hidden border border-border">
                    <NuxtImg src="/profile-demo.jpg" />
                </button>
            </PopoverTrigger>
            <PopoverContent class="w-[350px] p-0 border border-border rounded-xl  overflow-hidden" align="end">
                <div class=" w-full h-auto flex flex-col bg-background text-sm">
                    <div class="w-full h-auto flex flex-row items-center p-4 gap-[8px]">
                        <div class="bg-inverted w-[36px] h-[36px] rounded-full overflow-hidden border border-border">
                            <NuxtImg src="/profile-demo.jpg" />
                        </div>
                        <div class="flex flex-col justify-center items-start ">
                            <span class="font-semibold">Joash Agesa</span>
                            <span>Joash</span>
                        </div>
                    </div>
                    <div
                        class="ml-[48px] px-[10px] pb-[16px] flex flex-row justify-between gap-2 py-2 text-faded font-400">
                        <button
                            class="w-full text-xs border border-border rounded-lg p-1 shadow hover:bg-active hover:text-foreground">
                            <div flex items-center justify-center gap="2px">
                                <div i-solar-settings-bold />
                                <span>Manage account</span>
                            </div>
                        </button>
                        <button
                            class="w-full text-xs border border-border rounded-lg p-1 shadow hover:bg-active hover:text-foreground">
                            <div flex items-center justify-center gap="2px">
                                <div i-material-symbols-logout-rounded />
                                <span>Sign out</span>
                            </div>
                        </button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    </div>
</template>