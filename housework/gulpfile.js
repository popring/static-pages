'use strict';

const { src, dest, series, parallel } = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();     // 用来打开一个浏览器

const htmlPath = 'src/**/*.html';
const css_libs_path = 'dist/css/**/*.css';
var sass_libs_path = 'src/css/**/*.scss';
const jsLibPath = 'src/js/**/*.js';
const assetsPath = 'src/assets/**/*';

// 格式化html
function html() {
  return src(htmlPath)
    .pipe(dest('dist'));
};

// 清空dist文件夹
function clean(cb) {
  return del(['dist'], cb);
}

// 处理sass 文件
function sassFile(cb) {
  return src(sass_libs_path)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'))
}

// 格式化css 文件
function minifyCSS() {
  return src(css_libs_path)
    .pipe(cleanCss({ format: 'beautify' }))
    .pipe(dest('dist/css'))
}

// 压缩js
function uglifyJS() {
  return src('src/js/**/*.js')
    .pipe(dest('dist/js'));
}

function moveAssetsFile() {
  return src(assetsPath)
  .pipe(dest('dist/assets'));
}

function browser() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  w(htmlPath, html);
  w(sass_libs_path, sassFile);
  w(jsLibPath, uglifyJS);
  w(assetsPath, moveAssetsFile);

  function w(path, task) {
    browserSync.watch(path, function (event, file) {
      task();
      browserSync.reload();
    });
  }
}

exports.html = html;
exports.clean = clean;
exports.minifyCSS = series(clean, series(sassFile, minifyCSS))
exports.uglifyJS = uglifyJS;
exports.browser = browser;
exports.build = series(
  clean,
  html,
  sassFile,
  minifyCSS,
  uglifyJS,
  moveAssetsFile
);

exports.default = series(
  clean,
  parallel(
    html,
    series(sassFile, minifyCSS),
    uglifyJS
  ),
  browser,
);