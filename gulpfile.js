'use strict';

const gulp   = require('gulp');
const path   = require('path');
const config = require('./config/gulp.js');

const tasks = {
  stylesheets: require('./tasks/stylesheets')(config.stylesheets),
  icons: require('./tasks/icons')(config.icons),
  scripts: require('./tasks/scripts')(config.scripts),
  templates: require('./tasks/templates')(config.templates),
  server: require('./tasks/server')(config.server),
  images: require('./tasks/images')(config.images),
  fonts: require('./tasks/fonts')(config.fonts),
};

gulp.task('server', tasks.server);
gulp.task('scripts', tasks.scripts);
gulp.task('stylesheets', tasks.stylesheets);
gulp.task('icons', tasks.icons);
gulp.task('templates', tasks.templates);
gulp.task('images', tasks.images);
gulp.task('fonts', tasks.fonts);

gulp.task('default', ['server', 'build', 'watch']);
gulp.task('build', ['templates','icons','stylesheets','scripts','images','fonts']);

gulp.task('watch', function() {
  gulp.watch(config.stylesheets.watchPath, ['stylesheets']);
  gulp.watch(config.templates.watchPath, ['templates']);
  gulp.watch(config.scripts.watchPath, ['scripts']);
  gulp.watch(config.images.watchPath, ['images']);
});
