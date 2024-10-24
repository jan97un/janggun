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
      $(".sec2 .Ani h1.titleani").removeClass("on");
    } else {
      $(".section").eq(realIndex).find("[data-aos]").addClass("aos-animate");
      if (index == 2) {
        $(".sec2 .Ani h1.titleani").eq(0).addClass("on");
      } else {
        $(".sec2 .Ani h1.titleani").removeClass("on");
      }
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
      if (index == 5) {
        $("#section7 .mainTxt .txtBox h1").addClass("on");
      } else {
        $("#section7 .mainTxt .txtBox h1").removeClass("on");
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
      if (i == 0) {
      }
      console.log(i);
      if (this.activeIndex != 0 && i != length2)
        $.fn.fullpage.setAllowScrolling(false);
      if (length2 == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
      if (i == 0 || i == 2) {
        black();
        add();
        telbl();
      }
      if (i == 1) {
        white();
        remove();
        telwh();
      }
      $(".sec2 .Ani h1.titleani").removeClass("on");
      $(".sec2 .Ani h1.titleani").eq(i).addClass("on");
    },
    slideChangeTransitionStart: function () {
      // AOS.init();
    },
    slideChangeTransitionEnd: function () {
      var i = this.activeIndex;
      if (i == 0 || i >= length2 - 1) $.fn.fullpage.setAllowScrolling(true);
      // AOS.init();
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
        black();
        add();
        telbl();
      }
      if (i == 0 || i == 2) {
        white();
        remove();
        telwh();
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
        black();
        add();
        telbl();
      }
      if (i == 1) {
        white();
        remove();
        telwh();
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
AOS.init();
