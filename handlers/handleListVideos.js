import { constants as HttpStatus } from 'node:http2'
import { Database } from '../database/Database.js'

const oBD = new Database().getHandler()

export default async function handleListVideos(oReq, oRes) {
    const { searchTerm: sSearchTerm } = oReq.query
    const aVideos = await oBD.read(sSearchTerm)
    return oRes.status(HttpStatus.HTTP_STATUS_OK).send(aVideos)
}