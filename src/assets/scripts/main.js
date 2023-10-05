'use strict';

var $body = $("body");

$('.js-draw--trigger').on('click', function () {
  $('.js-draw--trigger').toggleClass('is-active');
  $('.js-draw--content').toggleClass('is-active');
  $('.js-draw--bg').toggleClass('is-active');
  $('body').toggleClass('is-lock');
})


$("a[href*='http://']:not([href*='" + location.hostname + "']),[href*='https://']:not([href*='" + location.hostname + "'])").attr('target', '_blank').addClass('blank');


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





$(function () {


  const btn = $('.l-footer__pageTop');

  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 100) {
      btn.addClass('is-active');
    }else{
      btn.removeClass('is-active');
    }
  });

  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 200;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});




/**
* Table of content
*/


$(window).on('load', function() {


  var tocs = [];
  var current_toc = -999;
  var setTimeoutId = null;
  var idCounter = 0;
  $("#js-articleBody h2, #js-articleBody h3").each(function() {
    this.id = "js-heading" + idCounter;
    idCounter++;
    tocs.push(this.offsetTop);
  });
  checkScrollPostion();

  $(window).scroll(function(){
    if(setTimeoutId) return false;
    setTimeoutId = setTimeout(function() {
      if (tocs.length > 0) checkScrollPostion();
      setTimeoutId = null;
    }, 100);
  });

  function checkScrollPostion() {
    if (current_toc != -1 && window.pageYOffset < tocs[0]) {
      changeTocBackgroundColor(-1);
    }

    $.each(tocs, function(i, offsetY) {
      if (i == current_toc) return true;

      if (tocs[i+1]) {
        if (window.pageYOffset > offsetY && window.pageYOffset <= tocs[i+1]) {
          changeTocBackgroundColor(i);
        }
      } else {
        if (window.pageYOffset > offsetY) {
          changeTocBackgroundColor(i);
        }
      }
    });
  }

  function changeTocBackgroundColor(index) {
    $("a[href='#js-heading" + index + "']").parent().addClass('toc__child--active');
    $("a[href='#js-heading" + current_toc + "']").parent().removeClass('toc__child--active');
    current_toc = index;
  }


});



$(function() {
  $('.single-foot__item').matchHeight();
});