const burgerBtn = document.querySelector('.burger')
const menuMobile = document.querySelector('.nav__inner')

if (burgerBtn) {
  burgerBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('nav__inner--open');
  });

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
  });
}