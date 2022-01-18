const newsBtns = Array.from(document.querySelectorAll('.newsroom__nav-btn'))

if (newsBtns.length > 0) {

  newsBtns.forEach(element => {

    element.addEventListener('click', (e) => {
      const dataBtn = e.target.dataset.news


      if (!e.target.hasAttribute('data-news')) return
      document.querySelectorAll('.newsroom__nav-btn').forEach(element => {
        element.classList.remove('newsroom__nav-btn--active');
      });

      Array.from(document.querySelectorAll(".newsroom-list")).forEach(element => {
        element.classList.remove('newsroom-list--show');
      });

      document.querySelectorAll(`[data-room="${dataBtn}"]`).forEach(element => {
        element.classList.add('newsroom-list--show');
      });


      e.target.classList.add('newsroom__nav-btn--active');

    })
  });
}
