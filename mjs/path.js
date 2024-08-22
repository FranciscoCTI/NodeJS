const path = require('node:path')

console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('perro', 'gato', 'equidna', 'archivo.txt')
console.log(filePath)

//file name
const base = path.basename('/tmp/franciscoContreras/trabajo/projectos/edificio.txt')
console.log(base)

//just the fileName, without extension
const fileName = path.basename('/tmp/franciscoContreras/trabajo/projectos/edificio.txt', '.txt')
console.log(fileName)

//Just the extension
const ext = path.extname('my.super.image.png')
console.log(ext)