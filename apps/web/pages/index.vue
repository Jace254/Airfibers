<script lang="ts" setup>
"use client"
import { addToWaitlist } from '@/composables/addToWaitlist';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'vue-sonner';
import Particles from '@/components/particles.vue';

const formAction = async (data: FormData) => {
    const email = data.get('email')
    if (!email) {
        toast.error('You need to enter an email')
        return
    }
    toast.promise(addToWaitlist(email as string), {
        loading: 'Adding to waitlist',
        success: (data: any) => `Thsank you, you're number ${Intl.NumberFormat().format(data)} on the list`,
        error: "Error"
    })
}
</script>

<template>
    <main
        class="relative flex min-h-screen flex-col items-center justify-between px-4 py-24 bg-gradient-to-t from-transparent from-violet-400/0 to-violet-400/20">
        <Particles class="absolute inset-0 z-10 " :vy=-1 :quantity=50 :staticity=200 color="#7c3aed" />
        <div class="flex flex-col items-center my-4 md:my-8 lg:my-16 xl:my-24 z-20">
            <div
                class="text-center text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-t py-2 from-violet-100 to-zinc-300 font-display font-bold">
                Revolutionize your WISP Business
            </div>
            <p class="text-center font-thin text-lg text-gray-300 mt-8 max-w-2xl">
                Airfibers is a cutting-edge WISP business management platform. Grow your customer base with ease and get
                realtime business analytics
            </p>
            <span
                class="rounded-full mt-8 bg-black/10 px-3 py-1 text-sm  leading-6 text-violet-200 ring-1 ring-inset ring-violet-100/20">
                Coming soon
            </span>

        </div>

        <form class="relative w-full max-w-sm isolate mt-8 flex items-center pr-1 z-20" @action="formAction">
            <label for="email" class="sr-only">
                Email address
            </label>
            <input  type="email" autocomplete="email" name="email" id="email" placeholder="Email address"
                class="peer w-0 flex-auto bg-transparent px-2 py-2.5 text-base  text-white placeholder:text-gray-500 focus:outline-none focus:ring-0" />
            <button
                class="hidden  sm:block group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white pl-2.5 pr-[calc(9/16*1rem)] bg-indigo-300/20">
                Enter Waitlist
                <span aria-hidden="true" class="ml-1">&rarr;</span>
            </button>
            <button class="sm:hidden group relative isolate flex-none rounded-md p-1.5  text-white  bg-indigo-300/20">
                <kbd aria-hidden="true" class="ml-1">⏎</kbd>
            </button>
            <div class="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-indigo-300/15" />
            <div
                class="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-indigo-300" />
        </form>
        <Toaster />
    </main>
</template>