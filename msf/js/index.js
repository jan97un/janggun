$(window).scroll(function () {
  let scrTop = $(document).scrollTop();
  console.log(scrTop);
  if (scrTop >= 400) {
    $(".arrowAni").css("cursor", "pointer");
    $(".arrowAni .arrowBd").css({
      height: "48px",
      borderColor: "#212121",
    });
    $(".arrowAni .arrowBd .arrowWh").css("display", "none");
    $(".arrowAni .arrowBd .arrowBl").css("display", "block");
  } else {
    $(".arrowAni").css("cursor", "default");
    $(".arrowAni .arrowBd").css({
      height: "80px",
      borderColor: "#fff",
    });
    $(".arrowAni .arrowBd .arrowWh").css("display", "block");
    $(".arrowAni .arrowBd .arrowBl").css("display", "none");
  }
});
$(".arrowAni").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    400
  );
});
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 3000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  var that = this;
  var delta = 200 - Math.random() * 100;
  if (this.isDeleting) {
    delta /= 2;
  }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function () {
    that.tick();
  }, delta);
};
window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};
let majbar = document.querySelector(".major .bar");
let minbar = document.querySelector(".minor .bar");
$("#category1").click(function () {
  if ($(majbar).css("display") == "block") {
    $(majbar).css("display", "none");
  } else {
    $(majbar).css("display", "block");
  }
});
$(".major .bar li").click(function () {
  let majtxt = $(this).text();
  // console.log(txt);
  $("#category1").find("span").text(majtxt);
  $(majbar).css("display", "none");
});
$(".major .all").click(function () {
  $(".minor .med").css("display", "block");
  $(".minor .non").css("display", "block");
});
$(".major .med").click(function () {
  $(".minor .non").css("display", "none");
  $(".minor .med").css("display", "block");
});
$(".major .non").click(function () {
  $(".minor .med").css("display", "none");
  $(".minor .non").css("display", "block");
});

$("#category2").click(function () {
  if ($(minbar).css("display") == "block") {
    $(minbar).css("display", "none");
  } else {
    $(minbar).css("display", "block");
  }
});
$(".minor .bar li").click(function () {
  let mintxt = $(this).text();
  // console.log(txt);
  $("#category2").find("span").text(mintxt);
  $(minbar).css("display", "none");
  let index = $(this).index();
  // console.log(index);
  $(".search strong")
    .off("click")
    .on("click", function () {
      $(".job>li").eq(index).css("display", "block");
      $("body").css("overflow", "hidden");
    });
  $(".job .close")
    .off("click")
    .on("click", function () {
      $(".job>li").eq(index).css("display", "none");
      $("body").css("overflow", "visible");
    });
});
$(".minor .med").click(function () {
  $("#category1").find("span").html("의료");
});
$(".minor .non").click(function () {
  $("#category1").find("span").html("비의료");
});
$(".people li").click(function () {
  $(".storyBox li blockquote").removeClass("on");
  $(".people li").removeClass("on");
  $(".people li .worker .bdRed").removeClass("on");
  $(".people li .worker .bdRed img").removeClass("on");
  $(".people li .name").removeClass("on");
  let p = $(this).index();
  $(".storyBox li").eq(p).find("blockquote").addClass("on");
  $(".people li").eq(p).addClass("on");
  $(".people li").eq(p).find(".worker .bdRed").addClass("on");
  $(".people li").eq(p).find(".worker .bdRed img").addClass("on");
  $(".people li").eq(p).find(".name").addClass("on");
});
let num = 1;
setTimeout(function () {
  $(".people li").eq(0).trigger("click");
});
setInterval(function () {
  $(".people li").eq(num).trigger("click");
  num = (num + 1) % $(".people li").length;
}, 3000);
$(".slide-all").css("height", "560px");
$(".inputBox").click(function () {
  let lab = $(this).find("input");
  lab.toggleClass("on");
  if ($("#med").hasClass("on") == true && $("#non").hasClass("on") == false) {
    $(".slide-all").css("height", "0");
    $(".slide-med").css("height", "560px");
    $(".slide-non").css("height", "0");
  } else if (
    $("#med").hasClass("on") == false &&
    $("#non").hasClass("on") == true
  ) {
    $(".slide-all").css("height", "0");
    $(".slide-med").css("height", "0");
    $(".slide-non").css("height", "560px");
  } else if (
    $("#med").hasClass("on") == true &&
    $("#non").hasClass("on") == true
  ) {
    $(".slide-all").css("height", "560px");
    $(".slide-med").css("height", "0");
    $(".slide-non").css("height", "0");
  } else if (
    $("#med").hasClass("on") == false &&
    $("#non").hasClass("on") == false
  ) {
    $(".slide-all").css("height", "560px");
    $(".slide-med").css("height", "0");
    $(".slide-non").css("height", "0");
  }
});
let medLength = $(".slide-med .swiper-wrapper").children().length;
// console.log(medLength);
$(".inputBox.med span").html("(" + medLength + ")");
let nonLength = $(".slide-non .swiper-wrapper").children().length / 2;
$(".inputBox.non span").html("(" + nonLength + ")");
$(".slide-all .swiper-wrapper>div").click(function () {
  let cl = $(this).attr("class");
  // console.log(cl);
  let clnum = parseInt(cl.replace(/\D/g, ""));
  // console.log(clnum);
  $(".job>li")
    .eq(clnum - 1)
    .css("display", "block");
  $("body").css("overflow", "hidden");
  $(".job .close").click(function () {
    $(".job>li")
      .eq(clnum - 1)
      .css("display", "none");
    $("body").css("overflow", "visible");
  });
});
$(".slide-med .swiper-wrapper .med").click(function () {
  let clmed = $(this).attr("class");
  // console.log(clmed);
  let mednum = parseInt(clmed.replace(/\D/g, ""));
  console.log(mednum);
  $(".job>li")
    .eq(mednum - 1)
    .css("display", "block");
  $("body").css("overflow", "hidden");
  $(".job .close").click(function () {
    $(".job>li")
      .eq(mednum - 1)
      .css("display", "none");
    $("body").css("overflow", "visible");
  });
});
$(".slide-non .swiper-wrapper .non").click(function () {
  let clnon = $(this).attr("class");
  // console.log(clmed);
  let nonnum = parseInt(clnon.replace(/\D/g, ""));
  console.log(nonnum);
  $(".job>li")
    .eq(nonnum - 1)
    .css("display", "block");
  $("body").css("overflow", "hidden");
  $(".job .close").click(function () {
    $(".job>li")
      .eq(nonnum - 1)
      .css("display", "none");
    $("body").css("overflow", "visible");
  });
});
$(".qa li").click(function () {
  let q = $(this).index();
  //   console.log(q);
  if ($(".qa li").eq(q).find(".answer").css("height") == "112px") {
    $(".qa li").eq(q).find(".quest span").removeClass("on");
    $(".qa li").eq(q).find(".answer").css("height", "0");
  } else {
    $(".quest span").removeClass("on");
    $(".qa li").eq(q).find(".quest span").addClass("on");
    $(".answer").css("height", "0");
    $(".qa li").eq(q).find(".answer").css("height", "112px");
  }
});
$(".recruit .checklist li").click(function () {
  let span = $(this).find("span");
  if (span.css("background-color") == "rgb(227, 0, 18)") {
    span
      .css({ backgroundColor: "#fafafa", borderColor: "#e0e0e0" })
      .html('<img src="images/checkboxbl.svg" alt="checkboxbl"/>');
  } else {
    span
      .css({ backgroundColor: "#e30012", borderColor: "#e30012" })
      .html('<img src="images/checkboxwh.svg" alt="checkboxwh"/>');
  }
});
