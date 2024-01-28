import { constants as HttpStatus } from 'node:http2'
import { Database } from '../database/Database.js'

const oBD = new Database().getHandler()

export default function handleDeleteVideo(oReq, oRes) {
    const { id } = oReq.params
    const deleted = oBD.delete(id)
    // return oRes.status(HttpStatus.HTTP_STATUS_OK).send(`${deleted ? 'O video foi deletado com sucesso 🥳' : 'Oops, não foi possível deletar o video 😭'}`)
    return oRes.status(HttpStatus.HTTP_STATUS_NO_CONTENT).send()
}