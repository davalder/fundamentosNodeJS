// realmente no es necesario requerir process, ya que process esta en global
//const p = require('process');

const p = process;

p.on('beforeExit', () => {
    console.log('Diego, el proceso va a terminar');
});

p.on('exit', () => {
    console.log('Diego, el proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver');
    }, 0)
});

setTimeout(() => {
        console.log('Esto si se va a ver');
    }, 0);

// excepciones que no se han capturado
p.on('uncaughtException', (err, origen) => {
    console.error('Se nos olvido capturar el error');
    //console.error(err);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
} )

funcionquenoexiste();

//Promesas que se han rechazado


