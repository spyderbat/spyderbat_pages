/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */


const formSubmitBtn = document.querySelector('.contact__form-btn')
const formCloseBtn = Array.from(document.querySelectorAll('.btn-close'))


if (formSubmitBtn) {
  formSubmitBtn.addEventListener('click', () => {
    document.querySelector('.modal').classList.add('modal--open');
    document.querySelector('body').style.overflow = 'hidden';
  })
}


if (formCloseBtn.length > 0) {
  formCloseBtn.forEach(element => {
    element.addEventListener('click', () => {
      document.querySelector('.modal').classList.remove('modal--open')
      document.querySelector('body').style.overflow = 'auto';

    })
  });
}
