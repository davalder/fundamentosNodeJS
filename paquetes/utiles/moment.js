const moment = require('moment');

let ahora = moment();

//fecha actual
console.log(ahora.toString());

//cambio de formato fecha y hora
console.log(ahora.format('YYYY/MM/DD - HH:mm'));