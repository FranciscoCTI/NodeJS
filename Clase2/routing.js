const http = require('node:http')

const dittoJson = require('./pokemon-ditto.json')

const processRequest = (req, res) => 
    {
        const {method, url} = req
        switch(method)
        {
            case 'GET':
                switch (url)
                {
                    case '/pokemon-ditto':
                        res.setHeader('Content-Type', 'application/json; charset=utf-8')
                        return res.end(JSON.stringify(dittoJson))
                    default:
                        res.statusCode = 404
                        res.setHeader('Content-Type', 'text/html; charset=utf-8')
                        return res.end('<h1>404 no está ditto</h1>')
                }

            case 'POST':
                switch (url){
                    case '/pokemon':{
                        const body =''
                        break
                    }
                    default:{
                        res.statusCode = 404
                        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                        return res.end('404 Not Found')
                    }
                        
            }
    }
}

const server = http.createServer(processRequest)

server.listen(1234, ()=>
    {
        console.log('Server listening on port http;//localhost:1234')

    }
)