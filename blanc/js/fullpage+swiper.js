$("#fullpage").fullpage({
  anchors: [
    "sec1",
    "sec2",
    "sec3",
    "sec4",
    "sec5",
    "sec6",
    "sec7",
    "sec8",
    "sec9",
  ],
  scrollingSpeed: 1000,
  onLeave: function (origin, destination, direction) {
    $("#fullpage").on("scroll touchmove mousewheel", function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    swiper2.mousewheel.disable();
    swiper3.mousewheel.disable();
    swiper5.mousewheel.disable();
    swiper6.mousewheel.disable();
    swiper7.mousewheel.disable();
  },
  afterLoad: function (anchorLink, index) {
    $("#fullpage").off("scroll mousewheel");
    if (!$(".fp-completely .swiper-wrapper").length > 0)
      $("#fullpage").off("touchmove");
    if (swiper2) swiper2.mousewheel.enable();
    if (swiper3) swiper3.mousewheel.enable();
    if (swiper5) swiper5.mousewheel.enable();
    if (swiper6) swiper6.mousewheel.enable();
    if (swiper7) swiper7.mousewheel.enable();
    if (!$(".section").hasClass("active"))
      $.fn.fullpage.setAllowScrolling(true);
    if (
      index == 2 ||
      index == 4 ||
      index == 5 ||
      index == 6 ||
      index == 7 ||
      index == 9 ||
      index == 11 ||
      index == 13 ||
      index == 16
    ) {
    } else {
    }
  },
});
var length2 = $(".sec2 .swiper-slide").length;
var swiper2 = new Swiper(".sec2 .swiper-container", {
  slidesPerView: 1,
  freeMode: false,
  speed: 1000,
  mousewheel: true,
  allowTouchMove: false,
  on: {
    slideChange: function () {
      var i = this.activeIndex;
      if (this.activeIndex != 0 && i != length2)
        $.fn.fullpage.setAllowScrolling(false);
      if (length2 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length2 - 1) $.fn.fullpage.setAllowScrolling(true);
    },
    touchMove: function (e) {
      var startY = e.touches.startY;
      setTimeout(function () {
        if (startY > e.touches.currentY) swiper2.slideNext();
        else swiper2.slidePrev();
      }, 100);
    },
  },
});
var length3 = $(".sec3 .swiper-slide").length;
var swiper3 = new Swiper(".sec3 .swiper-container", {
  slidesPerView: 1,
  freeMode: false,
  speed: 1000,
  mousewheel: true,
  allowTouchMove: false,
  on: {
    slideChange: function () {
      var i = this.activeIndex;
      if (this.activeIndex != 0 && i != length3)
        $.fn.fullpage.setAllowScrolling(false);
      if (length3 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length3 - 1) $.fn.fullpage.setAllowScrolling(true);
    },
    touchMove: function (e) {
      var startY = e.touches.startY;
      setTimeout(function () {
        if (startY > e.touches.currentY) swiper3.slideNext();
        else swiper3.slidePrev();
      }, 100);
    },
  },
});
var length5 = $(".sec5 .swiper-slide").length;
var swiper5 = new Swiper(".sec5 .swiper-container", {
  slidesPerView: 1,
  freeMode: false,
  speed: 1000,
  mousewheel: true,
  allowTouchMove: false,
  on: {
    slideChange: function () {
      var i = this.activeIndex;
      if (this.activeIndex != 0 && i != length5)
        $.fn.fullpage.setAllowScrolling(false);
      if (length5 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length5 - 1) $.fn.fullpage.setAllowScrolling(true);
    },
    touchMove: function (e) {
      var startY = e.touches.startY;
      setTimeout(function () {
        if (startY > e.touches.currentY) swiper5.slideNext();
        else swiper5.slidePrev();
      }, 100);
    },
  },
});
var length6 = $(".sec6 .swiper-slide").length;
var swiper6 = new Swiper(".sec6 .swiper-container", {
  slidesPerView: 1,
  freeMode: false,
  speed: 1000,
  mousewheel: true,
  allowTouchMove: false,
  on: {
    slideChange: function () {
      var i = this.activeIndex;
      if (this.activeIndex != 0 && i != length6)
        $.fn.fullpage.setAllowScrolling(false);
      if (length6 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length6 - 1) $.fn.fullpage.setAllowScrolling(true);
    },
    touchMove: function (e) {
      var startY = e.touches.startY;
      setTimeout(function () {
        if (startY > e.touches.currentY) swiper6.slideNext();
        else swiper6.slidePrev();
      }, 100);
    },
  },
});
var length7 = $(".sec7 .swiper-slide").length;
var swiper7 = new Swiper(".sec7 .swiper-container", {
  slidesPerView: 1,
  freeMode: false,
  speed: 1000,
  mousewheel: true,
  allowTouchMove: false,
  on: {
    slideChange: function () {
      var i = this.activeIndex;
      if (this.activeIndex != 0 && i != length7)
        $.fn.fullpage.setAllowScrolling(false);
      if (length7 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length7 - 1) $.fn.fullpage.setAllowScrolling(true);
    },
    touchMove: function (e) {
      var startY = e.touches.startY;
      setTimeout(function () {
        if (startY > e.touches.currentY) swiper7.slideNext();
        else swiper7.slidePrev();
      }, 100);
    },
  },
});
