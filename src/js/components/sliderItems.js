  const swiper = new Swiper('.slider', {
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
      renderBullet: function (index, className) {
        return '<li class="' + className + '">' + (index + 1) + "</li>";
      }
    }
  });
