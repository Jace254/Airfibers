<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import type { NavSection } from '@/types'
import { cn } from '@/utils'

defineProps<NavSection>()
const isOpen = ref(true)
const headerEl = ref<HTMLDivElement>()

onMounted(() => {
  useEventListener(headerEl, 'click', (e) => {
    e.stopPropagation()
  })
})
</script>

<template>
  <Collapsible
    v-model:open="isOpen"
    class="ml-[-8px]"
  >
    <div ref="headerEl" class="mb-[1px] ml-[8px] mt-[8px] flex flex-row cursor-pointer items-center justify-between rounded-md hover:bg-hover">
      <CollapsibleTrigger as-child>
        <button class="h-[24px] flex grow-1 items-center self-start rounded-md px-[4px] leading-[4px]">
          <span class="text-left text-[0.75rem] text-faded">Business</span>
          <div class="i-material-symbols-light-play-arrow-rounded text-md ml-[2px] mt-[2px] transition-transform duration-[0.15s] will-change-transform text-semifaded" :class="cn(isOpen ? 'rotate-90' : 'rotate-0')" />
        </button>
      </CollapsibleTrigger>
    </div>
    <CollapsibleContent :open="isOpen" class="pos-initial h-auto overflow-hidden align-top opacity-100">
      <div v-for="navItem, idx in navItems" :key="idx" class="ml-[8px] pb-[1px] pt-[0.05px]">
        <NavigationItem :icon="navItem.icon" :title="navItem.title" :sub-items="navItem.subItems" :to="navItem.to" />
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>
