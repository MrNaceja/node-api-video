import { fastify } from 'fastify'

const oServidor = fastify()

oServidor.get('/', () => {
    return 'Olá 👋'
})

oServidor.get('/teste', () => {
    return 'Hey isto é um teste!';
})

oServidor.listen({
    port: 3333
})