// Clase11 setInterval y clearInterval, la primera inicia el intervalo y la segunda lo detiene.

let i = 0;
let intervalo = setInterval(function () {
    console.log('Hola ' + i);
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);
