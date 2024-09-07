import Fastify from 'fastify'
import Redis from 'ioredis'
import cors from '@fastify/cors'
import { getUserLayout, setUserLayout } from './utils'

const fastify = Fastify({ logger: true })
const redis = new Redis({
    host: 'redis', // Connect to Redis container
    port: 6379,
})

redis.on('error', (err) => {
    fastify.log.error('Redis error: ', err)
})

fastify.get('/ping', async (request, reply) => {
    return { message: 'pong' }
})

fastify.get('/layout', async (request: any, reply) => {
    try {
        const { userId } = request.query
        const layoutId = await getUserLayout({ redis, userId })
        await setUserLayout({ redis, userId, layoutId })
        return {
            layoutId,
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            reply.status(500).send({ error: err.message })
        } else {
            fastify.log.error('Error', err)
        }
    }
})

const start = async () => {
    try {
        await fastify.register(cors, {
            origin: true,
        })
        await fastify.listen({ port: 3000, host: '0.0.0.0' })
        fastify.log.info('Server listening on port 3000')
    } catch (err: any) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
