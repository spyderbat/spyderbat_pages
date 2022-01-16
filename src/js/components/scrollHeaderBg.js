const headerMenuScroll = document.querySelector('.nav')


window.addEventListener('scroll', () => {
  downHeader()
})

downHeader()

function downHeader() {
  if (window.pageYOffset > 0) return headerMenuScroll.classList.add('nav--scroll');
  headerMenuScroll.classList.remove('nav--scroll');
}
