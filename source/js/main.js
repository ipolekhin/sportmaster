'use strict';

(function () {
  // Карусель
  const owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ['<img src="./img/icon-right-arrow.svg" alt="" width="6" height="10">', '<img src="./img/icon-left-arrow.svg" alt="" width="6" height="10">'],
    responsive: {
      0: {
        autoWidth: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
      },
      992: {
        autoWidth: true,
        items: 3,
        autoplay: false,
        margin: 20,
      }
    }
  });
})();
