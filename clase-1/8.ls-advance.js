const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (err) {
    console.error(pc.red('No se pudo leer el directorio'))
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
    const fileSize = fileStats.size.toString()
    const fileModified = fileStats.mtime.toLocaleString()

    return `${filType} ${pc.bgBlue(file.padEnd(20))} ${pc.bgGreen(fileSize).padStart(10)} ${pc.bgYellow(fileModified)}`
  })

  const filesInfo = await Promise.all(filePromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)
