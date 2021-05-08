function soyAsincrona() {
    setTimeout(function() {
        console.log('Estoy siendo asíncrono')
    }, 1000)
}

console.log('Iniciando proceso....')
soyAsincrona();
console.log('Terminando proceso....')