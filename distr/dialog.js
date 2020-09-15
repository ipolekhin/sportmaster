'use strict';

(function () {
  const pinProgress = document.querySelector('.slider__progress');
  const prevSlide = document.querySelector('.slider__slide--previous');
  const nextSlide = document.querySelector('.slider__slide--next');
  const sliderControl = document.querySelector('.slider__control');
  const mainNav = document.querySelector('.main-nav__toggle');

  window.dialog = {
    onPrevBtnClick: function () {
      const LEFT_RANGE = 0;

      pinProgress.style.left = LEFT_RANGE + 'px';
      prevSlide.style.width = '100%';
      nextSlide.style.width = '0px';
    },
    onNextBtnClick: function () {
      const RIGHT_RANGE = sliderControl.clientWidth - pinProgress.clientWidth - 12;

      pinProgress.style.left = RIGHT_RANGE + 'px';
      prevSlide.style.width = '0px';
      nextSlide.style.width = '100%';
    },
    toggleMainNav: function () {
      mainNav.classList.toggle('main-nav__toggle--inactive');
    }
  }
})();
