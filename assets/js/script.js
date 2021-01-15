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
    prevText:
      '<svg width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="#2f552e" d="M30.9 43l3.1-3.1L18.1 24L34 8.1L30.9 5L12 24z"/></svg>',
    nextText:
      '<svg width="2em" height="2em"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="#2f552e" d="M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z"/></svg>',
    slices: 30,
    boxCols: 10,
    boxRows: 8,
  });
})(jQuery);
