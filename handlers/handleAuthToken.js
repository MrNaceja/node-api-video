import { constants as HttpStatus } from 'node:http2'
import { Auth } from '../services/auth.js'

export default function handleAuthToken(oReq, oRes, oDone) {
    if (oReq.url != '/apikey') {
        //valida o token...
        const sToken = oReq.headers.authorization?.replace('Bearer ', '').trim()
        if (!sToken) {
            return oRes.status(HttpStatus.HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION).send('Oops, você não enviou a autorização por chave de API')
        }
        if (sToken) {
            const isAuthenticated = (new Auth()).verifyApiKey(sToken)
            if (!isAuthenticated) {
                return oRes.status(HttpStatus.HTTP_STATUS_UNAUTHORIZED).send('Oops, está chave de API não é válida.')
            }
        }
    }
    oDone()
}