// se trae parte de la libreria child_process
const { exec } = require('child_process'); // ó const exec = require('child_process').exec;

//consultar el directorio, en linux se usa 'ls -la' y en window 'dir'
// exec('ls -la', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// })

// ejecutar un proceso que esta en otro archivo, ejemplo la clase consola.

exec('node modulos/consola.js', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
})