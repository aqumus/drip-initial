// TODO pass provider interface instead of directly relying on redis
export async function getUserLayout({ redis, userId }) {
    const data = await redis.get(userId)
    if (!data) {
        return '1'
    }
    const { layoutId } = JSON.parse(data)
    const nextLayoutId = getNextLayoutId(layoutId)
    return nextLayoutId
}

export async function setUserLayout({ redis, userId, layoutId }) {
    await redis.set(userId, JSON.stringify({ layoutId }))
}

const MAX_LAYOUT = 3

function getNextLayoutId(prevLayout) {
    if (Number(prevLayout) === MAX_LAYOUT) {
        return '1'
    }
    return `${Number(prevLayout) + 1}`
}
