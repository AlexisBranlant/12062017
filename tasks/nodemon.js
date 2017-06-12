'use strict';

const gulp        = require('gulp');
const nodemon     = require('gulp-nodemon');

module.exports = function(config) {
  return function() {
    return nodemon({
      script: config.script,
      ext: config.ext,
      env: config.env,
    }) .on('restart', function () {
      console.log('Server restarted!')
    });
  }
}
