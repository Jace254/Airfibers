<script setup lang="ts">
definePageMeta({
    layout: 'package-management'
})
</script>

<template>
    <div relative flex items-center justify-between>
        <div flex items-center gap-3>
            <div min-w-280px>
                <UxInput placeholder="Search hotspots" type="search" class="pl-2rem" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <div class="i-ic-baseline-search text-lg text-muted-foreground" />
                </span>
            </div>
            <!-- combobox sort and filters -->
        </div>
        <NuxtLink to="/networking/package-management/hotspot/create">
            <UxButton text="Create hotspot" icon="i-ph-plus-bold" class="max-w-[150px] text-xs" />
        </NuxtLink>
    </div>
</template>