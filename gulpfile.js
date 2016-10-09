let gulp = require('gulp')
let gls = require('gulp-live-server')
let browserify = require('browserify')
let source = require('vinyl-source-stream')
let del = require('del')

gulp.task('clean', [], () => del('./dist/**/*.*'));

gulp.task('build', ['clean', 'build-other-files'], () => {
    let b = browserify();

    return b.add('./src/app.module.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'))
})

gulp.task('build-other-files', ['clean'], () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('serve', [], () => {
    var server = gls.static('./dist', 3000); //equals to gls.static('public', 3000);
    server.start();
});

gulp.task('watch', ['build'], () => {
    gulp.watch(['./src/**/*.*'], ['build']);
});

gulp.task('default', ['build']);
