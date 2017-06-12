'use strict';

const gulp  = require('gulp');
const clean = require('gulp-clean');
const merge = require('merge-stream');

module.exports = function(config) {
  return function() {
    const clean$ = gulp.src(config.outputPath)
      .pipe(clean({ force: true }));

    const copy$ = gulp.src(config.inputPath)
      .pipe(gulp.dest(config.outputPath));

    return merge(clean$, copy$);
  };
};
