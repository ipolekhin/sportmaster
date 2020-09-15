'use strict';

(function () {
  const getCurrentCenter = () => window.matchMedia(window.options.MEDIA.desktop).matches ? window.options.WIDE_SHIFT : window.options.CENTER;
  const getCurrentPinSize = () => window.matchMedia(window.options.MEDIA.mobile).matches ? window.options.PIN_SIZE.small : window.options.PIN_SIZE.big;
  const getCurrentPinOffset = () => window.matchMedia(window.options.MEDIA.mobile).matches ? window.options.PIN_OFFSET.small : window.options.PIN_OFFSET.big;

  const mapSettings = {
    center: getCurrentCenter(),
    zoom: window.options.ZOOM
  };

  const iconSettings = {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-pin.png',
    iconImageSize: getCurrentPinSize(),
    iconImageOffset: getCurrentPinOffset()
  };

  const hintsSettings = {
    hintContent: 'Наше местоположение',
    balloonContent: 'ул.Большая Конюшенная, д. 19/8'
  };

  const initMap = function () {
    const myMap = new ymaps.Map('map', mapSettings);

    const customPin = new ymaps.Placemark(window.options.CENTER, hintsSettings, iconSettings);

    myMap.geoObjects.add(customPin);
  };

  window.map = {
    createMap: function () {
      ymaps.ready(initMap);
    }
  };
})();
