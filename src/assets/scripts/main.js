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


document.addEventListener('DOMContentLoaded', function () {

  {
    const accSingleTriggers = document.querySelectorAll('.js-acc--trigger');

    accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

    function toggleAccordion() {
      const items = document.querySelectorAll('.js-acc--content');
      const thisItem = this.parentNode;

      items.forEach(item => {
        if (thisItem == item) {
          thisItem.classList.toggle('is-active');
          return;
        }
        item.classList.remove('is-active');
      });
    }
  }

  {
    const el = document.querySelectorAll('.inview');
    const els = Array.prototype.slice.call(el);

    const cb = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // setTimeout(() => {
          entry.target.classList.add('is-anim');
          // }, 100);
        } else {}
      });
    }

    const options = {
      root: null,
      rootMargin: '-15% 0px',
      threshold: 0
    };
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
  }

  {
    const el = document.querySelectorAll('.animate-heading');
    const els = Array.prototype.slice.call(el);

    const cb = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.classList.add('inview');
          // setTimeout(() => {
          // }, 600);
        } else {
          // entry.target.classList.remove('inview');
        }
      });
    }

    const options = {
      root: null,
    };

    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));

    for (let el of els) {
      const chars = el.innerHTML.trim().split("");

      el.innerHTML = chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
      }, "");
    }
  }
});



$(function() {
  $('.p-movie-slider__wrap li .p-movie-content__cap h3').matchHeight();
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
