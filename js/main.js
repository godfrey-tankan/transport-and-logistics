(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    // jQuery counter
    $(".counter").counterUp({
      delay: 50,
      time: 3000,
    });

    // jQuery Lightbox
    $(".lightbox").venobox({
      numeratio: true,
      infinigall: true,
    });

    // Our Clients caro
    $(".client-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 30,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });

    // Owl Carousel for Testimonial
    var testimonial = $(".all_testimonial");
    testimonial.owlCarousel({
      // nav: true,
      loop: true,
      autoplay: true,
      dots: false,
      items: 1,
      animateOut: "zoomOutUp",
      animateIn: "flipInX",
    });

    $(".testi_next").click(function () {
      testimonial.trigger("next.owl.carousel");
    });

    $(".testi_prev").click(function () {
      testimonial.trigger("prev.owl.carousel");
    });

    // For Footer To Top Scroll
    $("a.page-scroll").bind("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });

    // Revolution Main Slider
    $(".tp-banner")
      .show()
      .revolution({
        dottedOverlay: "none",
        delay: 16000,
        startwidth: 1170,
        startheight: 700,
        hideThumbs: 200,

        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,

        navigationType: false,
        navigationArrows: "solo",
        navigationStyle: "preview4",

        touchenabled: "on",
        onHoverStop: "on",

        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,

        parallax: "mouse",
        parallaxBgFreeze: "on",
        parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

        keyboardNavigation: "off",

        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,

        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,

        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,

        shadow: 0,
        fullWidth: "on",
        fullScreen: "on",

        spinner: "spinner4",

        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,

        shuffle: "off",

        autoHeight: "off",
        forceFullWidth: "off",

        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResolution: 0,

        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0,
        fullScreenOffsetContainer: "",
      });
  });
})(jQuery);
