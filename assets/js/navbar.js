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

    if (scroll > 40) {
      $("nav").css({
        backgroundColor: "var(--clay)"
      });
    } else {
      $("nav").css({
        backgroundColor: "unset"
      });
    }
  });
});
