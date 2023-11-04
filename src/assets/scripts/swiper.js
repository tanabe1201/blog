"use strict";
{

var elmIndexSwiper = document.querySelectorAll('.js-index-pickupSlider');
var elmIndexBtnP = document.querySelectorAll('.js-pickupSlider-btnPrev');
var elmIndexBtnN = document.querySelectorAll('.js-pickupSlider-btnNext');
var elmIndexPage = document.querySelectorAll('.js-pickupSlider-pagination');

if (elmIndexSwiper.length > 0) {
  for (var i = 0; i < elmIndexSwiper.length; i++) {
    elmIndexSwiper[i].className += i;
    elmIndexBtnP[i].className += i;
    elmIndexBtnN[i].className += i;
    elmIndexPage[i].className += i;
    var swiper = new Swiper('.js-index-pickupSlider' + i, {
      slidesPerView: 'auto',
      paginationClickable: false,
      grabCursor: true,
      freeMode: true,
      touchEventsTarget: true,
      pagination: {
        el: '.js-pickupSlider-pagination' + i,
        clickable: true,
      },
      navigation: {
        prevEl: '.js-pickupSlider-btnPrev' + i,
        nextEl: '.js-pickupSlider-btnNext' + i
      }
    });
  }
}

}


{

var elmIndexSwiper = document.querySelectorAll('.js-index-slider');
var elmIndexBtnP = document.querySelectorAll('.js-slider-btnPrev');
var elmIndexBtnN = document.querySelectorAll('.js-slider-btnNext');
var elmIndexPage = document.querySelectorAll('.js-slider-pagination');

if (elmIndexSwiper.length > 0) {
  for (var i = 0; i < elmIndexSwiper.length; i++) {
    elmIndexSwiper[i].className += i;
    elmIndexBtnP[i].className += i;
    elmIndexBtnN[i].className += i;
    elmIndexPage[i].className += i;
    var swiper = new Swiper('.js-index-slider' + i, {
      slidesPerView: 'auto',
      paginationClickable: false,
      grabCursor: true,
      // freeMode: true,
      touchEventsTarget: true,
      pagination: {
        el: '.js-slider-pagination' + i,
        clickable: true,
      },
      navigation: {
        prevEl: '.js-slider-btnPrev' + i,
        nextEl: '.js-slider-btnNext' + i
      }
    });
  }
}

}



