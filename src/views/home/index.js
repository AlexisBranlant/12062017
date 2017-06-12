import $ from 'jquery';
import Common from 'assets/javascripts/common';
import Slider from 'components/slider';




$(() => {
  Common.init();
  console.info('Page Home');
  Slider.init();
});
