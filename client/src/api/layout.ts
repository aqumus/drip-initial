const BASE_API_URL = 'http://localhost:3000'

export async function getLayout(userId: string) {
    const res = await fetch(`${BASE_API_URL}/layout?userId=${userId}`)
    return res.json()
}
