const sharp = require('sharp');


//Cambio de tamaño de imagen con sharp
sharp('./original.png')
    .resize(80)
    .toFile('resized.png')