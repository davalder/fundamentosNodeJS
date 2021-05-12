// Traer nuestro modulo
const modulo = require('./modulo');

// cuando el modulo envia un objeto
console.log(modulo);
console.log(modulo.prop1);
modulo.saludar();

// cuando el modulo envia una funcion
//modulo();