// crear buffer
//let buffer = Buffer.alloc(4); // primer parametro es el tamaño del buffer, 1 un espacio, 4 cuatro espacios.
let buffer = Buffer.from([1, 2, 5]); // array, cada item es un espacio, que aloja el dato escrito
console.log(buffer);