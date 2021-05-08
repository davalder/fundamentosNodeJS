//async await
async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log('bla bla bla');
            resolve();
            reject('Hay un error')
        }, 1000)
    });
}

async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);
    });
}

async function main() {
    let nombre = await hola('Diego');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

main()
