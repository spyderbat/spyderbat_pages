const headerMenuScroll = document.querySelector('.nav')


window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) return headerMenuScroll.classList.add('nav--scroll');
  headerMenuScroll.classList.remove('nav--scroll');
})
