function remove() {
  $("header .head .logo a").removeClass("on");
  $("header .head .gnb .dep1 > li > a").removeClass("on");
  $("header .head .tel .tel1").removeClass("on");
  $("header .head .tel .tel2").removeClass("black");
  $("header .head .tel .telBg").removeClass("on");
  $("header .head .tel .telBg div").removeClass("on");
  $(".headRight .hamberger").removeClass("on");
  $(".headRight .hamberger div").removeClass("on");
}
function add() {
  $("header .head .logo a").addClass("on");
  $("header .head .gnb .dep1 > li > a").addClass("on");
  $("header .head .tel .tel1").addClass("on");
  $("header .head .tel .tel2").addClass("black");
  $("header .head .tel .telBg").addClass("on");
  $("header .head .tel .telBg div").addClass("on");
  $(".headRight .hamberger").addClass("on");
  $(".headRight .hamberger div").addClass("on");
}
function white() {
  $("header .head .gnb .dep1 > li").hover(
    function () {
      add();
    },
    function () {
      remove();
    }
  );
}
function black() {
  $("header .head .gnb .dep1 > li").hover(
    function () {
      add();
    },
    function () {
      add();
    }
  );
}
function telwh() {
  $("header .head .tel").hover(
    function () {
      $("header .head .tel .telBg div").addClass("on");
    },
    function () {
      $("header .head .tel .telBg div").removeClass("on");
    }
  );
}
function telbl() {
  $("header .head .tel").hover(
    function () {
      $("header .head .tel .telBg div").removeClass("on");
    },
    function () {
      $("header .head .tel .telBg div").addClass("on");
    }
  );
}
$("header .head .tel").hover(
  function () {
    $("header .head .tel .tel1").addClass("act");
    $("header .head .tel .tel2").addClass("act");
    $("header .head .tel .telBg").addClass("act");
  },
  function () {
    $("header .head .tel .tel1").removeClass("act");
    $("header .head .tel .tel2").removeClass("act");
    $("header .head .tel .telBg").removeClass("act");
  }
);
let bool = true;
$(".headRight .hamberger").click(function () {
  if (bool) {
    $(".headRight").addClass("on");
    $(".headRight .hamberger").addClass("bg");
    $(".headRight .hamberger .bar1").css({
      left: "30%",
      top: "calc(50% - 0.5px)",
      transform: "rotate(45deg)",
    });
    $(".headRight .hamberger .bar2").css("display", "none");
    $(".headRight .hamberger .bar3").css({
      left: "30%",
      bottom: "calc(50% - 0.5px)",
      transform: "rotate(-45deg)",
    });
    $(".hamNav").css({ visibility: "visible", opacity: "1" });
    $(".hamNav .navBg li").addClass("on");
  } else {
    $(".headRight").removeClass("on");
    $(".headRight .hamberger").removeClass("bg");
    $(".headRight .hamberger .bar1").css({
      left: "50%",
      top: "32%",
      transform: "translateX(-50%) rotate(0)",
    });
    $(".headRight .hamberger .bar2").css("display", "block");
    $(".headRight .hamberger .bar3").css({
      left: "50%",
      bottom: "32%",
      transform: "translateX(-50%) rotate(0)",
    });
    $(".hamNav").css({ visibility: "hidden", opacity: "0" });
    $(".hamNav .navBg li").removeClass("on");
  }
  bool = !bool;
});
const sectionLength = $(".section").length;
var wheelCount = 0;
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
    if (index !== sectionLength) {
      $(".section").find("[data-aos]").removeClass("aos-animate");
    }
    if (realIndex === 0) {
      $(".section")
        .eq(index - 1)
        .addClass("after-load");
      if (!$(".section").eq(index).hasClass("after-load")) {
        AOS.init();
      }
      white();
      remove();
      telwh();
      // $("#section1 .mainTxt .txtTop").removeClass("on");
      // $("#section1 .mainTxt .txtBot").removeClass("on");
      // $("#section2 .mainBox .mainLeft").removeClass("on");
      // $("#section2 .mainBox .mainRight p").removeClass("on");
      // $("#section3 .mainBox .mainLeft").removeClass("on");
      // $("#section3 .mainBox .mainRight .flower").removeClass("on");
      // $("#section3 .mainBox .mainRight .tower").removeClass("on");
      // $("#section4 .videoBox .txtTop").removeClass("on");
      // $("#section4 .videoBox .txtBot").removeClass("on");
      // $("#section5 .mainBox .mainLeft p").removeClass("on");
      // $("#section5 .mainBox .mainRight > div p").removeClass("on");
      // $("#section5 .mainBox .mainRight ul li:nth-child(1) p").removeClass("on");
      // $("#section5 .mainBox .mainRight ul li:nth-child(1) .txtBox").removeClass(
      //   "on"
      // );
      // $("#section5 .mainBox .mainRight ul li:nth-child(2) p").removeClass("on");
      // $("#section5 .mainBox .mainRight ul li:nth-child(2) .txtBox").removeClass(
      //   "on"
      // );
      // $("#section7 .mainTxt .txtBox h4").removeClass("on");
      // $("#section7 .mainTxt .txtBox div").removeClass("on");
      // $("#section7 .mainTxt .txtBox div h1").removeClass("on");
      // $("#section7 .mainTxt .txtBox p").removeClass("on");
      // $("#section8 .mainBox .mainTxt .txtBox").removeClass("on");
      // $("#section8 .mainBox .mainTxt .subImg img").removeClass("on");
      // $("#section8 .mainBox .mainImg").removeClass("on");
      // $("#section9 .mainBox .con1 .titBox").addClass("on");
      // $("#section9 .mainBox .con1 .conWrap").removeClass("on");
      // $("#section9 .mainBox .con2").removeClass("on");
      // $("#section9 .mainBox .con3").removeClass("on");
      // $("#section10 .mainBox .mainImg").removeClass("on");
      // $("#section10 .mainBox .mainTxt .txtBox").removeClass("on");
      // $("#section10 .mainBox .mainTxt .subImg img").removeClass("on");
      // $("#section11 .mainBox .con1 .titBox").removeClass("on");
      // $("#section11 .mainBox .con1 .conWrap").removeClass("on");
      // $("#section11 .mainBox .con2").removeClass("on");
      // $("#section11 .mainBox .con3").removeClass("on");
      // $("#section12 .mainBox .whiteWrap .top").removeClass("on");
      // $("#section12 .mainBox .whiteWrap .right").removeClass("on");
      // $("#section12 .mainBox .whiteWrap .bot").removeClass("on");
      // $("#section12 .mainBox .whiteWrap .left").removeClass("on");
      // $("#section12 .mainBox .mainTxt .mainLeft").removeClass("on");
      // $("#section12 .mainBox .mainTxt .mainRight").removeClass("on");
      // $("#section13 .mainBg").removeClass("on");
      // $("#section13 .high .flex").removeClass("on");
      // $("#section14 .mainBg").removeClass("on");
      // $("#section14 .high .flex").removeClass("on");
    } else {
      $(".section").eq(realIndex).find("[data-aos]").addClass("aos-animate");
      if (
        index == 2 ||
        index == 3 ||
        index == 4 ||
        index == 6 ||
        index == 8 ||
        index == 9
      ) {
        black();
        add();
        telbl();
      } else {
        white();
        remove();
        telwh();
      }
      // if (index == 2) {
      //   $("#section1 .mainTxt .txtTop").addClass("on");
      //   $("#section1 .mainTxt .txtBot").addClass("on");
      //   $("#section3 .mainBox .mainLeft").addClass("on");
      //   $("#section3 .mainBox .mainRight .flower").addClass("on");
      //   $("#section3 .mainBox .mainRight .tower").addClass("on");
      // } else {
      //   $("#section1 .mainTxt .txtTop").removeClass("on");
      //   $("#section1 .mainTxt .txtBot").removeClass("on");
      //   $("#section2 .mainBox .mainLeft").removeClass("on");
      //   $("#section2 .mainBox .mainRight p").removeClass("on");
      //   $("#section3 .mainBox .mainLeft").removeClass("on");
      //   $("#section3 .mainBox .mainRight .flower").removeClass("on");
      //   $("#section3 .mainBox .mainRight .tower").removeClass("on");
      // }
      // if (index == 3) {
      //   $("#section4 .videoBox .txtTop").addClass("on");
      //   $("#section4 .videoBox .txtBot").addClass("on");
      //   $("#section5 .mainBox .mainLeft p").addClass("on");
      //   $("#section5 .mainBox .mainRight > div p").addClass("on");
      //   $("#section5 .mainBox .mainRight ul li:nth-child(1) p").addClass("on");
      //   $("#section5 .mainBox .mainRight ul li:nth-child(1) .txtBox").addClass(
      //     "on"
      //   );
      //   $("#section5 .mainBox .mainRight ul li:nth-child(2) p").addClass("on");
      //   $("#section5 .mainBox .mainRight ul li:nth-child(2) .txtBox").addClass(
      //     "on"
      //   );
      // } else {
      //   $("#section4 .videoBox .txtTop").removeClass("on");
      //   $("#section4 .videoBox .txtBot").removeClass("on");
      //   $("#section5 .mainBox .mainLeft p").removeClass("on");
      //   $("#section5 .mainBox .mainRight > div p").removeClass("on");
      //   $("#section5 .mainBox .mainRight ul li:nth-child(1) p").removeClass(
      //     "on"
      //   );
      //   $(
      //     "#section5 .mainBox .mainRight ul li:nth-child(1) .txtBox"
      //   ).removeClass("on");
      //   $("#section5 .mainBox .mainRight ul li:nth-child(2) p").removeClass(
      //     "on"
      //   );
      //   $(
      //     "#section5 .mainBox .mainRight ul li:nth-child(2) .txtBox"
      //   ).removeClass("on");
      // }
      // if (index == 5) {
      //   $("#section7 .mainTxt .txtBox h4").addClass("on");
      //   $("#section7 .mainTxt .txtBox div").addClass("on");
      //   $("#section7 .mainTxt .txtBox div h1").addClass("on");
      //   $("#section7 .mainTxt .txtBox p").addClass("on");
      //   $("#section9 .mainBox .con1 .titBox").addClass("on");
      //   $("#section9 .mainBox .con1 .conWrap").addClass("on");
      //   $("#section9 .mainBox .con2").addClass("on");
      //   $("#section9 .mainBox .con3").addClass("on");
      // } else {
      //   $("#section7 .mainTxt .txtBox h4").removeClass("on");
      //   $("#section7 .mainTxt .txtBox div").removeClass("on");
      //   $("#section7 .mainTxt .txtBox div h1").removeClass("on");
      //   $("#section7 .mainTxt .txtBox p").removeClass("on");
      //   $("#section8 .mainBox .mainTxt .txtBox").removeClass("on");
      //   $("#section8 .mainBox .mainTxt .subImg img").removeClass("on");
      //   $("#section8 .mainBox .mainImg").removeClass("on");
      //   $("#section9 .mainBox .con1 .titBox").removeClass("on");
      //   $("#section9 .mainBox .con1 .conWrap").removeClass("on");
      //   $("#section9 .mainBox .con2").removeClass("on");
      //   $("#section9 .mainBox .con3").removeClass("on");
      // }
      // if (index == 6) {
      //   $("#section10 .mainBox .mainImg").addClass("on");
      //   $("#section10 .mainBox .mainTxt .txtBox").addClass("on");
      //   $("#section10 .mainBox .mainTxt .subImg img").addClass("on");
      //   $("#section12 .mainBox .whiteWrap .top").addClass("on");
      //   $("#section12 .mainBox .whiteWrap .right").addClass("on");
      //   $("#section12 .mainBox .whiteWrap .bot").addClass("on");
      //   $("#section12 .mainBox .whiteWrap .left").addClass("on");
      //   $("#section12 .mainBox .mainTxt .mainLeft").addClass("on");
      //   $("#section12 .mainBox .mainTxt .mainRight").addClass("on");
      // } else {
      //   $("#section10 .mainBox .mainImg").removeClass("on");
      //   $("#section10 .mainBox .mainTxt .txtBox").removeClass("on");
      //   $("#section10 .mainBox .mainTxt .subImg img").removeClass("on");
      //   $("#section11 .mainBox .con1 .titBox").removeClass("on");
      //   $("#section11 .mainBox .con1 .conWrap").removeClass("on");
      //   $("#section11 .mainBox .con2").removeClass("on");
      //   $("#section11 .mainBox .con3").removeClass("on");
      //   $("#section12 .mainBox .whiteWrap .top").removeClass("on");
      //   $("#section12 .mainBox .whiteWrap .right").removeClass("on");
      //   $("#section12 .mainBox .whiteWrap .bot").removeClass("on");
      //   $("#section12 .mainBox .whiteWrap .left").removeClass("on");
      //   $("#section12 .mainBox .mainTxt .mainLeft").removeClass("on");
      //   $("#section12 .mainBox .mainTxt .mainRight").removeClass("on");
      // }
      // if (index == 7) {
      //   $("#section13 .mainBg").addClass("on");
      //   $("#section13 .high .flex").addClass("on");
      //   $("#section14 .mainBg").addClass("on");
      //   $("#section14 .high .flex").addClass("on");
      // } else {
      //   $("#section13 .mainBg").removeClass("on");
      //   $("#section13 .high .flex").removeClass("on");
      //   $("#section14 .mainBg").removeClass("on");
      //   $("#section14 .high .flex").removeClass("on");
      // }
      if (index == 9) {
        $("header .head .logo").css("visibility", "hidden");
        $("header .head .gnb").css("visibility", "hidden");
        $("header .head .tel").css("cursor", "default");
        $("header .head .tel p").css("visibility", "hidden");
        $("header .head .tel .telBg").css("visibility", "hidden");
      } else {
        $("header .head .logo").css("visibility", "visible");
        $("header .head .gnb").css("visibility", "visible");
        $("header .head .tel").css("cursor", "pointer");
        $("header .head .tel p").css("visibility", "visible");
        $("header .head .tel .telBg").css("visibility", "visible");
      }
    }
  },
  onLeave: function (origin, destination, direction, index) {
    $(".section").eq(origin).find("[data-aos]").removeClass("aos-animate");
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
      // $("#section1 .mainTxt .txtTop").removeClass("on");
      // $("#section1 .mainTxt .txtBot").removeClass("on");
      // $("#section2 .mainBox .mainLeft").removeClass("on");
      // $("#section2 .mainBox .mainRight p").removeClass("on");
      // $("#section3 .mainBox .mainLeft").removeClass("on");
      // $("#section3 .mainBox .mainRight .flower").removeClass("on");
      // $("#section3 .mainBox .mainRight .tower").removeClass("on");
      if (i == 0) {
        black();
        add();
        telbl();
        // $("#section1 .mainTxt .txtTop").addClass("on");
        // $("#section1 .mainTxt .txtBot").addClass("on");
      }
      if (i == 1) {
        white();
        remove();
        telwh();
        // $("#section2 .mainBox .mainLeft").addClass("on");
        // $("#section2 .mainBox .mainRight p").addClass("on");
      }
      if (i == 2) {
        black();
        add();
        telbl();
        // $("#section3 .mainBox .mainLeft").addClass("on");
        // $("#section3 .mainBox .mainRight .flower").addClass("on");
        // $("#section3 .mainBox .mainRight .tower").addClass("on");
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
      // $("#section4 .videoBox .txtTop").removeClass("on");
      // $("#section4 .videoBox .txtBot").removeClass("on");
      // $("#section5 .mainBox .mainLeft p").removeClass("on");
      // $("#section5 .mainBox .mainRight > div p").removeClass("on");
      // $("#section5 .mainBox .mainRight ul li:nth-child(1) p").removeClass("on");
      // $("#section5 .mainBox .mainRight ul li:nth-child(1) .txtBox").removeClass(
      //   "on"
      // );
      // $("#section5 .mainBox .mainRight ul li:nth-child(2) p").removeClass("on");
      // $("#section5 .mainBox .mainRight ul li:nth-child(2) .txtBox").removeClass(
      //   "on"
      // );
      if (i == 0) {
        // $("#section4 .videoBox .txtTop").addClass("on");
        // $("#section4 .videoBox .txtBot").addClass("on");
      }
      if (i == 1) {
        // $("#section5 .mainBox .mainLeft p").addClass("on");
        // $("#section5 .mainBox .mainRight > div p").addClass("on");
        // $("#section5 .mainBox .mainRight ul li:nth-child(1) p").addClass("on");
        // $("#section5 .mainBox .mainRight ul li:nth-child(1) .txtBox").addClass(
        //   "on"
        // );
        // $("#section5 .mainBox .mainRight ul li:nth-child(2) p").addClass("on");
        // $("#section5 .mainBox .mainRight ul li:nth-child(2) .txtBox").addClass(
        //   "on"
        // );
      }
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
      // $("#section7 .mainTxt .txtBox h4").removeClass("on");
      // $("#section7 .mainTxt .txtBox div").removeClass("on");
      // $("#section7 .mainTxt .txtBox div h1").removeClass("on");
      // $("#section7 .mainTxt .txtBox p").removeClass("on");
      // $("#section8 .mainBox .mainTxt .txtBox").removeClass("on");
      // $("#section8 .mainBox .mainTxt .subImg img").removeClass("on");
      // $("#section8 .mainBox .mainImg").removeClass("on");
      // $("#section9 .mainBox .con1 .titBox").removeClass("on");
      // $("#section9 .mainBox .con1 .conWrap").removeClass("on");
      // $("#section9 .mainBox .con2").removeClass("on");
      // $("#section9 .mainBox .con3").removeClass("on");
      if (i == 0) {
        white();
        remove();
        telwh();
        // $("#section7 .mainTxt .txtBox h4").addClass("on");
        // $("#section7 .mainTxt .txtBox div").addClass("on");
        // $("#section7 .mainTxt .txtBox div h1").addClass("on");
        // $("#section7 .mainTxt .txtBox p").addClass("on");
      }
      if (i == 1) {
        black();
        add();
        telbl();
        // $("#section8 .mainBox .mainTxt .txtBox").addClass("on");
        // $("#section8 .mainBox .mainTxt .subImg img").addClass("on");
        // $("#section8 .mainBox .mainImg").addClass("on");
      }
      if (i == 2) {
        white();
        remove();
        telwh();
        // $("#section9 .mainBox .con1 .titBox").addClass("on");
        // $("#section9 .mainBox .con1 .conWrap").addClass("on");
        // $("#section9 .mainBox .con2").addClass("on");
        // $("#section9 .mainBox .con3").addClass("on");
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
      // $("#section10 .mainBox .mainImg").removeClass("on");
      // $("#section10 .mainBox .mainTxt .txtBox").removeClass("on");
      // $("#section10 .mainBox .mainTxt .subImg img").removeClass("on");
      // $("#section11 .mainBox .con1 .titBox").removeClass("on");
      // $("#section11 .mainBox .con1 .conWrap").removeClass("on");
      // $("#section11 .mainBox .con2").removeClass("on");
      // $("#section11 .mainBox .con3").removeClass("on");
      // $("#section12 .mainBox .whiteWrap .top").removeClass("on");
      // $("#section12 .mainBox .whiteWrap .right").removeClass("on");
      // $("#section12 .mainBox .whiteWrap .bot").removeClass("on");
      // $("#section12 .mainBox .whiteWrap .left").removeClass("on");
      // $("#section12 .mainBox .mainTxt .mainLeft").removeClass("on");
      // $("#section12 .mainBox .mainTxt .mainRight").removeClass("on");
      if (i == 0) {
        black();
        add();
        telbl();
        // $("#section10 .mainBox .mainImg").addClass("on");
        // $("#section10 .mainBox .mainTxt .txtBox").addClass("on");
        // $("#section10 .mainBox .mainTxt .subImg img").addClass("on");
      }
      if (i == 1) {
        white();
        remove();
        telwh();
        // $("#section11 .mainBox .con1 .titBox").addClass("on");
        // $("#section11 .mainBox .con1 .conWrap").addClass("on");
        // $("#section11 .mainBox .con2").addClass("on");
        // $("#section11 .mainBox .con3").addClass("on");
      }
      if (i == 2) {
        black();
        add();
        telbl();
        // $("#section12 .mainBox .whiteWrap .top").addClass("on");
        // $("#section12 .mainBox .whiteWrap .right").addClass("on");
        // $("#section12 .mainBox .whiteWrap .bot").addClass("on");
        // $("#section12 .mainBox .whiteWrap .left").addClass("on");
        // $("#section12 .mainBox .mainTxt .mainLeft").addClass("on");
        // $("#section12 .mainBox .mainTxt .mainRight").addClass("on");
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
      // $("#section13 .mainBg").removeClass("on");
      // $("#section13 .high .flex").removeClass("on");
      // $("#section14 .mainBg").removeClass("on");
      // $("#section14 .high .flex").removeClass("on");
      if (i == 0) {
        // $("#section13 .mainBg").addClass("on");
        // $("#section13 .high .flex").addClass("on");
      }
      if (i == 1) {
        // $("#section14 .mainBg").addClass("on");
        // $("#section14 .high .flex").addClass("on");
      }
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length7 - 1) $.fn.fullpage.setAllowScrolling(true);
    },
  },
});
