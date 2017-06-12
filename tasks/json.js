'use strict';

const gulp     = require('gulp');
const plumber  = require('gulp-plumber');
const notify   = require('gulp-notify');
const notifier = require('node-notifier');
const extend   = require('gulp-extend');

const notifyMessage = {
  title: 'TASK ERROR',
  message: 'JSON bundle FAIL',
  wait: false,
  time: 3000,
};

module.exports = function(config) {
  return function() {

    /* Build the HTML files */
    return gulp.src(config.inputJsonPath)
      .pipe(plumber({
        errorHandler(err) {
          console.log(err);
          notifier.notify(notifyMessage);
          this.emit('end');
        }
      }))
      .pipe(extend('data.json'))
      .pipe(gulp.dest(config.tempJsonPath));
  };
};
