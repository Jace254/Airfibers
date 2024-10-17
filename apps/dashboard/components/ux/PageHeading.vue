<script setup lang="ts">
defineProps<{ text: string }>()

</script>

<template>
    <div class="relative flex items-start justify-between gap-4">
        <div class="flex w-full max-w-[80ch] flex-col gap-3">
            <div class="w-full space-y-2">
                <h2 class="truncate text-2xl font-medium tracking-tight">{{ text }}</h2>
            </div>
        </div>
    </div>
</template>