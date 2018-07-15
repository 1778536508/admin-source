//加载gulp模块
var gulp = require('gulp');
//加载browser-sync模块
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;



/**
 * 这里静态服务器 + 监听 scss/pug/js 文件
 */
gulp.task('server', function() {
    browserSync.init({
        server: './', //这里指的是根目录，如果你的index.html在根目录下，会直接打开index页面，不然会显示Get Not，自己写路径就行
        port: 8081 //默认打开localhost:3000,现在改成localhost:8081
    });

    gulp.watch('./js/**/*.js').on('change', reload);
    gulp.watch('./css/**/*.css').on('change', reload);
    gulp.watch('./*.html').on('change', reload);
});

gulp.task('default', ['server']);