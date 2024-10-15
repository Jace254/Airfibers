import { createAuthClient } from "better-auth/vue"


export default function useAuthClient() {
    const config = useRuntimeConfig()

    console.log(config)
    const authClient = createAuthClient({
        baseURL: `${config.public.gatewayBaseUrl}/user-management/api/auth`,
    })

    return authClient
}