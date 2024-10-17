<script setup lang="ts">
import { toast } from 'vue-sonner';

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const githubLoading = ref(false)
const googleLoading = ref(false)


const { signIn } = useAuthClient()
const githubSignUp = async () => {
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
const googleSignUp = async () => {
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
    <AuthCard action-description="Already have an account?" action-text="Sign in" action-url="/auth/sign-in"
        header-title="Create your account" header-sub-title="Welcome! Please fill in the details to get started.">
        <div id="ath-main" class="box-border flex flex-col items-stretch justify-start gap-[1.5rem]">
            <div class="box-border flex flex-col items-stretch justify-start gap-[.5rem]">
                <div id="ath-socialButtons"
                    class="box-border grid items-stretch gap-[.5rem] justify-center grid-cols-[repeat(2,1fr)]">
                    <AuthSocialButton :loading="githubLoading" :on-click="githubSignUp" icon="i-logos-github-icon"
                        label="Github" />
                    <AuthSocialButton :loading="googleLoading" :on-click="googleSignUp" icon="i-logos-google-icon"
                        label="Google" />
                </div>
            </div>
            <div id="ath-dividerRow" box-border flex flex-row items-center justify-center>
                <div class="box-border flex flex-row items-stretch justify-start flex-1 h-1px bg-border" />
                <p class="box-border text-[.8125rem] font-400 line-height-[1.38462] text-faded mx-1rem">or</p>
                <div class="box-border flex flex-row items-stretch justify-start flex-1 h-1px bg-border" />
            </div>
            <form box-border flex flex-col items-stretch justify-start gap-2rem>
                <div box-border flex flex-col items-stretch justify-start gap-1.5rem>
                    <div id="ath-formFieldRow" box-border flex flex-row items-stretch justify-between gap-1rem>
                        <div id="ath-formField" box-border flex flex-col items-stretch justify-start relative flex-auto>
                            <div box-border flex flex-col items-stretch justify-start gap-0.5rem text=".8125rem"
                                class="line-height-[1.38462]">
                                <div id="ath-formFieldLabelRow" box-border flex flex-row items-center justify-between>
                                    <label id="ath-formFieldLabel" flex items-center text-foreground font-500
                                        for="firstName">
                                        First name
                                    </label>
                                </div>
                                <UxInput v-model='firstName' type="text" autocomplete="firstName" name="firstName"
                                    required id="firstName" />
                            </div>
                        </div>
                        <div id="ath-formField" box-border flex flex-col items-stretch justify-start relative flex-auto>
                            <div box-border flex flex-col items-stretch justify-start gap-0.5rem text=".8125rem"
                                class="line-height-[1.38462]">
                                <div id="ath-formFieldLabelRow" box-border flex flex-row items-center justify-between>
                                    <label id="ath-formFieldLabel" flex items-center text-foreground font-500
                                        for="lastName">
                                        Last name
                                    </label>
                                </div>
                                <UxInput v-model='lastName' type="text" autocomplete="lastName" name="lastName" required
                                    id="lastName" />
                            </div>
                        </div>
                    </div>
                    <div id="ath-formFieldRow" box-border flex flex-row items-stretch justify-between gap-1rem>
                        <div id="ath-formField" box-border flex flex-col items-stretch justify-start relative flex-auto>
                            <div box-border flex flex-col items-stretch justify-start gap-0.5rem text=".8125rem"
                                class="line-height-[1.38462]">
                                <div id="ath-formFieldLabelRow" box-border flex flex-row items-center justify-between>
                                    <label id="ath-formFieldLabel" flex items-center text-foreground font-500
                                        for="email">
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