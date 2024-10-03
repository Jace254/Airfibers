import { Redis } from "@upstash/redis"

let redis: Redis;

export async function addToWaitlist(email: string): Promise<number> {
  const config = useRuntimeConfig()
  if (!redis)
    redis = new Redis({
      url: config.public.upstashRedisRestUrl!,
      token: config.public.upstashRedisRestToken!
    })

  console.log(config.public.upstashRedisRestToken)
  const key = "waitlist"

  const res = await redis
    .pipeline()
    .zadd(key, {
      score: Date.now(),
      member: email
    })
    .zcard(key)
    .exec()
  return res[1]
}