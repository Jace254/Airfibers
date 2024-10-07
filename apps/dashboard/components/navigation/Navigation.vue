<script setup lang="ts">
import { vElementSize } from '@vueuse/components'
import { useEventListener } from '@vueuse/core'
import type { Navigation } from '@/types'
import { cn } from '@/utils'

defineProps<Navigation>()
const model = defineModel()
const navigation = ref()
function onResize(size: { width: number, height: number }) {
  if (size.width < 330)
    model.value = false
}

onMounted(() => {
  useEventListener('click', (e) => {
    if (model.value === true && !navigation.value.contains(e.target as Node))
      model.value = false
  })
  useEventListener('message', (e) => {
    const { data } = e
    if (data.isFromNav && data.clicked)
      model.value = false
  })
})
</script>

<template>
  <div>
    <div class="w-44px transition-all lg:w-[330px]" />
    <div ref="navigation" class="lg:fixed relative max-lg:h-full lg:bottom-0 lg:top-[48px] z-10 w-44px transition-all lg:left-0 lg:w-[330px]">
      <nav v-element-size="onResize"
        class="relative h-full max-w-[min(-40px_+_100vw,330px)] flex flex-col duration-[0.05s] delay-[0s] ease-[ease-in-out] max-lg:min-w-[40px] max-lg:border max-lg:border-border max-lg:bg-background:70 lg:transition-opacity max-lg:transition-box-shadow"
        :class="cn(model ? 'max-lg:shadow-xl' : 'max-lg:shadow-none')">
        <div
          class="mb-[2px] mt-[4px] grow lg:overflow-y-auto max-lg:flex max-lg:flex-col max-lg:justify-between rounded-md py-0 px-[4px] lg:pl-[14px] lg:pr-[4px]"
          style="scrollbar-gutter: stable;-webkit-box-flex: 1;">
          <template v-if="navItems">
            <div>
              <template v-for="navItem, idx in navItems" :key="idx">
                <NavigationItem :icon="navItem.icon" :title="navItem.title" :sub-items="navItem.subItems"
                  :to="navItem.to" />
              </template>
            </div>
          </template>
          <div class="h-[8px] shrink-0" />
          <template v-if="navSections">
            <template v-for="navSection, idx in navSections" :key="idx">
              <NavigationSection :title="navSection.title" :nav-items="navSection.navItems" />
              <div v-if="navSections.length - 1 !== idx" class="h-[8px] shrink-0" />
            </template>
          </template>
        </div>
      </nav>
    </div>
  </div>
</template>
