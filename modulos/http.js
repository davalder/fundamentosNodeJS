// se requiere el modulo http.
const http = require('http');

//se crea un servidor
http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    switch(req.url) {
        case '/hola':
            res.write('Hola que tal');
            res.end();
            break;

        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' })

    // //escribir respuesta al usuario
    // res.write('hola, ya se usar HTTP de nodeJS');

    // res.end();
}

console.log('Escuchando http en el puerto 3000')