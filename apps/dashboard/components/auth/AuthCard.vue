<script setup lang="ts">
interface Props {
    headerTitle: string;
    headerSubTitle: string;
    actionText: string;
    actionUrl: string;
    actionDescription: string;
}

defineProps<Props>()
</script>

<template>
    <div class="relative z-20 [&>div]:animate-fade-in [--animation-duration:250ms] font-sans">
        <div id="ath-rootBox" class="box-border w-fit">
            <div id="ath-cardBox"
                class="box-border flex flex-col items-stretch justify-start isolate max-w-[calc(-2.5rem_+_100vw)] w-[25rem] border border-black:7 rounded-[.75rem] text-foreground relative overflow-hidden shadow-md">
                <div id="ath-card"
                    class="box-border flex flex-col items-stretch gap-[2rem] bg-background transition-all duration-200 text-center z-10 border rounded-[.5rem] relative px-[2.5rem] py-[2rem] content-center shadow-sm">
                    <div id="ath-header" class="box-border flex flex-col items-stretch justify-start gap-[1.5rem]">
                        <div id="ath-logoBox" class="box-border flex flex-row items-center h-[24px] justify-center">
                            <NuxtLink class="cursor-pointer">
                                <LogoText />
                            </NuxtLink>
                        </div>
                        <div id="ath-header-text"
                            class="box-border flex flex-col items-stretch justify-center gap-[.25rem]">
                            <h1 id="ath-headerTitle"
                                class="border-box text-foreground m-0 font-700 text-[1.0625rem] line-height-[1.41176]">
                                {{ headerTitle }}
                            </h1>
                            <p id="ath-headerSubtitle"
                                class="box-border m-0 text-[.8125rem] font-400 line-height-[1.38462] text-faded ">
                                {{ headerSubTitle }}
                            </p>
                        </div>
                    </div>
                    <slot />
                </div>
                <div
                    class="box-border flex flex-col items-center justify-center mt-[-.5rem] pt-[.5rem] bg-[linear-gradient(rgba(0,0,0,0.03),rgba(0,0,0,0.03)),linear-gradient(rgb(255,255,255),rgb(255,255,255))]">
                    <div
                        class="text-[.8125rem] line-height-[1.38462] box-border flex flex-row items-center justify-start gap-[.25rem] m-0 m-auto px-[2rem] py-[1rem]">
                        <span class=" text-faded">{{ actionDescription }}</span>
                        <NuxtLink :to="actionUrl"
                            class="text-primary inline items-center m-0 cursor-pointer decoration-none font-400">
                            {{ actionText }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>