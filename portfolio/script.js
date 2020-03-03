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

const url =
  "https://script.google.com/macros/s/AKfycbx1IyKUefvcAWKEcZETtPD_ATR3vmrhCvs0-VhMBrLCslbxCIc/exec";
const form = document.forms.namedItem("myForm");
console.log(form);

form.addEventListener("submit", function(e) {
  e.preventDefault();
  createMessage();
});

function createMessage() {
  console.log("submitted");
  const formData = new FormData(form);
  console.log(formData);
  fetch(url, {
    method: "POST",
    body: formData
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let tempMessage = "";
      if (data.status === 200) {
        tempMessage = "Message Sent!";
        form.reset();
      } else {
        tempMessage = "Something went wrong";
      }

      document.querySelector(".output").innerHTML = tempMessage;
    });
}
