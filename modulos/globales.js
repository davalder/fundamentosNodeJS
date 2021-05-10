// Clase11 setInterval y clearInterval, la primera inicia el intervalo y la segunda lo detiene.

let i = 0;
let intervalo = setInterval(function () {
    console.log('Hola ' + i);
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);

// setImmediate, ejecuta el codigo de inmediato

setImmediate(function() {
    console.log('Hola inmediato');
});

// require, con este comando se solicitan modulos que se necesiten

require()

// Crear Variables globales

globalThis.miVariable = 'elValor';

console.log(miVariable);