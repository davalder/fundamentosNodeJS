//se llama el paquete file system
const fs = require('fs');

// crear el stream

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

 //se lee el stream, el cual toma la info del archivo input.txt
readableStream.setEncoding('UTF8'); // se define el tipo de codigo, para este caso es texto y se usa el estandar UTF8
 readableStream.on('data', function (chunk) {
    console.log(chunk);
})