
// .log recibe cualquier tipo y lo muestra en el consola.
console.log('algo');
// .info es equivalente a log pero es usado para informar.
console.info('algo');
// .error es equivalente a log pero es usado para errores.
console.error('Algo');
// .warn es equivalente a log pero es usado para warning.
console.warn('Algo');
// .table muestra una tabla a partir de un objeto.
var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Otra'
    }
]

console.log(tabla);
console.table(tabla);
// .group y groupEnd, ordena de manera legible en la consola los console.log
console.group('Conversacion');
console.log('Hola');
console.group('Bla');
console.log('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.groupEnd('Bla');
console.log('Adios');
console.groupEnd('Conversacion');
console.log('Otra cosa');

function funcion1() {
    console.group('funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto es de la funcion 1');
    funcion2();
    console.log('He vuelto a la funcion 1');
    console.groupEnd('funcion 1');
}

function funcion2() {
    console.group('Funcion 2');
    console.log('Ahora estamos en la funcion 2')
    console.groupEnd('Funcion 2');
}

console.log('Empezamos');
funcion1();

// .count inicia un contador autoincremental.

console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.countReset('Veces');
console.count('Veces');
console.count('Veces');