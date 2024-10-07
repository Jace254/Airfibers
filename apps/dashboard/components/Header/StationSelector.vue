<script setup lang="ts">
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import SelectorButton from './SelectorButton.vue';
import { cn } from '@/utils';

const open = ref(false)
const showSearch = ref(false)
const searchTerm = ref('')

const toggleSearch = () => {
    if (open.value)
        showSearch.value = !showSearch.value
    else
        showSearch.value = false
    if (showSearch.value === false)
        searchTerm.value = ''

}
</script>

<template>
    <div>
        <Popover v-model:open="open">
            <PopoverTrigger as-child>
                <SelectorButton>
                    <div class="flex items-center gap-1">
                        <div i-fluent-globe-32-regular text-faded />
                        <span>Utawala</span>
                    </div>
                </SelectorButton>
            </PopoverTrigger>
            <PopoverContent class="w-[250px] p-0 border border-gray-300 rounded-xl overflow-hidden" align="start">
                <div class=" w-full h-auto  bg-accent text-sm">
                    <div px-4 py-2 bg-background w-full flex justify-between text-faded>
                        <span>STATIONS(1)</span>
                        <button class="p-1 w-[24px] h-[24px] flex items-center justify-center" variant="ghost"
                            @click="toggleSearch">
                            <div i-iconamoon-search-bold />
                        </button>
                    </div>
                    <div px-4 bg-background w-full overflow-hidden transition-transform duration='0.15s'
                        will-change-transform :class="cn(showSearch ? 'h-30px' : 'h-0px')">
                        <UiInput v-model:model-value="searchTerm" placeholder="Search Station"
                            class="focus-visible:ring-none h-[30px]" />
                    </div>
                    <div
                        class="h-[40px] w-full flex items-center justify-between px-4 bg-background border-b rounded-b-xl shadow-sm border-gray-300">
                        <div class="flex items-center gap-1 text-gray-800">
                            <div i-gis-globe-poi />
                            <span>Utawala</span>
                        </div>
                        <UiBadge variant="outline">Current</UiBadge>

                    </div>
                    <button
                        class="h-[35px] w-full flex flex-row items-center px-4 gap-[8px] text-faded hover:text-foreground">
                        <div i-fluent-globe-add-20-regular />
                        <span>Create new station</span>
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    </div>
</template>