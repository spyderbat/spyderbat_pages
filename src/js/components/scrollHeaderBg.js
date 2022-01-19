const headerMenuScroll = document.querySelector('.header')


window.addEventListener('scroll', () => {
  downHeader()
})

downHeader()

function downHeader() {
  if (window.pageYOffset > 0) return headerMenuScroll.classList.add('header--scroll');
  headerMenuScroll.classList.remove('header--scroll');
}
