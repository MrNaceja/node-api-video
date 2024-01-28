import { randomUUID } from "node:crypto"

export class DatabaseInMemory {
    #oVideoManager = new Map()

    create = (oVideo) => {
        const id = randomUUID()
        this.#oVideoManager.set(id, oVideo)
        return id
    }

    read = (sSearchTerm = '') => {
        const aVideos = Array.from(this.#oVideoManager.entries()).map((aVideoInfo) => {
            const [ id, oVideo ] = aVideoInfo
            return { id, ...oVideo }
        })
        return sSearchTerm.length > 3 ? aVideos.filter(oVideo => oVideo.title.includes(sSearchTerm)) : aVideos
    }

    update = (id, oVideoUpdated) => {
        this.#oVideoManager.set(id, oVideoUpdated)
    }

    delete = (id) => {
        return this.#oVideoManager.delete(id)
    }
}