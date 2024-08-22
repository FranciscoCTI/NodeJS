const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls (folder){
    let files
    try
    {
        files = await fs.readdir(folder)
    }
    catch
    {
        console.error('no se pudo leer el directorio ${folder}')
        process.exit(1)
    }

    const filesPromises = files.map(async file=>{
        const filePath = path.join(folder, file)
        let stats
        try{
            stats = await fs.stat(filePath)
        }catch
        {
            console.error('no se pudo leer archivo desde ${filepath}')
            process.exit(1)
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'fi'
        const filesize = stats.size
        const fileModified = stats.mtime.toLocaleDateString()

        //return '${fileType} ${file} ${filesize.toString()} ${fileModified}';
        return fileType + ' ' + file + ' ' + filesize.toString() + ' ' + fileModified;
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(fileInfo=> console.log(fileInfo))
}

ls(folder)
