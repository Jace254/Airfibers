<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
    defaultValue?: string | number
    modelValue?: string | number
    class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
})
</script>


<template>
    <input v-model='modelValue' box-border m-0 py-0.375rem px-0.75rem bg-background shadow-sm outline max-h-2.25rem
        w-full accent-primary font-300 rounded=".375rem" border border-foreground:15 transition-all ease duration-200
        focus:outline-primary:20 focus:ring-0 outline-none focus:outline-2.5px focus:outline-offset-0
        hover:border-foreground:30 :class="class" />
</template>