$("#fullpage").fullpage({
  verticalCentered: true,
  sectionsColor: ["", "", "", "", "#fff", "#fff", "#f00f0f"],
  scrollingSpeed: 1700,
  navigation: true,
  navigationPosition: "right",
  navigationTooltips: [
    "First page",
    "Second page",
    "Third page",
    "Fourth page",
    "Fifth page",
    "Six and last page",
  ],
  afterLoad: function (anchorLink, index) {
    if (index == 5) {
      $(".head .logo a").html('<img src="images/logobl.svg" alt="logobl" />');
      $(".head .dep1>li>a")
        .css({ opacity: "0.6", color: "#191919" })
        .hover(
          function () {
            $(this).css("opacity", "1");
          },
          function () {
            $(this).css("opacity", "0.6");
          }
        );
      $(".head .dep2>li>a")
        .css({ color: "#191919", opacity: "0.6" })
        .hover(
          function () {
            $(this).css("opacity", "1");
          },
          function () {
            $(this).css("opacity", "0.6");
          }
        );
      $(".headRight li a").css("color", "#191919");
      $(".headRight span").html(
        '<img src="images/arrowlangbl.svg" alt="arrowlangbl"/>'
      );
      $("header .head .navW767.mob li").css("background", "#191919");
      $("#fp-nav ul li a span").css("background", "#191919");
    } else {
      $(".head .logo a").html('<img src="images/logowh.svg" alt="logowh" />');
      $(".head .dep1>li>a")
        .css({ opacity: "1", color: "#fff" })
        .hover(
          function () {
            $(this).css("opacity", "1");
          },
          function () {
            $(this).css("opacity", "1");
          }
        );
      $(".head .dep2>li>a")
        .css({ color: "#fff", opacity: "0.6" })
        .hover(
          function () {
            $(this).css("opacity", "1");
          },
          function () {
            $(this).css("opacity", "0.6");
          }
        );
      $(".headRight li a").css("color", "#fff");
      $(".headRight span").html(
        '<img src="images/arrowlangwh.svg" alt="arrowlangwh"/>'
      );
      $("header .head .navW767.mob li").css("background", "#fff");
      $("#fp-nav ul li a span").css("background", "#fff");
    }
  },
});
$("header .head .navW767").click(function () {
  $("header").css("display", "none");
  $(".navBox").css("display", "block");
  $("body").on("scroll touchmove mousewheel", function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
});
$(".navBox .flexBox .close").click(function () {
  $("header").css("display", "block");
  $(".navBox").css("display", "none");
  $("body").off("scroll touchmove mousewheel");
});
$(".navBox nav .dep1>li").click(function () {
  $(".navBox nav .dep1>li p").removeClass("on");
  $(".navBox nav .dep1>li .dep2").removeClass("on");
  let navLi = $(this).index();
  $(".navBox nav .dep1>li").eq(navLi).find("p").addClass("on");
  $(".navBox nav .dep1>li").eq(navLi).find(".dep2").addClass("on");
});
$(".siteBox .close").click(function () {
  $("header").css("display", "block");
  $(".siteBox").css("display", "none");
});
$(".family").click(function () {
  if ($(".family .dep1").css("visibility") == "visible") {
    $(".family .dep1").css("visibility", "hidden");
    $(".family label").css("transform", "translateY(-50%) rotate(0)");
  } else {
    $(".family .dep1").css("visibility", "visible");
    $(".family label").css("translateY(-50%) rotate(180deg)");
  }
  if ($(".family .dep1").css("display") == "none") {
    $(".siteBox").css("display", "block");
  } else {
    $(".siteBox").css("display", "none");
  }
});
$(".family label").click(function () {
  if ($(".family .dep1").css("visibility") == "visible") {
    $(".family .dep1").css("visibility", "hidden");
    $(".family label").css("transform", "translateY(-50%) rotate(0)");
  } else {
    $(".family .dep1").css("visibility", "visible");
    $(".family label").css("translateY(-50%) rotate(180deg)");
  }
  if ($(".family .dep1").css("display") == "none") {
    $(".siteBox").css("display", "block");
  } else {
    $(".siteBox").css("display", "none");
  }
});
$(".fp-tooltip").html("");
