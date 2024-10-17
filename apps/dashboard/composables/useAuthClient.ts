import { createAuthClient } from "better-auth/vue"


export default function useAuthClient() {
    const config = useRuntimeConfig()
    const authClient = createAuthClient({
        baseURL: `${config.public.gatewayBaseUrl}/user-management/api/auth`,
    })

    return authClient
}