const http = require ('http')

const server = http.createServer ( (peticion, respuesta)=>{
    //acciones
    respuesta.statusCode = 200
    
    console.log(peticion)
    respuesta.end('Hola Mundo')
} )


const port = 8080

const connectServer = server.listen(port, () => {
    console.log(`Servidor`)
})