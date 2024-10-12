<script setup lang="ts">
const links = [
    {
        name: "Support",
        url: ""
    },
    {
        name: "Privacy",
        url: ""
    },
    {
        name: "Terms",
        url: ""
    }
]
</script>


<template>
    <div
        class="[:root:has(&)]:bg-gray-300 bg-gray-300 flex min-h-screen flex-col items-center py-6 px-4 overflow-hidden relative font-sans font-200">
        <div class="relative flex flex-1 justify-center flex-col gap-y-6 w-full max-w-[25rem]">
            <NuxtImg src="/glow.avif" style="color: transparent;"
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay h-[150vh] opacity-70 pointer-events-none max-w-none select-none z-10" />
            <slot />
            <footer class="flex justify-between text-sm">
                <p> @ {{ (new Date()).getFullYear() }} Airfibers</p>
                <ul role="list" class="flex gap-2 ">
                    <li v-for="link, idx in links" :key="idx"
                        class="flex items-center gap-2 after:size-[1.5px] after:bg-gray-900 after:rounded-full last:after:hidden">
                        <NuxtLink :href="link.url"
                            class="relative text-gray-700 hover:text-gray-900 hover:font-300 hover:cursor-pointer rounded-sm after:absolute after:-inset-x-1.5 after:-inset-y-0.5 after:border-2 after:border-blue-500 after:rounded-sm after:opacity-0 focus-visible:after:opacity-100">
                            {{ link.name }}
                            {{ idx !== 2 ? '&bull;' : null }}
                        </NuxtLink>
                    </li>
                </ul>
            </footer>
        </div>
    </div>
</template>