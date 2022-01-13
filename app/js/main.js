"use strict";
"use strict";

var burgerBtn = document.querySelector('.burger');
var menuMobile = document.querySelector('.nav__inner');

if (burgerBtn) {
  burgerBtn.addEventListener('click', function () {
    menuMobile.classList.toggle('nav__inner--open');
  });
  burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger--active');
  });
}
"use strict";

var circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(function (el) {
  if (el.dataset.percentage == 'true') {
    var progress = el.querySelector('.progress');
    var valueBlock = el.querySelector('.facts-element__value');
    var radius = progress.getAttribute('r');
    var circleLength = 2 * Math.PI * radius;
    var full = el.dataset.full;
    var value = el.dataset.value;
    var percentageProgress = Math.floor(value / full * 100);
    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  } else {
    var _progress = el.querySelector('.progress');

    var _valueBlock = el.querySelector('.facts-element__value');

    var _radius = _progress.getAttribute('r');

    var _circleLength = 2 * Math.PI * _radius;

    var percent = el.dataset.percent;

    var _percentageProgress = Math.floor(percent);

    _valueBlock.textContent = percent + '%';

    _progress.setAttribute('stroke-dasharray', _circleLength);

    _progress.setAttribute('stroke-dashoffset', _circleLength - _circleLength * _percentageProgress / 100);
  }
});
"use strict";

var swiper = new Swiper('.slider-home', {
  fadeEffect: {
    crossFade: true
  },
  virtualTranslate: true,
  speed: 600,
  autoplayDisableOnInteraction: true,
  slidersPerView: 1,
  effect: "fade",
  spaceBetween: 40,
  mousewheel: {
    releaseOnEdges: true
  },
  rewind: false,
  bounds: true
});
"use strict";

var headerMenuScroll = document.querySelector('.nav');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) return headerMenuScroll.classList.add('nav--scroll');
  headerMenuScroll.classList.remove('nav--scroll');
});
"use strict";

/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */
var formSubmitBtn = document.querySelector('.contact__form-btn');
var formCloseBtn = Array.from(document.querySelectorAll('.btn-close'));

if (formSubmitBtn) {
  formSubmitBtn.addEventListener('click', function () {
    document.querySelector('.modal').classList.add('modal--open');
    document.querySelector('body').style.overflow = 'hidden';
  });
}

if (formCloseBtn.length > 0) {
  formCloseBtn.forEach(function (element) {
    element.addEventListener('click', function () {
      document.querySelector('.modal').classList.remove('modal--open');
      document.querySelector('body').style.overflow = 'auto';
    });
  });
}
//# sourceMappingURL=main.js.map
