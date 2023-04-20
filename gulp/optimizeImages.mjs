import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import {stacksvg} from 'gulp-stacksvg';
import svgo from 'imagemin-svgo';

const sprite = () =>
  gulp
      .src('source/img/sprite/*.svg')
      .pipe(
          imagemin([
            svgo({
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
                {
                  name: 'removeRasterImages',
                  active: true,
                },
                {
                  name: 'removeUselessStrokeAndFill',
                  active: false,
                }],
            })]))
      .pipe(stacksvg())
      .pipe(gulp.dest('build/img'));

const optimizeSvg = () =>
  gulp
      .src('build/img/**/*.svg')
      .pipe(
          imagemin([
            svgo({
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
                {
                  name: 'removeRasterImages',
                  active: true,
                },
                {
                  name: 'removeUselessStrokeAndFill',
                  active: false,
                }],
            })]))
      .pipe(gulp.dest('build/img'));

/*
  Optional tasks
  ---------------------------------

  Используйте отличное от дефолтного значение root, если нужно обработать отдельную папку в img,
  а не все изображения в img во всех папках.

  root = '' - по дефолту webp добавляются и обновляются во всех папках в source/img/
  root = 'content/' - webp добавляются и обновляются только в source/img/content/
*/

const createWebp = () => {
  const root = '';
  return gulp
      .src(`source/img/${root}**/*.{png,jpg}`)
      .pipe(webp({quality: 75}))
      .pipe(gulp.dest(`source/img/${root}`));
};

export {sprite, createWebp, optimizeSvg};
