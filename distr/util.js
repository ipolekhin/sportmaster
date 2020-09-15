'use strict';

(function () {
  const example = document.querySelector('.example');
  const rightSlide = document.querySelector('.slider__slide--next');
  const leftSlide = document.querySelector('.slider__slide--previous');
  const pinProgress = document.querySelector('.slider__progress');
  const sliderControl = document.querySelector('.slider__control');
  const sliderWrapper = document.querySelector('.slider__wrapper');
  const mainNav = document.querySelector('.main-nav');
  const mainNavToggle = document.querySelector('.main-nav__toggle');

  const BASIC_GREY = getComputedStyle(document.documentElement)
    .getPropertyValue('--basic-grey');
  const SPECIAL_GREY = getComputedStyle(document.documentElement)
    .getPropertyValue('--special-grey');
  const BASIC_WHITE = getComputedStyle(document.documentElement)
    .getPropertyValue('--basic-white');

  window.util = {
    setBackGradient: function () {
      const gradientStop = rightSlide.getBoundingClientRect().left / (document.documentElement.clientWidth / 100);
      const firstBreak = '20%';

      example.style.background = `linear-gradient(180deg, ${BASIC_WHITE} ${firstBreak}, transparent ${firstBreak}),
      linear-gradient(to right, ${BASIC_GREY} ${gradientStop}%, ${SPECIAL_GREY} ${gradientStop}%)`;
    },
    setDefaultPinPosition: function () {
      if (!pinProgress.style.left) {
        pinProgress.style.left = (sliderControl.clientWidth - window.options.CONTROL_MARGIN) / 2 - pinProgress.clientWidth / 2 + 'px';
      }
    },
    setPinPosition: function (leftCoordinates) {
      const LEFT_RANGE = 0;
      const RIGHT_RANGE = sliderControl.clientWidth;

      if (leftCoordinates >= LEFT_RANGE && leftCoordinates <= RIGHT_RANGE - window.options.CONTROL_MARGIN) {
        pinProgress.style.left = leftCoordinates + 'px';

        if (window.matchMedia(window.options.MEDIA.desktop).matches) {
          window.util.setBackGradient();
        }
      }
    },
    setSlidesWidth: function (percentPerShift) {
      leftSlide.style.width = sliderWrapper.clientWidth * (100 - percentPerShift) / 100 + 'px';
      rightSlide.style.width = sliderWrapper.clientWidth * percentPerShift / 100 + 'px';
    },
    setSlidesWidthMobile: function (endCoordsX, shift) {
      const LEFT_RANGE_MOBILE = sliderWrapper.getBoundingClientRect().left;
      const RIGHT_RANGE_MOBILE = sliderWrapper.clientWidth + LEFT_RANGE_MOBILE;

      if (endCoordsX > LEFT_RANGE_MOBILE && endCoordsX < RIGHT_RANGE_MOBILE) {
        leftSlide.style.width = leftSlide.clientWidth - shift + 'px';
        rightSlide.style.width = rightSlide.clientWidth + shift + 'px';
      }
    },
    setPinPositionMobile: function (shift) {
      const LEFT_RANGE = 0;
      const RIGHT_RANGE = sliderControl.clientWidth - pinProgress.clientWidth - 12;

      if (shift >= LEFT_RANGE && shift <= RIGHT_RANGE) {
        pinProgress.style.left = shift + 'px';
      }
    },
    activateNav: function () {
      if (mainNav.classList.contains('nav-no-js')) {
        mainNav.classList.remove('nav-no-js');
      }
    },
    fixNotMobileNav: function () {
      const isNotMobile = window.matchMedia(window.options.MEDIA.tablet).matches || window.matchMedia(window.options.MEDIA.desktop).matches;
      if (isNotMobile && mainNavToggle.classList.contains('main-nav__toggle--inactive')) {
        mainNavToggle.classList.remove('main-nav__toggle--inactive');
      }
    }
  }
})();
