const gulp    = require('gulp');
const eslint  = require('gulp-eslint');

module.exports = function(config) {
  return () => {
    return gulp.src(config.inputPath)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failOnError());
  }
};
