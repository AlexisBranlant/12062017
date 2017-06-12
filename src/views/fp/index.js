import $ from 'jquery';
import Common from 'assets/javascripts/common';
import Slider from 'components/slider';




$(() => {
  Common.init();
  console.info('Fiche Produit');
  Slider.init({
	  slidesToShow: 3,
	  slidesToScroll: 3
  });
});
