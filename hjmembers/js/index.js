const sectionLength = $(".section").length;
let myV = $("#myVideo").get(0);
function init() {
  $(".section").eq(0).find("[data-aos]").removeClass("aos-animate");
  setTimeout(() => {
    $(".section").eq(0).addClass("start");
    $(".section").eq(0).find("[data-aos]").addClass("aos-animate");
  }, 2200);
}
var wheelCount = 0;
$("#fullpage").fullpage({
  verticalCentered: true,
  sectionsColor: [
    "",
    "#111",
    "",
    "#fff",
    "#fff",
    "#ff1493",
    "#111",
    "#969c98",
    "#fff",
    "#f2efe8",
    "#111",
    "#f7f7f7",
    "#fff",
  ],
  afterLoad: function (anchorLink, index) {
    const realIndex = index - 1;
    sectionIndex = realIndex;
    if (index !== sectionLength) {
      $(".section").find("[data-aos]").removeClass("aos-animate");
    }
    if (realIndex === 0) {
      $(".gnb").hover(
        function () {
          $("header").css("background-color", "#fff");
          $(".head .logo").html(
            '<img src="images/logoblack.svg" alt="logoblack" />'
          );
        },
        function () {
          $("header").css("background-color", "transparent");
          $(".head .logo").html(
            '<img src="images/logowhite.svg" alt="logowhite" />'
          );
        }
      );
      $(".section")
        .eq(index - 1)
        .addClass("after-load");
      if (!$(".section").eq(index).hasClass("after-load")) {
        AOS.init();
      }
      if (!myV === false) {
        $("#myVideo").on("loadeddata", function () {
          init();
          setInterval(function () {
            if ($("#myVideo").prop("ended")) {
              init();
            }
          }, 200);
        });
      } else {
        init();
      }
    } else {
      $(".section").eq(realIndex).find("[data-aos]").addClass("aos-animate");
      if (
        index == 4 ||
        index == 5 ||
        index == 9 ||
        index == 10 ||
        index == 12 ||
        index == 13
      ) {
        $(".head .logo").html(
          '<img src="images/logoblack.svg" alt="logoblack" />'
        );
        $(".dep1 > li > a").css("color", "#111");
        $(".headRight li a").css("color", "#111");
        $(".hamberger p").html(
          '<img src="images/hambergerbl.png" alt="hambergerbl" />'
        );
        $(".gnb").hover(
          function () {
            $("header").css("background-color", "#fff");
            $(".head .logo").html(
              '<img src="images/logoblack.svg" alt="logoblack" />'
            );
          },
          function () {
            $("header").css("background-color", "transparent");
            $(".head .logo").html(
              '<img src="images/logoblack.svg" alt="logowhite" />'
            );
          }
        );
        let bool = true;
      } else {
        $(".head .logo").html(
          '<img src="images/logowhite.svg" alt="logowhite" />'
        );
        $(".dep1 > li > a").css("color", "#fff");
        $(".headRight li a").css("color", "#fff");
        $(".hamberger p").html(
          '<img src="images/hambergerwh.png" alt="hambergerwh" />'
        );
        $(".gnb").hover(
          function () {
            $("header").css("background-color", "#fff");
            $(".head .logo").html(
              '<img src="images/logoblack.svg" alt="logoblack" />'
            );
          },
          function () {
            $("header").css("background-color", "transparent");
            $(".head .logo").html(
              '<img src="images/logowhite.svg" alt="logowhite" />'
            );
          }
        );
      }
    }
  },
  onLeave: function (origin, destination, direction, index) {
    if (origin == 1 && wheelCount < 1) {
      setTimeout(() => {
        $(".txt1").find("[data-aos]").removeClass("aos-animate");
      }, 750);
    }
    $(".section").eq(origin).find("[data-aos]").removeClass("aos-animate");
  },
});
$(".close").click(function () {
  $(".mobNav").css("display", "none");
  $("body").off("scroll touchmove mousewheel");
});
$(".hamberger p").click(function () {
  $(".mobNav").css("display", "block");
  $("body").on("scroll touchmove mousewheel", function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
});
$(".navBox li").click(function () {
  let i = $(this).index();
  console.log(i);
  if ($(".navBox li").eq(i).find(".dep2").css("display") == "block") {
    $(".navBox li").eq(i).find(".dep2").css("display", "none");
    $(".navBox li").eq(i).find(".plus").css("display", "block");
    $(".navBox li").eq(i).find(".minus").css("display", "none");
  } else {
    $(".navBox li").eq(i).find(".dep2").css("display", "block");
    $(".navBox li").eq(i).find(".plus").css("display", "none");
    $(".navBox li").eq(i).find(".minus").css("display", "block");
  }
});
