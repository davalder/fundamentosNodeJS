// realmente no es necesario requerir process, ya que process esta en global
//const p = require('process');

const p = process;

p.on('beforeExit', () => {
    console.log('Diego, el proceso va a terminar');
});

p.on('exit', () => {
    console.log('Diego, el proceso acabó');
});

