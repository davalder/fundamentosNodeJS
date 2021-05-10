// clase 14 try/catch. Captura del error de la funcion se rompe
function serompe() {
    return 3 + z;
}

try{
    serompe();
} catch(err) {
    console.error('Vaya, also se ha roto')
    console.error(err.message);
    console.log('Pero no pasa nada, lo hemos capturado')
};

console.log('esto esta al final');
