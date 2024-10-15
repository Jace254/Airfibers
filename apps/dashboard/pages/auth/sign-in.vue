<script setup lang="ts">
useHead({
    title: "Sign in"
})
definePageMeta({
    layout: 'auth'
})
</script>


<template>
    <main class="flex-1 relative content-center grid">
        <AuthSignIn />
    </main>
</template>