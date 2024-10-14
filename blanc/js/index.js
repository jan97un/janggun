// const sectionLength = $(".section").length;
// function init() {
//   $(".section").eq(0).find("[data-aos]").removeClass("aos-animate");
//   setTimeout(() => {
//     $(".section").eq(0).addClass("start");
//     $(".section").eq(0).find("[data-aos]").addClass("aos-animate");
//   }, 2200);
// }
// var wheelCount = 0;
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
    // if (origin == 1 && wheelCount < 1) {
    //   setTimeout(() => {
    //     $(".txt1").find("[data-aos]").removeClass("aos-animate");
    //   }, 750);
    // }
    // $(".section").eq(origin).find("[data-aos]").removeClass("aos-animate");
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
    const realIndex = index - 1;
    sectionIndex = realIndex;
    // if (index !== sectionLength) {
    //   $(".section").find("[data-aos]").removeClass("aos-animate");
    // }
    // if (realIndex === 0) {
    //   $("header .head .logo a").removeClass("on");
    //   $("header .head .gnb .dep1 > li > a").css("color", "#fff");
    //   $("header .head .headRight .tel").css("color", "#fff");
    //   $("header .head .headRight .tel .telBg").css("background-color", "#fff");
    //   $("header .head .headRight .tel .telBg div").removeClass("on");
    //   $("header .head .headRight .hamberger").css("border-color", "#fff");
    //   $("header .head .headRight .hamberger div").css(
    //     "background-color",
    //     "#fff"
    //   );
    //   $(".gnb").hover(
    //     function () {
    //       $("header .head .logo a").addClass("on");
    //       $("header .head .gnb .dep1 > li > a").css("color", "#333");
    //       $("header .head .headRight .tel").css("color", "#000");
    //       $("header .head .headRight .tel .telBg").css(
    //         "background-color",
    //         "#000"
    //       );
    //       $("header .head .headRight .tel .telBg div").addClass("on");
    //       $("header .head .headRight .hamberger").css("border-color", "#000");
    //       $("header .head .headRight .hamberger div").css(
    //         "background-color",
    //         "#000"
    //       );
    //     },
    //     function () {
    //       $("header .head .logo a").removeClass("on");
    //       $("header .head .gnb .dep1 > li > a").css("color", "#fff");
    //       $("header .head .headRight .tel").css("color", "#fff");
    //       $("header .head .headRight .tel .telBg").css(
    //         "background-color",
    //         "#fff"
    //       );
    //       $("header .head .headRight .tel .telBg div").removeClass("on");
    //       $("header .head .headRight .hamberger").css("border-color", "#fff");
    //       $("header .head .headRight .hamberger div").css(
    //         "background-color",
    //         "#fff"
    //       );
    //     }
    //   );
    //   $(".section")
    //     .eq(index - 1)
    //     .addClass("after-load");
    //   if (!$(".section").eq(index).hasClass("after-load")) {
    //     AOS.init();
    //   }
    // } else {
    //   $(".section").eq(realIndex).find("[data-aos]").addClass("aos-animate");
    //   if (
    //     index == 2 ||
    //     index == 3 ||
    //     index == 4 ||
    //     index == 6 ||
    //     index == 8 ||
    //     index == 9
    //   ) {
    //     $("header .head .logo a").addClass("on");
    //     $("header .head .gnb .dep1 > li > a").css("color", "#333");
    //     $("header .head .headRight .tel").css("color", "#000");
    //     $("header .head .headRight .tel .telBg").css(
    //       "background-color",
    //       "#000"
    //     );
    //     $("header .head .headRight .tel .telBg div").addClass("on");
    //     $("header .head .headRight .hamberger").css("border-color", "#000");
    //     $("header .head .headRight .hamberger div").css(
    //       "background-color",
    //       "#000"
    //     );
    //     $(".gnb").hover(
    //       function () {
    //         $("header .head .logo a").addClass("on");
    //         $("header .head .gnb .dep1 > li > a").css("color", "#333");
    //         $("header .head .headRight .tel").css("color", "#000");
    //         $("header .head .headRight .tel .telBg").css(
    //           "background-color",
    //           "#000"
    //         );
    //         $("header .head .headRight .tel .telBg div").addClass("on");
    //         $("header .head .headRight .hamberger").css("border-color", "#000");
    //         $("header .head .headRight .hamberger div").css(
    //           "background-color",
    //           "#000"
    //         );
    //       },
    //       function () {
    //         $("header .head .logo a").addClass("on");
    //         $("header .head .gnb .dep1 > li > a").css("color", "#333");
    //         $("header .head .headRight .tel").css("color", "#000");
    //         $("header .head .headRight .tel .telBg").css(
    //           "background-color",
    //           "#000"
    //         );
    //         $("header .head .headRight .tel .telBg div").addClass("on");
    //         $("header .head .headRight .hamberger").css("border-color", "#000");
    //         $("header .head .headRight .hamberger div").css(
    //           "background-color",
    //           "#000"
    //         );
    //       }
    //     );
    //   } else {
    //     $("header .head .logo a").removeClass("on");
    //     $("header .head .gnb .dep1 > li > a").css("color", "#fff");
    //     $("header .head .headRight .tel").css("color", "#fff");
    //     $("header .head .headRight .tel .telBg").css(
    //       "background-color",
    //       "#fff"
    //     );
    //     $("header .head .headRight .tel .telBg div").removeClass("on");
    //     $("header .head .headRight .hamberger").css("border-color", "#fff");
    //     $("header .head .headRight .hamberger div").css(
    //       "background-color",
    //       "#fff"
    //     );
    //     $(".gnb").hover(
    //       function () {
    //         $("header .head .logo a").addClass("on");
    //         $("header .head .gnb .dep1 > li > a").css("color", "#333");
    //         $("header .head .headRight .tel").css("color", "#000");
    //         $("header .head .headRight .tel .telBg").css(
    //           "background-color",
    //           "#000"
    //         );
    //         $("header .head .headRight .tel .telBg div").addClass("on");
    //         $("header .head .headRight .hamberger").css("border-color", "#000");
    //         $("header .head .headRight .hamberger div").css(
    //           "background-color",
    //           "#000"
    //         );
    //       },
    //       function () {
    //         $("header .head .logo a").removeClass("on");
    //         $("header .head .gnb .dep1 > li > a").css("color", "#fff");
    //         $("header .head .headRight .tel").css("color", "#fff");
    //         $("header .head .headRight .tel .telBg").css(
    //           "background-color",
    //           "#fff"
    //         );
    //         $("header .head .headRight .tel .telBg div").removeClass("on");
    //         $("header .head .headRight .hamberger").css("border-color", "#fff");
    //         $("header .head .headRight .hamberger div").css(
    //           "background-color",
    //           "#fff"
    //         );
    //       }
    //     );
    //   }
    //   if (index == 9) {
    //     $("header .head .logo").css("visibility", "hidden");
    //     $("header .head .gnb").css("visibility", "hidden");
    //     $("header .head .headRight .tel").css("cursor", "default");
    //     $("header .head .headRight .tel p").css("visibility", "hidden");
    //     $("header .head .headRight .tel .telBg").css("visibility", "hidden");
    //   } else {
    //     $("header .head .logo").css("visibility", "visible");
    //     $("header .head .gnb").css("visibility", "visible");
    //     $("header .head .headRight .tel").css("cursor", "pointer");
    //     $("header .head .headRight .tel p").css("visibility", "visible");
    //     $("header .head .headRight .tel .telBg").css("visibility", "visible");
    //   }
    // }
    if (
      index == 2 ||
      index == 3 ||
      index == 4 ||
      index == 6 ||
      index == 8 ||
      index == 9
    ) {
      $("header .head .logo a").addClass("on");
      $("header .head .gnb .dep1 > li > a").css("color", "#333");
      $("header .head .headRight .tel").css("color", "#000");
      $("header .head .headRight .tel .telBg").css("background-color", "#000");
      $("header .head .headRight .tel .telBg div").addClass("on");
      $("header .head .headRight .hamberger").css("border-color", "#000");
      $("header .head .headRight .hamberger div").css(
        "background-color",
        "#000"
      );
      $(".gnb").hover(
        function () {
          $("header .head .logo a").addClass("on");
          $("header .head .gnb .dep1 > li > a").css("color", "#333");
          $("header .head .headRight .tel").css("color", "#000");
          $("header .head .headRight .tel .telBg").css(
            "background-color",
            "#000"
          );
          $("header .head .headRight .tel .telBg div").addClass("on");
          $("header .head .headRight .hamberger").css("border-color", "#000");
          $("header .head .headRight .hamberger div").css(
            "background-color",
            "#000"
          );
        },
        function () {
          $("header .head .logo a").addClass("on");
          $("header .head .gnb .dep1 > li > a").css("color", "#333");
          $("header .head .headRight .tel").css("color", "#000");
          $("header .head .headRight .tel .telBg").css(
            "background-color",
            "#000"
          );
          $("header .head .headRight .tel .telBg div").addClass("on");
          $("header .head .headRight .hamberger").css("border-color", "#000");
          $("header .head .headRight .hamberger div").css(
            "background-color",
            "#000"
          );
        }
      );
    } else {
      $("header .head .logo a").removeClass("on");
      $("header .head .gnb .dep1 > li > a").css("color", "#fff");
      $("header .head .headRight .tel").css("color", "#fff");
      $("header .head .headRight .tel .telBg").css("background-color", "#fff");
      $("header .head .headRight .tel .telBg div").removeClass("on");
      $("header .head .headRight .hamberger").css("border-color", "#fff");
      $("header .head .headRight .hamberger div").css(
        "background-color",
        "#fff"
      );
      $(".gnb").hover(
        function () {
          $("header .head .logo a").addClass("on");
          $("header .head .gnb .dep1 > li > a").css("color", "#333");
          $("header .head .headRight .tel").css("color", "#000");
          $("header .head .headRight .tel .telBg").css(
            "background-color",
            "#000"
          );
          $("header .head .headRight .tel .telBg div").addClass("on");
          $("header .head .headRight .hamberger").css("border-color", "#000");
          $("header .head .headRight .hamberger div").css(
            "background-color",
            "#000"
          );
        },
        function () {
          $("header .head .logo a").removeClass("on");
          $("header .head .gnb .dep1 > li > a").css("color", "#fff");
          $("header .head .headRight .tel").css("color", "#fff");
          $("header .head .headRight .tel .telBg").css(
            "background-color",
            "#fff"
          );
          $("header .head .headRight .tel .telBg div").removeClass("on");
          $("header .head .headRight .hamberger").css("border-color", "#fff");
          $("header .head .headRight .hamberger div").css(
            "background-color",
            "#fff"
          );
        }
      );
    }
    if (index == 9) {
      $("header .head .logo").css("visibility", "hidden");
      $("header .head .gnb").css("visibility", "hidden");
      $("header .head .headRight .tel").css("cursor", "default");
      $("header .head .headRight .tel p").css("visibility", "hidden");
      $("header .head .headRight .tel .telBg").css("visibility", "hidden");
    } else {
      $("header .head .logo").css("visibility", "visible");
      $("header .head .gnb").css("visibility", "visible");
      $("header .head .headRight .tel").css("cursor", "pointer");
      $("header .head .headRight .tel p").css("visibility", "visible");
      $("header .head .headRight .tel .telBg").css("visibility", "visible");
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
      console.log(i);
      if (this.activeIndex != 0 && i != length2)
        $.fn.fullpage.setAllowScrolling(false);
      if (length2 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
      if (i == 0 || i == 2) {
        $("header .head .logo a").addClass("on");
        $("header .head .gnb .dep1 > li > a").css("color", "#333");
        $("header .head .headRight .tel").css("color", "#000");
        $("header .head .headRight .tel .telBg").css(
          "background-color",
          "#000"
        );
        $("header .head .headRight .tel .telBg div").addClass("on");
        $("header .head .headRight .hamberger").css("border-color", "#000");
        $("header .head .headRight .hamberger div").css(
          "background-color",
          "#000"
        );
        $(".gnb").hover(
          function () {
            $("header .head .logo a").addClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#333");
            $("header .head .headRight .tel").css("color", "#000");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#000"
            );
            $("header .head .headRight .tel .telBg div").addClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#000");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#000"
            );
          },
          function () {
            $("header .head .logo a").addClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#333");
            $("header .head .headRight .tel").css("color", "#000");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#000"
            );
            $("header .head .headRight .tel .telBg div").addClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#000");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#000"
            );
          }
        );
      }
      if (i == 1) {
        $("header .head .logo a").removeClass("on");
        $("header .head .gnb .dep1 > li > a").css("color", "#fff");
        $("header .head .headRight .tel").css("color", "#fff");
        $("header .head .headRight .tel .telBg").css(
          "background-color",
          "#fff"
        );
        $("header .head .headRight .tel .telBg div").removeClass("on");
        $("header .head .headRight .hamberger").css("border-color", "#fff");
        $("header .head .headRight .hamberger div").css(
          "background-color",
          "#fff"
        );
        $(".gnb").hover(
          function () {
            $("header .head .logo a").addClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#333");
            $("header .head .headRight .tel").css("color", "#000");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#000"
            );
            $("header .head .headRight .tel .telBg div").addClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#000");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#000"
            );
          },
          function () {
            $("header .head .logo a").removeClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#fff");
            $("header .head .headRight .tel").css("color", "#fff");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#fff"
            );
            $("header .head .headRight .tel .telBg div").removeClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#fff");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#fff"
            );
          }
        );
      }
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length2 - 1) $.fn.fullpage.setAllowScrolling(true);
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
      if (i == 1) {
        $("header .head .logo a").addClass("on");
        $("header .head .gnb .dep1 > li > a").css("color", "#333");
        $("header .head .headRight .tel").css("color", "#000");
        $("header .head .headRight .tel .telBg").css(
          "background-color",
          "#000"
        );
        $("header .head .headRight .tel .telBg div").addClass("on");
        $("header .head .headRight .hamberger").css("border-color", "#000");
        $("header .head .headRight .hamberger div").css(
          "background-color",
          "#000"
        );
        $(".gnb").hover(
          function () {
            $("header .head .logo a").addClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#333");
            $("header .head .headRight .tel").css("color", "#000");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#000"
            );
            $("header .head .headRight .tel .telBg div").addClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#000");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#000"
            );
          },
          function () {
            $("header .head .logo a").addClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#333");
            $("header .head .headRight .tel").css("color", "#000");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#000"
            );
            $("header .head .headRight .tel .telBg div").addClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#000");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#000"
            );
          }
        );
      }
      if (i == 0 || i == 2) {
        $("header .head .logo a").removeClass("on");
        $("header .head .gnb .dep1 > li > a").css("color", "#fff");
        $("header .head .headRight .tel").css("color", "#fff");
        $("header .head .headRight .tel .telBg").css(
          "background-color",
          "#fff"
        );
        $("header .head .headRight .tel .telBg div").removeClass("on");
        $("header .head .headRight .hamberger").css("border-color", "#fff");
        $("header .head .headRight .hamberger div").css(
          "background-color",
          "#fff"
        );
        $(".gnb").hover(
          function () {
            $("header .head .logo a").addClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#333");
            $("header .head .headRight .tel").css("color", "#000");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#000"
            );
            $("header .head .headRight .tel .telBg div").addClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#000");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#000"
            );
          },
          function () {
            $("header .head .logo a").removeClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#fff");
            $("header .head .headRight .tel").css("color", "#fff");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#fff"
            );
            $("header .head .headRight .tel .telBg div").removeClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#fff");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#fff"
            );
          }
        );
      }
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length5 - 1) $.fn.fullpage.setAllowScrolling(true);
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
      if (i == 0 || i == 2) {
        $("header .head .logo a").addClass("on");
        $("header .head .gnb .dep1 > li > a").css("color", "#333");
        $("header .head .headRight .tel").css("color", "#000");
        $("header .head .headRight .tel .telBg").css(
          "background-color",
          "#000"
        );
        $("header .head .headRight .tel .telBg div").addClass("on");
        $("header .head .headRight .hamberger").css("border-color", "#000");
        $("header .head .headRight .hamberger div").css(
          "background-color",
          "#000"
        );
        $(".gnb").hover(
          function () {
            $("header .head .logo a").addClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#333");
            $("header .head .headRight .tel").css("color", "#000");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#000"
            );
            $("header .head .headRight .tel .telBg div").addClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#000");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#000"
            );
          },
          function () {
            $("header .head .logo a").addClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#333");
            $("header .head .headRight .tel").css("color", "#000");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#000"
            );
            $("header .head .headRight .tel .telBg div").addClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#000");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#000"
            );
          }
        );
      }
      if (i == 1) {
        $("header .head .logo a").removeClass("on");
        $("header .head .gnb .dep1 > li > a").css("color", "#fff");
        $("header .head .headRight .tel").css("color", "#fff");
        $("header .head .headRight .tel .telBg").css(
          "background-color",
          "#fff"
        );
        $("header .head .headRight .tel .telBg div").removeClass("on");
        $("header .head .headRight .hamberger").css("border-color", "#fff");
        $("header .head .headRight .hamberger div").css(
          "background-color",
          "#fff"
        );
        $(".gnb").hover(
          function () {
            $("header .head .logo a").addClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#333");
            $("header .head .headRight .tel").css("color", "#000");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#000"
            );
            $("header .head .headRight .tel .telBg div").addClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#000");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#000"
            );
          },
          function () {
            $("header .head .logo a").removeClass("on");
            $("header .head .gnb .dep1 > li > a").css("color", "#fff");
            $("header .head .headRight .tel").css("color", "#fff");
            $("header .head .headRight .tel .telBg").css(
              "background-color",
              "#fff"
            );
            $("header .head .headRight .tel .telBg div").removeClass("on");
            $("header .head .headRight .hamberger").css("border-color", "#fff");
            $("header .head .headRight .hamberger div").css(
              "background-color",
              "#fff"
            );
          }
        );
      }
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length6 - 1) $.fn.fullpage.setAllowScrolling(true);
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
  },
});
$(".hamberger").click(function () {});
