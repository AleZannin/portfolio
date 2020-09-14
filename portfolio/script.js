$(".animated").addClass("delay-1000");

$(document).ready(function() {
  if ($(window).width() > 1025) {
    $(".navbar").removeClass("collapse");
  }
});

$(function() {
  $("#minimenu").click(function() {
    $("nav").slideToggle();
  });

  $(window).bind("resize", function() {
    if ($("#minimenu").css("display") == "none") {
      $("nav").show();
    } else {
      $("nav").hide();
    }
  });

  $("nav li a").click(function(event) {
    var targetSection = $(this).attr("href");
    var scrTo = $(targetSection).offset().top;
    $("html, body").animate(
      {
        scrollTop: scrTo
      },
      1000
    );
    console.log($("#minimenu").css("display"));
    if ($("#minimenu").css("display") == "block") {
      $("nav").slideUp();
    }
    event.preventDefault();
  });

  $(window).on("scroll", function(e) {
    if ($(window).scrollTop() >= $("header").height()) $("header").fadeIn(1200);
    /* else $("header").fadeOut(1500);*/
  });
});

