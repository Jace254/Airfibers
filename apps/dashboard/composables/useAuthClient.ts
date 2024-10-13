import { createAuthClient } from "better-auth/vue"


export default function useAuthClient() {
    const authClient = createAuthClient({
        baseURL: "http://localhost:4000",
    })

    return authClient
}