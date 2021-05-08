//Funcion comportandose sincrona con Callback
function soyAsincrona(miCallback) {
    setTimeout(function() {
        console.log('Estoy siendo asíncrono');
        miCallback();
    }, 1000)
}

console.log('Iniciando proceso....')
soyAsincrona(function() {
    console.log('Terminando proceso....');
});
