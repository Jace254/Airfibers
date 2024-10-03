import { Redis } from '@upstash/redis'

let redis: Redis

export default defineLazyEventHandler(async () => {
    const config = useRuntimeConfig()

    if (!redis) {
        redis = new Redis({
            url: config.upstashRedisRestUrl,
            token: config.upstashRedisRestToken,
        })
    }

    return defineEventHandler(async (event) => {
        // Extract the `email` from the body of the request
        const { email } = (await readBody(event)) as {
            email: string
        }

        const key = "waitlist"
        const res = await redis
            .pipeline()
            .zadd(key, {
                score: Date.now(),
                member: email,
            })
            .zcard(key)
            .exec();

        console.log(res)
        return res[1] as number
    })
})