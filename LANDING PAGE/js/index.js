$(function () {
  $("#fullpage").fullpage({
    sectionsColor: ["#fff", "#fff"],
    scrollingSpeed: 1000,
    onLeave: function (origin, destination, direction) {
      $("#fullpage").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      swiper.mousewheel.disable();
      $(".sec2 .site1").css("background-size", "0");
      $(".sec2 .site2").css("background-size", "0");
      $(".sec2 .site3").css("background-size", "0");
      $(".sec2 .title").css({ top: "-58px", left: "0" });
      $(".sec2 .thumbnail").css("opacity", "1");
      $(".sec2 .inner").css("display", "none");
    },
    afterLoad: function (anchorLink, index) {
      $("#fullpage").off("scroll mousewheel");
      if (!$(".fp-completely .sec2 swiper-wrapper").length > 0)
        $("#fullpage").off("touchmove");
      if (swiper) swiper.mousewheel.enable();
      if (!$(".sec2").hasClass("active")) $.fn.fullpage.setAllowScrolling(true);
    },
  });
  var length = $(".sec2 .swiper-slide").length;
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    freeMode: false,
    speed: 1000,
    mousewheel: true,
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    on: {
      slideChange: function () {
        var i = this.activeIndex;
        if (this.activeIndex != 0 && i != length)
          $.fn.fullpage.setAllowScrolling(false);
        if (length == 2 && i == 0) $.fn.fullpage.setAllowScrolling(false);
        $(".sec2 .site1").css("background-size", "0");
        $(".sec2 .site2").css("background-size", "0");
        $(".sec2 .site3").css("background-size", "0");
        $(".sec2 .title").css({ top: "-58px", left: "0" });
        $(".sec2 .thumbnail").css("opacity", "1");
        $(".sec2 .inner").css("display", "none");
      },
      slideChangeTransitionEnd: function () {
        var i = this.activeIndex;
        if (i == 0 || i >= length - 1) $.fn.fullpage.setAllowScrolling(true);
      },
    },
  });
});
$(".sec2 .site .mainBox .info .thumbnail").hover(
  function () {
    $(".sec2 .site1").css("background-size", "cover");
    $(".sec2 .site2").css("background-size", "cover");
    $(".sec2 .site3").css("background-size", "cover");
    $(".sec2 .title").css({ top: "100px", left: "100px" });
    $(".sec2 .thumbnail").css("opacity", "0");
    $(".sec2 .inner").css("display", "block");
  },
  function () {
    $(".sec2 .site1").css("background-size", "0");
    $(".sec2 .site2").css("background-size", "0");
    $(".sec2 .site3").css("background-size", "0");
    $(".sec2 .title").css({ top: "-58px", left: "0" });
    $(".sec2 .thumbnail").css("opacity", "1");
    $(".sec2 .inner").css("display", "none");
  }
);
