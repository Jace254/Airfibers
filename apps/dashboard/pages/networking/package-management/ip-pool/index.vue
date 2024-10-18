<script setup lang="ts">
definePageMeta({
    layout: 'package-management'
})
</script>

<template>
    <div relative flex items-center justify-between>
        <div flex items-center gap-3>
            <div max-w-280px w-full>
                <UxInput placeholder="Search pools" type="search" class="max-sm:text-xs pl-2rem" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                    <div class="i-ic-baseline-search text-lg text-muted-foreground" />
                </span>
            </div>
            <!-- combobox sort and filters -->
        </div>
        <NuxtLink to="/networking/package-management/ip-pool/create">
            <UxButton text="Create pool" icon="i-ph-plus-bold" class="max-w-[150px] text-xs" />
        </NuxtLink>
    </div>
</template>