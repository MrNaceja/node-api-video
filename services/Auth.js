import jwt from 'jsonwebtoken'

export class Auth {
    
    genereateApiKey = () => {
        const token = jwt.sign('CHAVE API', process.env.JWT_SECRET)
        return token
    }

    verifyApiKey = (sToken) => {
       try {
            jwt.verify(sToken, process.env.JWT_SECRET)
            return true
       }
       catch (erro) {
            return false
       }
    }
}