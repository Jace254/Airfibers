<script setup lang="ts">

const email = ref('')

const { signIn } = useAuthClient()
const githubSignIn = async () => {
    const data = await signIn.social({
        provider: "github",
        callbackURL: "/"
    })
    console.log(data)
}

const googleSignIn = async () => {
    const data = await signIn.social({
        provider: "google",
        callbackURL: "/"
    })
    console.log(data)
}
</script>


<template>
    <AuthCard action-description="Don't have an account?" action-text="Sign up" action-url="/auth/sign-up"
        header-title="Sign in to AIRFibers" header-sub-title="Welcome back! Please sign in to continue.">
        <div id="ath-main"
            class="box-border flex flex-col items-stretch justify-start gap-[1.5rem] line-height-[1.38462]">
            <div class="box-border flex flex-col items-stretch justify-start gap-[.5rem]">
                <div id="ath-socialButtons"
                    class="box-border grid items-stretch gap-[.5rem] justify-center sm:grid-cols-[repeat(2,1fr)] grid-cols-[repeat(1,1fr)]">
                    <AuthSocialButton :on-click="githubSignIn" icon="i-logos-github-icon" label="Github" />
                    <AuthSocialButton :on-click="googleSignIn" icon="i-logos-google-icon" label="Google" />
                </div>
            </div>
            <div id="ath-dividerRow" box-border flex flex-row items-center justify-center>
                <div class="box-border flex flex-row items-stretch justify-start flex-1 h-1px bg-border" />
                <p class="box-border text-[.8125rem] font-400  text-faded mx-1rem">or</p>
                <div class="box-border flex flex-row items-stretch justify-start flex-1 h-1px bg-border" />
            </div>
            <form box-border flex flex-col items-stretch justify-start gap-2rem>
                <div box-border flex flex-col items-stretch justify-start gap-1.5rem>
                    <div id="ath-formFieldRow" box-border flex flex-row items-stretch justify-between gap-1rem>
                        <div id="ath-formField" box-border flex flex-col items-stretch justify-start relative flex-auto>
                            <div box-border flex flex-col items-stretch justify-start gap-0.5rem text=".8125rem"
                                text-foreground>
                                <div id="ath-formFieldLabelRow" box-border flex flex-row items-center justify-between>
                                    <label id="ath-formFieldLabel" flex items-center font-500 for="email">
                                        Email address
                                    </label>
                                </div>
                                <input v-model='email' type="email" autocomplete="email" name="email" id="email"
                                    required box-border m-0 py-0.375rem px-0.75rem bg-background shadow-sm outline
                                    max-h-2.25rem w-full accent-primary font-400 rounded=".375rem" border
                                    border-foreground:15 transition-all ease duration-200 focus:outline-primary:20
                                    focus:ring-0 outline-none focus:outline-2.5px focus:outline-offset-0
                                    hover:border-foreground:30 />
                            </div>
                        </div>
                    </div>
                </div>
                <button shadow-sm m-0 py=".375rem" px=".75rem" outline-0 select-none cursor-pointer bg-primary
                    rounded=".375rem" text=".8125rem" isolate relative inline-flex justify-center items-center
                    transition-all duration-100 font-500 border border-primary w-full hover:bg-primary:80 after:absolute
                    after:z-1 after:inset-0 after:transition-all after:bg-gradient-to-b after:from-white:15
                    after:to-transparent after:opacity-100 after:rounded-inherit after:content-empty>
                    <span text-white box-border flex flex-row items-center justify-start>
                        Continue
                        <div i-bi-caret-right-fill class="w-[.625rem] h-[.625rem] opacity-62 ml-[.5rem] shrink-0" />
                    </span>
                </button>
            </form>
        </div>
    </AuthCard>
</template>