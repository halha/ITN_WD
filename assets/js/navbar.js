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

    if (scroll > screenHeight * 0.5) {
      $("nav").addClass("fixed");
      $("nav ul li a").addClass("scroll");
      $("nav .show").removeClass("white");
      $("nav .hide").removeClass("white");
      $("nav ul").removeClass("primary");

      $("nav").css({
        backgroundColor: "var(--secondary-bg)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, .1)"
      });
      $("nav ul li a").css({
        color: "var(--black)"
      });
      $("nav .logo").css({
        color: "var(--black)",
        visibility: "visible"
      });
    } else {
      $("nav").removeClass("fixed");
      $("nav ul li a").removeClass("scroll");
      $("nav .show").addClass("white");
      $("nav .hide").addClass("white");
      $("nav ul").addClass("primary");

      $("nav").css({
        backgroundColor: "unset",
        boxShadow: "unset"
      });
      $("nav .logo").css({
        color: "var(--white)",
        visibility: "hidden"
      });
      $("nav ul li a").css({
        color: "var(--white)"
      });
    }
  });
});
