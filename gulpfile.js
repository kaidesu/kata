var gulp = require('gulp');
var run = require('gulp-run');
var phpunit = require('gulp-phpunit');
var notify = require('gulp-notify');

gulp.task('test', function() {
    gulp.src('')
        .pipe(run('clear'))
        .pipe(phpunit('', {notify: false}))
        .on('error', notify.onError({
            title: "Code Kata",
            message: "Uh oh, your tests returned red."
        }))
        .pipe(notify({
            title: "Code Kata",
            message: "Yes! Your tests returned green!"
        }));
});

gulp.task('watch', function() {
    gulp.watch('**/*.php', ['test']);
});

gulp.task('default', ['test', 'watch']);
