const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch (err) {
        console.error('No se pudo leer el directorio')
        process.exit(1)
    }


    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let fileStats
        try {
            fileStats = await fs.stat(filePath)
        } catch (error) {
            console.error(error)
            process.exit(1)
        }
        const isDirectory = fileStats.isDirectory()
        const filType = isDirectory ? 'd' : '-'
        const fileSize = fileStats.size()
        const fileModified = fileStats.mtime.toLocaleString()

        return `${filType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })

    const filesInfo = Promise.all(filePromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)