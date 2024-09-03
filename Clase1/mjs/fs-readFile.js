const fs = require('node:fs')

console.log('leyendo primer archivo...')
const textoCuento = fs.readFileSync('../cuento.txt', 'utf-8')

console.log(textoCuento)

console.log('leyendo segundo archivo...')
const textoEscritores = fs.readFileSync('../escritores.txt', 'utf-8')

console.log(textoEscritores)