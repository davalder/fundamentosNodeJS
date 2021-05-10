// clase 14 try/catch. Captura del error de la funcion se rompe


// Captura del error en funcion ejecutada por otra funcion en sincrono
function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

// Captura de erro en funcion asincrona

function seRompeAsincrona(cb) {
    setTimeout(function() {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en mi funcion asincrona')
            cb(err);
        }        
    })
}

try{
    //otraFuncion();
    seRompeAsincrona(function(err) {
        console.log(err.message);
    });
} catch(err) {
    console.error('Vaya, also se ha roto')
    console.error(err.message);
    console.log('Pero no pasa nada, lo hemos capturado')
};

console.log('esto esta al final');
