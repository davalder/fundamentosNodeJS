const gulp = require('gulp');


// se contruye tarea para inicar con gulp, usando el script build, creado en package.json
gulp.task('build', function(cb) {
    console.log('Construyendo el sitio');
    setTimeout(cb, 1200);
})