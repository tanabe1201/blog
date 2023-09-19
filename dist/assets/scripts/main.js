'use strict';

var $body = $("body");
$('.js-draw--trigger').on('click', function () {
  $('.js-draw--trigger').toggleClass('is-active');
  $('.js-draw--content').toggleClass('is-active');
  $('.js-draw--bg').toggleClass('is-active'); // $('body').toggleClass('lock');
});
$('a[href^="#"]').on('click', function () {
  var href = $(this).attr('href');
  var position = $(href).offset().top;
  $('html, body').animate({
    'scrollTop': position
  }, 500);
  return false;
});
$("a[href*='http://']:not([href*='" + location.hostname + "']),[href*='https://']:not([href*='" + location.hostname + "'])").attr('target', '_blank').addClass('blank');
var onLoad = document.getElementsByClassName("onload");
window.addEventListener('load', function () {
  setTimeout(function () {
    for (var i = 0; i < onLoad.length; i++) {
      onLoad[i].classList.add("open");
    }
  }, 600);
  setTimeout(function () {
    document.querySelector("body").classList.toggle("scroll_on");
  }, 800);
});
var tabTriggers = document.querySelectorAll('.js-tab--trigger');
var tabContents = document.querySelectorAll('.js-tab--content');
tabTriggers.forEach(function (trigger) {
  return trigger.addEventListener('click', function (e) {
    e.preventDefault();
    tabTriggers.forEach(function (trigger) {
      trigger.classList.remove('is-active');
    });
    trigger.classList.add('is-active');
    tabContents.forEach(function (content) {
      return content.classList.remove('is-active');
    });
    document.getElementById(trigger.dataset.tab).classList.add('is-active');
  });
});
//# sourceMappingURL=main.js.map
