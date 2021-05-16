const gulp = require('gulp');
const server = require('gulp-server-livereload');


// se contruye tarea para inicar con gulp, usando el script build, creado en package.json
gulp.task('build', function(cb) {
    console.log('Construyendo el sitio');
    setTimeout(cb, 1200);
});


//para crear servidor // tenemos problemas por a version de node, debe ser menor a la 14
gulp.task('serve', function(cb) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }));
})