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
    }
  },
});
$(".family").click(function () {
  if ($(".family .navBar").css("visibility") == "visible") {
    $(".family .navBar").css("visibility", "hidden");
    $(".family label").css("transform", "translateY(-50%) rotate(0)");
  } else {
    $(".family .navBar").css("visibility", "visible");
    $(".family label").css("translateY(-50%) rotate(180deg)");
  }
});
$(".family label").click(function () {
  if ($(".family .navBar").css("visibility") == "visible") {
    $(".family .navBar").css("visibility", "hidden");
    $(".family label").css("transform", "translateY(-50%) rotate(0)");
  } else {
    $(".family .navBar").css("visibility", "visible");
    $(".family label").css("translateY(-50%) rotate(180deg)");
  }
});
$(".fp-tooltip").html("");
