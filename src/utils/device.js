'use strict';

import $ from 'jquery';

export default {
  isMobile: null,
  isTablet: null,
  isSmallDesktop: null,
  isDesktop: null,
  orientation: {
    portrait: null,
    landscape: null,
  },

  init() {
    this.checkViewport();

    $(window).on('resize', () => {
      this.checkViewport();
    });
  },

  checkViewport() {
    if (screen.width < 970) {
      this.isMobile       = true;
      this.isDesktop      = false;
    }
    else {
      this.isMobile       = false;
      this.isDesktop      = true;
    }
  }
};
