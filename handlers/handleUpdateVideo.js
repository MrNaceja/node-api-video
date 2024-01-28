import { constants as HttpStatus } from 'node:http2'
import getVideoOnRequest from '../utils/scripts/getVideoOnRequest.js'
import { Database } from '../database/Database.js'

const oBD = new Database().getHandler()

export default function handleUpdateVideo(oReq, oRes) {
    const oVideoToUpdate = getVideoOnRequest(oReq)
    const { id } = oReq.params
    oBD.update(id, oVideoToUpdate)
    // return oRes.status(HttpStatus.HTTP_STATUS_OK).send('Video atualizado com sucesso 🥳')
    return oRes.status(HttpStatus.HTTP_STATUS_NO_CONTENT).send()
}