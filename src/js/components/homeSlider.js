  const swiper = new Swiper('.slider-home', {
    fadeEffect: {
      crossFade: true
    },
    virtualTranslate: true,
    speed: 600,
    autoplayDisableOnInteraction: true,
    slidersPerView: 1,
    effect: "fade",
    watchSlidesVisibility: true,
    spaceBetween: 40,
    mousewheelSensitivity: 0.02,
    mousewheel: {
      releaseOnEdges: true,
    },
    rewind: false,
    bounds: true
  });
