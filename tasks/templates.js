'use strict';

const gulp     = require('gulp');
const wait     = require('gulp-wait');
const fileinclude = require('gulp-file-include');
const flatten  = require('gulp-flatten');
const plumber  = require('gulp-plumber');
const notify   = require('gulp-notify');
const notifier = require('node-notifier');
const connect  = require('gulp-connect');
const fs       = require('fs');

const notifyMessage = {
  title: 'TASK ERROR',
  message: 'Template build FAIL',
  wait: false,
  time: 3000,
};

module.exports = function(config) {
  return function() {
    gulp.src(config.inputPath)
      .pipe(plumber({
        errorHandler(err) {
          console.log(err);
          notifier.notify(notifyMessage);
          this.emit('end');
        }
      }))
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(flatten())
      .pipe(gulp.dest(config.outputPath))
      .pipe( notify({ message: "fileInclude tasks have been completed!"}) )
      .pipe(wait(500))
      .pipe(connect.reload());
  };
};
