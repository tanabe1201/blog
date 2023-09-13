'use strict';

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
$(window).scroll(function () {
  if ($(window).scrollTop() > 600) {
    $('.sc-inview').addClass('is-anim');
  } else {
    $('.sc-inview').removeClass('is-anim');
  }
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
document.addEventListener('DOMContentLoaded', function () {
  {
    var toggleAccordion = function toggleAccordion() {
      var items = document.querySelectorAll('.js-acc--content');
      var thisItem = this.parentNode;
      items.forEach(function (item) {
        if (thisItem == item) {
          thisItem.classList.toggle('is-active');
          return;
        }

        item.classList.remove('is-active');
      });
    };

    var accSingleTriggers = document.querySelectorAll('.js-acc--trigger');
    accSingleTriggers.forEach(function (trigger) {
      return trigger.addEventListener('click', toggleAccordion);
    });
  }
  {
    var el = document.querySelectorAll('.inview');
    var els = Array.prototype.slice.call(el);

    var cb = function cb(entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // setTimeout(() => {
          entry.target.classList.add('is-anim'); // }, 100);
        } else {}
      });
    };

    var options = {
      root: null,
      rootMargin: '-15% 0px',
      threshold: 0
    };
    var io = new IntersectionObserver(cb, options);
    els.forEach(function (el) {
      return io.observe(el);
    });
  }
  {
    var _el = document.querySelectorAll('.animate-heading');

    var _els = Array.prototype.slice.call(_el);

    var _cb = function _cb(entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview'); // setTimeout(() => {
          // }, 600);
        } else {// entry.target.classList.remove('inview');
        }
      });
    };

    var _options = {
      root: null
    };

    var _io = new IntersectionObserver(_cb, _options);

    _els.forEach(function (el) {
      return _io.observe(el);
    });

    var _iterator = _createForOfIteratorHelper(_els),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _el2 = _step.value;

        var chars = _el2.innerHTML.trim().split("");

        _el2.innerHTML = chars.reduce(function (acc, curr) {
          curr = curr.replace(/\s+/, '&nbsp;');
          return "".concat(acc, "<span class=\"char\">").concat(curr, "</span>");
        }, "");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
});
$(function () {
  $('.p-movie-slider__wrap li .p-movie-content__cap h3').matchHeight();
}); // // ブラウザ高さを取得し
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
//# sourceMappingURL=main.js.map
