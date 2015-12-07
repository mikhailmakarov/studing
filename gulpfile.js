var gulp = require("gulp"),
	connect = require("gulp-connect"),
	opn = require("opn");

// Запускаем локальный сервер
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 888
  });
  opn('http://localhost:888');
});

// Работа с HTML
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// Работа с CSS
gulp.task('css', function () {
  gulp.src('./app/*.css')
    .pipe(connect.reload());
});

// Работа с JS
gulp.task('js', function () {
  gulp.src('./app/*.js')
    .pipe(connect.reload());
});

// Слежка
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/*.css'], ['css']);
  gulp.watch(['./app/*.js'], ['js']);
});

// Задача по умолчанию
gulp.task('default', ['connect', 'watch']);