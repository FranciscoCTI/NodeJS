const fs = require('node:fs/promises')
const { text } = require('stream/consumers')

console.log('leyendo primer archivo...')
fs.readFile('../cuento.txt', 'utf-8').then(text => {console.log('primer texto:', text)})

console.log('hacer cosas mientras lee el archivo...')

console.log('leyendo segundo archivo..')
fs.readFile('../escritores.txt', 'utf-8').then(text => {console.log(text)})