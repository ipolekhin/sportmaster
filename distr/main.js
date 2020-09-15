'use strict';

(function () {
  const body = document.querySelector('.page__body');
  const sliderProgress = document.querySelector('.slider__progress');
  const sliderWrapper = document.querySelector('.slider__wrapper');
  const prevControlBtn = document.querySelector('.slider__control-btn--previous');
  const nextControlBtn = document.querySelector('.slider__control-btn--next');
  const mainNavToggle = document.querySelector('.main-nav__toggle');


  if (body.classList.contains('page__body--index')) {
    if (window.matchMedia(window.options.MEDIA.desktop).matches) {
      window.util.setBackGradient();
      sliderProgress.addEventListener('mousedown', window.move.onMouseDown);
    } else if (window.matchMedia(window.options.MEDIA.tablet).matches) {
      sliderProgress.addEventListener('mousedown', window.move.onMouseDown);
    } else {
      sliderWrapper.addEventListener('touchstart', window.move.onTouchStart);
    }

    prevControlBtn.addEventListener('click', window.dialog.onPrevBtnClick);
    nextControlBtn.addEventListener('click', window.dialog.onNextBtnClick);
  }

  if (window.matchMedia(window.options.MEDIA.mobile).matches) {
    window.util.activateNav();
    window.dialog.toggleMainNav();
    mainNavToggle.addEventListener('click', window.dialog.toggleMainNav);
  }

  window.util.fixNotMobileNav();
  window.map.createMap();
})();
