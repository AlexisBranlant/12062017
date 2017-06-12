'use strict';

const gulp        = require('gulp');
const iconfont    = require('gulp-iconfont');
const consolidate = require('gulp-consolidate');
const rename      = require('gulp-rename');

module.exports = function(config) {
  return function() {
    return gulp.src(config.inputPath)
      .pipe(iconfont({
        fontName: config.fontName,
        formats: config.fontFormats,
      }))
      .on('glyphs', function(glyphs) {
        var options = {
          glyphs: glyphs.map(function(glyph) {
            return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0)};
          }),
          fontName: config.fontName,
          fontPath: config.outputPath,
          fontFormats: config.fontFormats,
          cssPath: config.cssPath,
          exempleCssPath: config.exempleCssPath,
        };

        gulp.src(config.templatePath)
          .pipe(consolidate('lodash', options))
          .pipe(rename({ basename:'icons' }))
          .pipe(gulp.dest(config.templateOutputPath));

        return gulp.src(config.exemplePath)
          .pipe(consolidate('lodash', options))
          .pipe(gulp.dest(config.exempleOutputPath));
      })
      .pipe(gulp.dest(config.outputPath));
  }
}
