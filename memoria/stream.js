//se llama el paquete file system
const fs = require('fs');

// crear el stream

// let data = '';

// let readableStream = fs.createReadStream(__dirname + '/input.txt');

//  //se lee el stream, el cual toma la info del archivo input.txt
// readableStream.setEncoding('UTF8'); // se define el tipo de codigo, para este caso es texto y se usa el estandar UTF8
//  readableStream.on('data', function (chunk) {
//     data += chunk; //si el archivo solicitado es grande y viene por partes se añade a data parte por parte
// });

//ademas de saber que es grande el archivo, se necesita saber cuando termina

// readableStream.on('end', function() {
//     //aqui hacemos lo que deseamos con el archivo cuando ya se completo la traida.
//     console.log(data);
// });

//Ahora realizarmos escriturade un stream

process.stdout.write('Hola '); //.stdout es la salida estandar del sistema, y es un buffer
process.stdout.write('que ');
process.stdout.write('tal ');