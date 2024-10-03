export async function addToWaitlist(email: string): Promise<number> {
  try {
    const response = await $fetch('/api/waitlist', {
      method: 'POST',
      body: { email }
    })

    return response as number
  } catch (e) {
    throw e
  }
}