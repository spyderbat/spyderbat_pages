"use strict";
"use strict";

var avartarsComenst = Array.from(document.querySelectorAll('.comment__avatar'));

if (avartarsComenst.length > 0) {
  avartarsComenst.forEach(function (element) {
    var avatar = new FirstLetterAvatar({
      avatarsSelector: element,
      namesSelector: ".comment__username",
      backgroundColor: "#3794d0",
      letterColor: "#fff",
      isCircle: true
    }).renderAvatar();
  });
}
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

var tabsCareersSwicher = Array.from(document.querySelectorAll('.tabs__item-inner--vacancy'));

if (tabsCareersSwicher.length > 0) {
  tabsCareersSwicher.forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.target.parentElement.classList.toggle('tabs__item--open');
    });
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
  watchSlidesVisibility: true,
  spaceBetween: 40,
  mousewheelSensitivity: 0.02,
  mousewheel: {
    releaseOnEdges: true
  },
  rewind: false,
  bounds: true
});
"use strict";

var newsBtns = Array.from(document.querySelectorAll('.newsroom__nav-btn'));

if (newsBtns.length > 0) {
  newsBtns.forEach(function (element) {
    element.addEventListener('click', function (e) {
      var dataBtn = e.target.dataset.news;
      if (!e.target.hasAttribute('data-news')) return;
      document.querySelectorAll('.newsroom__nav-btn').forEach(function (element) {
        element.classList.remove('newsroom__nav-btn--active');
      });
      Array.from(document.querySelectorAll(".newsroom-list")).forEach(function (element) {
        element.classList.remove('newsroom-list--show');
      });
      document.querySelectorAll("[data-room=\"".concat(dataBtn, "\"]")).forEach(function (element) {
        element.classList.add('newsroom-list--show');
      });
      e.target.classList.add('newsroom__nav-btn--active');
    });
  });
}
"use strict";

var headerMenuScroll = document.querySelector('.header');
window.addEventListener('scroll', function () {
  downHeader();
});
downHeader();

function downHeader() {
  if (window.pageYOffset > 0) return headerMenuScroll.classList.add('header--scroll');
  headerMenuScroll.classList.remove('header--scroll');
}
"use strict";

var swiper = new Swiper('.slider', {
  fadeEffect: {
    crossFade: true
  },
  virtualTranslate: true,
  speed: 600,
  autoplayDisableOnInteraction: true,
  slidersPerView: 1,
  effect: "fade",
  spaceBetween: 40,
  rewind: false,
  bounds: true,
  pagination: {
    el: ".progress",
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<li class="' + className + '">' + (index + 1) + "</li>";
    }
  }
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
