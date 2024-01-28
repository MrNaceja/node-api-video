import { DatabaseInMemory } from "./DatabaseInMemory.js"
import { DatabaseInPostgres } from "./DatabaseInPostgres.js"

export class Database {
    static #instance = null
    static handler   = null

    constructor () {
        if (!Database.#instance) {
            Database.#instance = this
            Database.#instance.handler = new DatabaseInPostgres()
        }
        return Database.#instance
    }

    getHandler() {
        return Database.#instance.handler
    }
}