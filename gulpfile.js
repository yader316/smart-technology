const gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');
  // concat = require('gulp-concat')
  // uglify = require('gulp-uglify')

gulp.task('pug', () => 
  gulp.src('./dev/*.pug')
    .pipe(pug({
      pretty:true
    }))
    .pipe(gulp.dest('./public/'))
);

gulp.task('sass', () => 
    gulp.src('./dev/scss/**/*.scss')
      .pipe(sass({
        outputStyle:'expanded',
        sourceComments: true
      }))
      .pipe(autoprefixer({
        versions: ['last 2 browsers']
      }))
      .pipe(gulp.dest('./public/css'))
);

gulp.task('default', () => {
    gulp.watch('./dev/**/*.pug',gulp.series('pug'));
    gulp.watch('./dev/scss/**/*.scss', gulp.series('sass'));
});