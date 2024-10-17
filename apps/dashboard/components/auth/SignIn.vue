<script setup lang="ts">
import { toast } from 'vue-sonner';

const email = ref('')
const password = ref('')
const githubLoading = ref(false)
const googleLoading = ref(false)

const { signIn } = useAuthClient()
const githubSignIn = async () => {
    await signIn.social({
        provider: "github",
        callbackURL: "/"
    }, {
        onRequest: () => {
            githubLoading.value = true
        },
        onError: (ctx) => {
            toast(ctx.error.message)
        }
    })
}

const googleSignIn = async () => {
    await signIn.social({
        provider: "google",
        callbackURL: "/"
    }, {
        onRequest: () => {
            googleLoading.value = true
        },
        onError: (ctx) => {
            toast(ctx.error.message)
        }
    })
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
                    <AuthSocialButton :loading="githubLoading" :on-click="githubSignIn" icon="i-logos-github-icon"
                        label="Github" />
                    <AuthSocialButton :loading="googleLoading" :on-click="googleSignIn" icon="i-logos-google-icon"
                        label="Google" />
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
                                <UxInput v-model="email" type="email" autocomplete="email" name="email" id="email"
                                    required />
                            </div>
                        </div>
                    </div>
                    <div id="ath-formFieldRow" box-border flex flex-row items-stretch justify-between gap-1rem>
                        <div id="ath-formField" box-border flex flex-col items-stretch justify-start relative flex-auto>
                            <div box-border flex flex-col items-stretch justify-start gap-0.5rem text=".8125rem"
                                class="line-height-[1.38462]">
                                <div id="ath-formFieldLabelRow" box-border flex flex-row items-center justify-between>
                                    <label id="ath-formFieldLabel" flex items-center text-foreground font-500
                                        for="password">
                                        Password
                                    </label>
                                </div>
                                <UxInput v-model='password' type="password" name="password" id="password" required />
                            </div>
                        </div>
                    </div>
                </div>
                <UxButton text="Continue" icon="i-bi-caret-right-fill" />
            </form>
        </div>
    </AuthCard>
</template>