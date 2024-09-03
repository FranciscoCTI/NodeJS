const fs = require('node:fs')

console.log('leyendo primer archivo...')

fs.readFile('../cuento.txt', 'utf-8', (err, text) => {console.log(text)})

console.log('hacer cosas mientras lee el archivo...')

console.log('leyendo segundo archivo..')

fs.readFile('../escritores.txt', 'utf-8', (err, text) => {console.log(text)})