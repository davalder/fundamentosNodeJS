// se requiere el modulo os de NodeJS
const os = require('os');

// os.arch() solicita la arquitectura del sistema operativo
console.log(os.arch());

// os.platform() solicita la plataforma del sistema operativo
console.log(os.platform());

// os.cpus() solicita la informacion de la cpu
console.log(os.cpus());
console.log(os.cpus().length); //cantidad de nucleos

// os.cnstants solicita los errores y señales del sistema
console.log(os.constants);

// os.freemem() solicita la info de memoria libre

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE}
function mb(bytes) { return kb(bytes) / SIZE}
function gb(bytes) { return mb(bytes) / SIZE}

console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

// os.totalmem() solicita la info de memoria total
console.log(gb(os.totalmem()));

// os.homedir() solicita la info ruta delusuario
console.log(os.homedir());

// os.homedir() solicita la info ruta de temporales
console.log(os.tmpdir());

// os.hostname() solicita el nombre de la maquina
console.log(os.hostname());

// os.networkInterfaces() solicita todas las interfaces de red que estan activas
console.log(os.networkInterfaces());
