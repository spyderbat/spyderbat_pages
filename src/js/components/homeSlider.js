  const swiper = new Swiper('.slider-home', {
    fadeEffect: {
      crossFade: true
    },
    virtualTranslate: true,
    speed: 600,
    autoplayDisableOnInteraction: true,
    slidersPerView: 1,
    effect: "fade",
    spaceBetween: 40,
    mousewheel: {
      releaseOnEdges: true,
    },
    rewind: false,
    bounds: true,
  });
