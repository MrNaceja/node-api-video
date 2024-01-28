import { constants as HttpStatus } from 'node:http2'
import getVideoOnRequest from '../utils/scripts/getVideoOnRequest.js'
import { Database } from '../database/Database.js'

const oBD = new Database().getHandler()

export default async function handleCreateVideo(oReq, oRes) {
    const oVideoToCreate = getVideoOnRequest(oReq)
    const sIdVideoCreated = await oBD.create(oVideoToCreate)
    return oRes.status(HttpStatus.HTTP_STATUS_CREATED).send(`O video foi criado! ID: ${sIdVideoCreated}`)
}