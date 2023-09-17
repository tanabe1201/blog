'use strict';

var $body = $("body");

$('.js-draw--trigger').on('click', function () {
  $('.js-draw--trigger').toggleClass('is-active');
  $('.js-draw--content').toggleClass('is-active');
  $('.js-draw--bg').toggleClass('is-active');
  // $('body').toggleClass('lock');
})

$('a[href^="#"]').on('click', function () {
  const href = $(this).attr('href');
  const position = $(href).offset().top;
  $('html, body').animate({
    'scrollTop': position
  }, 500);
  return false;
})

$(window).scroll(function () {
  if ($(window).scrollTop() > 600) {
    $('.sc-inview').addClass('is-anim');
  } else {
    $('.sc-inview').removeClass('is-anim');
  }
})

$("a[href*='http://']:not([href*='" + location.hostname + "']),[href*='https://']:not([href*='" + location.hostname + "'])").attr('target', '_blank').addClass('blank');

const onLoad = document.getElementsByClassName("onload");

window.addEventListener('load', function(){
  setTimeout(function(){
    for(let i =0; i< onLoad.length; i++){
      onLoad[i].classList.add("open");
    }
  },600);
  setTimeout(function(){
    document.querySelector("body").classList.toggle("scroll_on");
  },800);
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
// // ブラウザ高さを取得し
// var windowHeight = document.documentElement.clientHeight;

// // ターゲット要素の高さを合わせる (box-sizing: border-box)
// $('.l-side__list--scroll').height(windowHeight)

// // ターゲット要素が、box-sizing: content-box の場合はこちら
// $('.l-side__list--scroll').outerHeight(windowHeight)


// var $target = $('.l-side__list--scroll');

// // リサイズインベントで更新
// $(window).resize(function() {

//   $target.height( document.documentElement.clientHeight );

// });


// $(function(){
//     //.sampleをクリックしてajax通信を行う
//     $('.c-cont__link').click(function(){
//         $.ajax({
//             url: 'localhost:3000',
//             /* 自サイトのドメインであれば、https://kinocolog.com/ajax/test.html というURL指定も可 */
//             type: 'GET',
//             dataType: 'html'
//         }).done(function(data){
//             /* 通信成功時 */
//             $('.single').html(data); //取得したHTMLを.resultに反映
            
//         }).fail(function(data){
//             /* 通信失敗時 */
//             alert('通信失敗！');
                    
//         });
//     });
// });

$(function() {
  $('.p-news__item .p-news-cont__bot a .p-news__ttl').matchHeight();
});
