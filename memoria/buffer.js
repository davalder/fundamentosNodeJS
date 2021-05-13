// crear buffer
//let buffer = Buffer.alloc(4); // primer parametro es el tamaño del buffer, 1 un espacio, 4 cuatro espacios.
//let buffer = Buffer.from([1, 2, 5]); // array, cada item es un espacio, que aloja el dato escrito
let buffer = Buffer.from('Hola'); // string.


console.log(buffer.toString()); // se decodifica el string del buffer

console.log(buffer);

// Ejemplo colocar abcdareo en un buffer

let abc = Buffer.alloc(26); // 26 es el tamaño del buffer, la cantidad de letras de abcdareo
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97; // 97 es la letra a, 98 la b, 99 la c, asi hasta z
}

console.log(abc.toString()); // como la info del buffer se muestras hexagecimal, se debe pasar por toString para ser leida como letras.
