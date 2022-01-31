const tabsCareersSwicher = Array.from(document.querySelectorAll('.tabs__item-inner--vacancy'))

if (tabsCareersSwicher.length > 0) {
  tabsCareersSwicher.forEach(element => {

    element.addEventListener('click', (e) => {
      e.target.parentElement.classList.toggle('tabs__item--open')
    })
  });
}
