const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

fs.readdir(folder)
    .then(files => {
        files.forEach(file=>{
        const filePath = path.join(folder, file)
    })
})
.catch(err => {
    if(err){
        console.error('error al leer directorio: ' , err)
        return;
    }   
})