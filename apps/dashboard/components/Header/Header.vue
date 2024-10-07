<script setup lang="ts">
import Logo from '@/components/Logo.vue';
import { TooltipProvider } from '@/components/ui/tooltip';

</script>

<template>
    <TooltipProvider>
        <div
            class="flex bg-faded flex-row gap-[8px] justify-between items-center min-w-0 w-full box-border h-[48px] px-[12px] border border-b-[#E8E9ED]">
            <!-- The workspace nav -->
            <div class="flex flex-row gap-[8px] justify-start items-center min-w-0 box-border shrink-0 h-full">
                <TooltipWrapper content="Back to Station Overview">
                    <!-- TODO: Add the overview station link -->
                    <NuxtLink class="w-[30px] h-[30px] flex items-center justify-center">
                        <span class="overflow-hidden">
                            <Logo :width="18" :height="18" />
                        </span>
                    </NuxtLink>
                </TooltipWrapper>
                <HeaderSeparator />
                <TooltipWrapper content="Change Workspace">
                    <HeaderWorkspaceSelector />
                </TooltipWrapper>
                <HeaderSeparator />
                <TooltipWrapper content="Change Station">
                    <HeaderStationSelector />
                </TooltipWrapper>
            </div>
        </div>
    </TooltipProvider>
</template>