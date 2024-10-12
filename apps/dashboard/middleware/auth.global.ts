import { useSession } from "@/composables/useAuth"

export default defineNuxtRouteMiddleware((to, from) => {
    const session = useSession()


    if (session.value.error && !to.fullPath.includes("/auth")) {
        return navigateTo('/auth/sign-in')
    }

    if (session.value.data && to.fullPath.includes("/auth")) {
        return navigateTo('/')
    }

})                                                                         