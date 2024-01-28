import { fastify } from 'fastify'
import { DatabaseInMemory } from './database/DatabaseInMemory.js';
import { constants as HttpStatus } from 'node:http2'

const oServer = fastify()
const oBD     = new DatabaseInMemory()

// C reate - Criação de um video:
oServer.post('/videos', (oReq, oRes) => {
    const oVideoToCreate = getVideoOnRequest(oReq)
    const sIdVideoCreated = oBD.create(oVideoToCreate)
    return oRes.status(HttpStatus.HTTP_STATUS_CREATED).send(`O video foi criado! ID: ${sIdVideoCreated}`)
})

// R ead - Listagem de videos:
oServer.get('/videos', (oReq, oRes) => {
    const { searchTerm: sSearchTerm } = oReq.query
    const aVideos = oBD.read(sSearchTerm)
    return oRes.status(HttpStatus.HTTP_STATUS_OK).send(aVideos)
})

// U pdate - Atualização de um video:
oServer.put('/videos/:id', (oReq, oRes) => {
    const oVideoToUpdate = getVideoOnRequest(oReq)
    const { id } = oReq.params
    oBD.update(id, oVideoToUpdate)
    // return oRes.status(HttpStatus.HTTP_STATUS_OK).send('Video atualizado com sucesso 🥳')
    return oRes.status(HttpStatus.HTTP_STATUS_NO_CONTENT).send()
})

// D elete - Exclusão de um video:
oServer.delete('/videos/:id',  (oReq, oRes) => {
    const { id } = oReq.params
    const deleted = oBD.delete(id)
    // return oRes.status(HttpStatus.HTTP_STATUS_OK).send(`${deleted ? 'O video foi deletado com sucesso 🥳' : 'Oops, não foi possível deletar o video 😭'}`)
    return oRes.status(HttpStatus.HTTP_STATUS_NO_CONTENT).send()
})

oServer.listen({
    port: 3333
}, () => {
    console.log('O Servidor está no ar 🚀')
})

const getVideoOnRequest = (oReq) => {
    const { title, description, duration } = oReq.body
    const oVideo = {
        title, description, duration
    }
    return oVideo
}