import { randomUUID } from "node:crypto"
import oSql from '../libs/dbPostgres.js'

export class DatabaseInPostgres {

    create = async (oVideo) => {
        const id = randomUUID()
        await oSql`
            INSERT INTO tbvideos (vidid, vidtitle, viddescription, vidduration) VALUES (
                ${id}, ${oVideo.title}, ${oVideo.description}, ${oVideo.duration}
            )
        `
        return id
    }

    read = async (sSearchTerm = '') => {
        const aVideos = await (
            sSearchTerm.length > 3 
            ? oSql`SELECT * FROM tbvideos WHERE vidtitle ILIKE ${'%' + sSearchTerm + '%'}`
            : oSql`SELECT * FROM tbvideos`
        )
        return aVideos
    }

    update = async (id, oVideoUpdated) => {
        const { title, description, duration } = oVideoUpdated
        await oSql`
            UPDATE tbvideos 
            SET vidtitle = ${title}, viddescription = ${description}, vidduration = ${duration}
            WHERE vidid = ${id}
        `
    }

    delete = async (id) => {
        await oSql`
            DELETE FROM tbvideos WHERE vidid = ${id}
        `
        return true;
    }
}