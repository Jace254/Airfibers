<script setup lang="ts">
import type { NavItem } from '@/types'
import { cn } from '@/utils'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

defineProps<NavItem>()

const router = useRoute()

function navClicked() {
  window.postMessage({ isFromNav: true, clicked: true })
}
</script>

<template>
  <div class="text-md relative my-[1px] rounded-md">
    <div class="block">
      <Tooltip>
        <TooltipTrigger as-child>
          <NuxtLink :to="to" draggable="false" :class="cn(router.fullPath === to ? 'bg-hover' : 'bg-transparent')"
            class="block cursor-pointer rounded-md transition-colors transition-duration-[0.15s] hover:bg-hover hover:text-foreground text-faded"
            @click="navClicked">
            <span
              class="h-[28px] flex items-center max-lg:justify-center lg:gap-1 rounded-sm px-[2px] lg:pe-[2px] lg:ps-[6px]">
              <div v-if="icon" :class="cn(icon, 'text-lg')" />
              <span class="text-sm hidden lg:block">{{ title }}</span>
            </span>
          </NuxtLink>
        </TooltipTrigger>
        <TooltipContent class="bg-faded text-white py-1 px-1 rounded-md font-sans text-xs my-[10px] lg:hidden"
          align="center" side="right" :side-offset="3">
          <p>{{ title }}</p>
        </TooltipContent>
      </Tooltip>
      <TooltipWrapper :content="title" align="center" side="right">

      </TooltipWrapper>
    </div>
  </div>
  <template v-if="subItems">
    <div class="anchor max-lg:hidden">
      <template v-for="subItem, idx in subItems" :key="idx">
        <NavigationItem :title="subItem.title" :to="subItem.to" />
      </template>
    </div>
  </template>
</template>

<style scoped>
.anchor {
  position: relative;
  margin-left: 15px;
  padding-left: 6px;
}

.anchor::after {
  content: '';
  position: absolute;
  left: -1.5px;
  top: 1px;
  bottom: 1px;
  width: 1px;
  border-radius: 0.5px;
  --at-apply: 'bg-foreground:35';
}
</style>
