'use strict';

(function () {
  const CENTER = [59.938891, 30.323167];
  const WIDE_SHIFT = [59.938891, 30.321407];

  const PIN_SIZE = {
    small: [57, 53],
    big: [100, 100],
  };
  const PIN_OFFSET = {
    small: [-28, -53],
    big: [-50, -100]
  };
  const MEDIA = {
    mobile: '(min-width: 320px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1440px)'
  };

  const ZOOM = 18;
  const CONTROL_MARGIN = 23;

  window.options = {
    CENTER: CENTER,
    WIDE_SHIFT: WIDE_SHIFT,
    PIN_SIZE: PIN_SIZE,
    PIN_OFFSET: PIN_OFFSET,
    MEDIA: MEDIA,
    ZOOM: ZOOM,
    CONTROL_MARGIN: CONTROL_MARGIN
  };
})();
