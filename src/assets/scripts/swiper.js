"use strict";

// const swiper01 = new Swiper('.p-movie-slider__container', {
//   slidesPerView: 'auto',
//   freeMode: true,
//   grabCursor: true,
//   navigation: {
//     prevEl: '.p-movie-slider__btnPrev',
//     nextEl: '.p-movie-slider__btnNext',
//   },
// });





var elmIndexSwiper = document.querySelectorAll('.js-index-slider');
var elmIndexBtnP = document.querySelectorAll('.js-slider-btnPrev');
var elmIndexBtnN = document.querySelectorAll('.js-slider-btnNext');

if (elmIndexSwiper.length > 0) {
  for (var i = 0; i < elmIndexSwiper.length; i++) {
    elmIndexSwiper[i].className += i;
    elmIndexBtnP[i].className += i;
    elmIndexBtnN[i].className += i;
    var swiper = new Swiper('.js-index-slider' + i, {
      slidesPerView: 'auto',
      // loop: "true",
      paginationClickable: false,
      grabCursor: true,
      freeMode: true,
      touchEventsTarget: true,
      navigation: {
        prevEl: '.js-slider-btnPrev' + i,
        nextEl: '.js-slider-btnNext' + i
      }
    });
  }
}