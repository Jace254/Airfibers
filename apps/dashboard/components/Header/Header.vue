<script setup lang="ts">
import Logo from '@/components/Logo.vue';

</script>

<template>
    <div
        class="flex bg-faded flex-row gap-[8px] justify-between items-center min-w-0 w-full box-border h-[48px] px-[12px] border border-b-gray-300">
        <!-- The workspace nav -->
        <div class="flex flex-row gap-[8px] justify-start items-center min-w-0 box-border shrink-0 h-full">
            <TooltipWrapper content="Back to Station Overview" align="start">
                <!-- TODO: Add the overview station link -->
                <NuxtLink class="w-[30px] h-[30px] flex items-center justify-center">
                    <span class="overflow-hidden">
                        <Logo :width="24" :height="24" />
                    </span>
                </NuxtLink>
            </TooltipWrapper>
            <HeaderSeparator />
            <TooltipWrapper content="Change Workspace" align="start">
                <HeaderWorkspaceSelector />
            </TooltipWrapper>
            <HeaderSeparator />
            <TooltipWrapper content="Change Station" align="start">
                <HeaderStationSelector />
            </TooltipWrapper>
        </div>
        <!-- Profile and help nav -->
        <div class="flex items-center gap-[8px]">
            <TooltipWrapper content="Help" align="end">
                <button
                    class="w-[30px] h-[30px] hover:bg-gray:20 rounded-md flex items-center justify-center text-gray-500 hover:text-foreground">
                    <div i-icon-park-twotone-helpcenter text-lg />
                </button>
            </TooltipWrapper>
            <TooltipWrapper content="Profile" align="end">
                <HeaderProfilePopover />
            </TooltipWrapper>
        </div>
    </div>
</template>