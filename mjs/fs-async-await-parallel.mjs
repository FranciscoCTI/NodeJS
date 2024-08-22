import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('../cuento.txt', 'utf-8'),
    readFile('../escritores.txt', 'utf-8')
]).then(([text, secondText])=>{
            console.log('primer texto:', text)
            console.log('segundoTexto:', secondText)
})
