/**
 * Resgata o Video presente no corpo da requisição.
 * 
 * @param {Object} oReq 
 * @returns {Object}
 */
const getVideoOnRequest = (oReq) => {
    const { title, description, duration } = oReq.body
    const oVideo = {
        title, description, duration
    }
    return oVideo
}

export default getVideoOnRequest