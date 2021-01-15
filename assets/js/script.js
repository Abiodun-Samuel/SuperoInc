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
    prevText: '<i class="fa fa-angle-left"></i>',
    nextText: '<i class="fa fa-angle-right"></i>',
    slices: 20,
    boxCols: 10,
    boxRows: 8,
  });
})(jQuery);
