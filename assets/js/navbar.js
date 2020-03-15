$(document).ready(() => {
  $("nav .show").click(() => {
    $("nav ul").css({
      right: "0"
    });
  });

  $("nav ul .hide").click(() => {
    $("nav ul").css({
      right: "-100%"
    });
  });

  // Scroll function
  $(window).scroll(e => {
    let scroll = $(window).scrollTop();
    let screenHeight = window.innerHeight;

    if (scroll > 40) {
      $("nav").css({
        backgroundColor: "var(--primary-bg)"
      });
    } else {
      $("nav").css({
        backgroundColor: "unset"
      });
    }

    if (scroll > screenHeight * 0.5) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }
  });
});
