import fastify from 'fastify'

import handleListVideos from './handlers/handleListVideos.js';
import handleCreateVideo from './handlers/handleCreateVideo.js';
import handleUpdateVideo from './handlers/handleUpdateVideo.js';
import handleDeleteVideo from './handlers/handleDeleteVideo.js';

const oServer = fastify() 

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

