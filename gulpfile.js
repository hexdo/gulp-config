/**
 * Created by jiangtao on 3/30/16.
 */
var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var minifyCSS = require('gulp-minify-css');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var LessPluginCleanCSS = require('less-plugin-clean-css');

var cleancss = new LessPluginCleanCSS({advanced: true});
var autoprefix = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});
var fileRules = {
  less: './src/less/**/*.less',
  css: './src/css'
};

gulp.task('less', function (){
  gulp.src(fileRules.less)
    .pipe(less({
      paths: [path.join(__dirname, 'src/less', 'includes')],
      plugins: [autoprefix, cleancss]
    }))
    .pipe(minifyCSS())
    .pipe(watch(fileRules.less))  // watch files

    .pipe(gulp.dest(fileRules.css));
});
