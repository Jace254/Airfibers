import { useSession } from "@/composables/useAuth"

export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server) return
    try {
        const session = useSession()

        if (session.value.error && !to.fullPath.includes("/auth")) {
            return navigateTo('/auth/sign-in')
        }

        if (session.value.data && to.fullPath.includes("/auth")) {
            return navigateTo('/')
        }
    } catch (e) {
        return navigateTo('/auth/sign-in')
    }
})                                                                         