<script setup lang="ts">
const { signIn } = useAuthClient()
const githubSignUp = async () => {
    const data = await signIn.social({
        provider: "github",
        callbackURL: "/"
    })
    console.log(data)
}
</script>

<template>
    <AuthCard action-description="Already have an account?" action-text="Sign in" action-url="/auth/sign-in"
        header-title="Create your account" header-sub-title="Welcome! Please fill in the details to get started.">
        <div id="ath-main" class="box-border flex flex-col items-stretch justify-start gap-[1.5rem]">
            <div class="box-border flex flex-col items-stretch justify-start gap-[.5rem]">
                <div id="ath-socialButtons"
                    class="box-border grid items-stretch gap-[.5rem] justify-center grid-cols-[repeat(2,1fr)]">
                    <button shadow-sm m-0 py=".375rem" px=".75rem" outline-0 select-none cursor-pointer text-semifaded
                        rounded="[.375rem]" isolate inline-flex transition-all duration-100 font-500 text=".8125rem"
                        line-height="1.38462" border border-border w-full gap="1rem" relative justify-start
                        hover:bg-accent @click="githubSignUp">
                        <span box-border flex items-center justify-center gap=".75rem" w-full overflow-hidden>
                            <div i-logos-github-icon />
                            <span text-sm font-500>Github</span>
                        </span>
                    </button>
                    <button shadow-sm m-0 py=".375rem" px=".75rem" outline-0 select-none cursor-pointer text-semifaded
                        rounded="[.375rem]" isolate inline-flex transition-all duration-100 font-500 text=".8125rem"
                        line-height="1.38462" border border-border w-full gap="1rem" relative justify-start
                        hover:bg-accent>
                        <span box-border flex items-center justify-center gap=".75rem" w-full overflow-hidden>
                            <div i-logos-google-icon />
                            <span text-sm font-500>Google</span>
                        </span>
                    </button>
                </div>
            </div>
            <div id="ath-dividerRow" box-border flex flex-row items-center justify-center>
                <div class="box-border flex flex-row items-stretch justify-start flex-1 h-1px bg-border" />
                <p class="box-border font-[.8125rem] font-400 line-height-[1.38462] text-faded mx-1rem">or</p>
                <div class="box-border flex flex-row items-stretch justify-start flex-1 h-1px bg-border" />
            </div>
        </div>
    </AuthCard>
</template>