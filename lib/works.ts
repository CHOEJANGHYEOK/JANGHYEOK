import fs from 'fs'
import path from 'path'
import { QuantCash } from '../works/QuantCash'

const worksDirectory = path.join(process.cwd(), 'works')

export const getAllWorkIds = () => {
    const fileNames = fs.readdirSync(worksDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.ts$/, '')
            }
        }
    })
}

export const getWorkData = (id: string) => {
    const fullPath = path.join(worksDirectory, `${id}.ts`)
    const fileContents = QuantCash

    return {
        id,
        ...fileContents,
    }
}