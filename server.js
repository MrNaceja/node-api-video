import fastify from 'fastify'
import { constants as HttpStatus } from 'node:http2'

import handleListVideos  from './handlers/handleListVideos.js';
import handleCreateVideo from './handlers/handleCreateVideo.js';
import handleUpdateVideo from './handlers/handleUpdateVideo.js';
import handleDeleteVideo from './handlers/handleDeleteVideo.js';
import handleAuthToken   from './handlers/handleAuthToken.js';

import { Auth } from './services/auth.js';

const oServer = fastify() 

// Gera a API KEY
oServer.get('/apikey', (oReq, oRes) => {
    const apiKey = new Auth().genereateApiKey()
    return oRes.status(HttpStatus.HTTP_STATUS_CREATED).send(apiKey)
})
// Definição de um middleware de autenticação das rotas.
oServer.addHook('preHandler', handleAuthToken)

// C reate - Criação de um video:
oServer.post('/videos', handleCreateVideo)
// R ead - Listagem de videos:
oServer.get('/videos', handleListVideos)
// U pdate - Atualização de um video:
oServer.put('/videos/:id', handleUpdateVideo)
// D elete - Exclusão de um video:
oServer.delete('/videos/:id', handleDeleteVideo)

oServer.listen({
    port: 3333
}, () => {
    console.log('O Servidor está no ar 🚀')
})

