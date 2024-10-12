import { createAuthClient } from "better-auth/vue"

export const client = createAuthClient({
    baseURL: "http://localhost:4000",
})

export const {
    signIn,
    signOut,
    signUp,
    useSession,
    forgetPassword,
    resetPassword,
} = client;