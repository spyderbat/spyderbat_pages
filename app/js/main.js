"use strict";
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
