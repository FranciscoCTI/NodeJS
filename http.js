const http = require('node:http')
const {findAvailablePort} = require('./availablePorts.js')

const server = http.createServer((req, res)=>{
    console.log('request received')
    res.end('Hola mundo');
})

findAvailablePort(80).then(port =>{
    server.listen(port, ()=>{
        console.log(`server listening on port http://localhost:${port}`)
    })
})