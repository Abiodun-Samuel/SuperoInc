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

  // about us gallery
  $(".main-instagram").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      '<i> <svg  width="1.5em" height="1.5em" viewBox="0 0 32 32"><defs/><path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm8 15H11.85l5.58 5.573L16 24l-8-8l8-8l1.43 1.393L11.85 15H24z" fill="#2f552e"/></svg></i>',
      '<svg  width="1.5em" height="1.5em"  viewBox="0 0 32 32"><defs/><path d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16zm6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8z" fill="#2f552e"/></svg>',
    ],
    responsive: {
      0: {
        items: 2,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 5,
        nav: true,
        loop: true,
      },
    },
  });
})(jQuery);
