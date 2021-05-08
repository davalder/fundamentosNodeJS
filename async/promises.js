//Promesas, cuando ocurre un error en una promesa con reject y catch
function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log('bla bla bla');
            //resolve();
            reject('Hay un error')
        }, 1000)
    });
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);
    });
}

// --

console.log('Iniciando el proceso...');
hola('Diego')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.log('Ha habido un error:');
        console.log(error);
    })