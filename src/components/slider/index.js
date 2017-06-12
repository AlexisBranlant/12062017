'use strict';

import $ from 'jquery';
import slick from 'slick-carousel';

export default {
  init(params) {
	$('.slider').slick(params);
    console.info('Component Slider init');
  },
};
