'use strict';

const path = require('path');

const config = {
  stylesheets: {
    inputPath: [path.normalize('src/assets/stylesheets/common.scss'), 'src/views/**/*.scss'],
    outputPath: path.join(__dirname, '../dist/stylesheets'),
    watchPath: './src/**/*.scss',
  },
  icons: {
    inputPath: './src/assets/icons/**/*.svg',
    outputPath: path.join(__dirname, '../dist/fonts'),
    cssPath: '/fonts',
    watchPath: './src/assets/icons/**/*.svg',
    fontName: 'icons',
    fontFormats: ['ttf', 'eot', 'woff', 'woff2'],//svg
    templatePath: path.join(__dirname, '../src/assets/stylesheets/icons/template.scss'),
    templateOutputPath: path.join(__dirname, '../src/assets/stylesheets/icons'),
    exemplePath: path.join(__dirname, './icons-font.html'),//liste des icons
    exempleOutputPath: path.join(__dirname, '../dist'),
    exempleCssPath: 'fonts',
  },
  scripts: {
    watchPath: 'src/**/*.js',
  },
  templates: {
    inputPath: 'src/views/**/*.html',
    outputPath: path.join(__dirname, '../dist'),
    watchPath: ['src/**/*.html'],
  },
  jsdoc: {
    inputPath: ['README.md'],
    outputPath: path.join(__dirname, '../docs'),
  },
  server: {
    root: path.join(__dirname, '../dist'),
  },
  images: {
    inputPath: 'src/assets/images/**/*',
    outputPath: path.join(__dirname, '../dist/images'),
    watchPath: 'src/assets/images/**/*',
  },
  fonts: {
    inputPath: 'src/assets/fonts/**/*',
    outputPath: path.join(__dirname, '../dist/fonts'),
    watchPath: 'src/assets/fonts/**/*',
  },
};

module.exports = config;
