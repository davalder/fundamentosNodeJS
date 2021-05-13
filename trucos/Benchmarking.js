console.time('todo');
let suma = 0;

// medir cuanto tarda en ejecutarce una funcion con console.time()
console.time('bucle');

for (let i = 0; i < 1000000000; i++) {
    suma += 1;
}

console.timeEnd('bucle');

console.time('bucle2');
let suma2 = 0;
for (let j = 0; j < 100000000; j++) {
    suma2 += 1;
}

console.timeEnd('bucle2');
console.timeEnd('todo');