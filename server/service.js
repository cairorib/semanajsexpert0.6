import fs from 'fs'
import config from './config.js'
import { join, extname } from 'path'
import fsPromises  from 'fs/promises'
 
const {
    dir: {
        publicDirectory
    },
} = config

export class Service {
    createFileStream(filename){
        return fs.createReadStream(filename)
    }

    async getFileInfo(file){
        //file = home.index.html
        const fullFilePath = join(publicDirectory, file)
        // valida se existe, senao err
        await fsPromises.access(fullFilePath)
        const fileType = extname(fullFilePath)
        return {
            type: fileType,
            name: fullFilePath
        }
    }

    async getFileStream(fileName){
        const {
            name,
            type
        } = await this.getFileInfo(fileName)
        return{
            stream: this.createFileStream(name),
            type
        }
    }
}