const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res)=>{

    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if(req.url== '/')
    {
        res.statusCode = 200
        res.end('<p>Bienvenido a <strong>mi</strong> página web</p>') 
    }else if(req.url == '/contacto')
    {
        res.statusCode = 200;
        res.end('<h1>Contacto</h1><br><h3>El contacto es una persona</h3>')
    }else if(req.url == '/mapa')
    {
        res.statusCode = 200;
        res.end('<h1>Este es el mapa, lo ves?</h3>')
    }
    else if(req.url == '/miImagen')
    {
        fs.readFile('./tata.png', (err, data)=>
            {
                if(err)
                {
                    res.statusCode = 500
                    res.end('<h1>500 internal server error</h1>')
                }else
                {
                    res.setHeader('Content-Type','image/png')
                    res.end(data)
                }
            })
    }
    else
    {
        res.statusCode = 404
        res.end('<h4>Error 404, Pato</h4>')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, ()=>{
    console.log(`server listening on port http://localhost:${desiredPort}`)
})