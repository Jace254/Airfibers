export default defineNuxtRouteMiddleware(async (to, from) => {
    if (import.meta.server) return
    const { session: getSession } = useAuthClient()
    const session = await getSession()

    if (session.error && !to.fullPath.includes("/auth")) {
        return navigateTo('/auth/sign-in')
    }

    if (session.data && to.fullPath.includes("/auth")) {
        return navigateTo('/')
    }
})                                                                         