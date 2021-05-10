// Clase 12Traer modulo a node, en este caso File system
const fs = require('fs');

//Leer el archivo externo utilizando File system

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

leer(__dirname + '/archivo.txt', console.log);

// crear y escribir en un archivo nuevo

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.log('No se logro escribir', err);
        } else {
            console.log('se logro escribir');
        }
    });
}

escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log)