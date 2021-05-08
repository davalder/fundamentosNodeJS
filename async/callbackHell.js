//Funciones en configuracion para un callbackHell
function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000)
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('bla bla bla');
        callbackHablar();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

// CallbackHell

console.log('Iniciando proceso....')
hola('Diego', function(nombre) {
    hablar(function () {
        hablar(function () {
            hablar(function () {
                adios(nombre, function() {
                    console.log('Terminando proceso....');
                });
            });
        });
    });
});
