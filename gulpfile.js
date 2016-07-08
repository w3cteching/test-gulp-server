var gulp = require('gulp'),
    connect = require('gulp-connect');
 
/*gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 9999
    });
});


gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);

 
gulp.task('default', ['webserver']);*/

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
	port:8888
  });
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});
 
gulp.task('default', ['connect','watch']);