!(function ($) {
  "use strict";

  // nivoSlider for intro section

  $(".slider-active").nivoSlider({
    controlNav: true,
    directionNav: true,
    randomStart: true,
    controlNavThumbs: false,
    animSpeed: 500,
    pauseTime: 2000,
    pauseOnHover: false,
    manualAdvance: false,
    prevText: "",
    nextText: "",
    slices: 30,
    boxCols: 10,
    boxRows: 8,
  });
})(jQuery);
