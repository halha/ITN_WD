$(document).ready(() => {
  // Scroll function
  $(window).scroll(e => {
    let scroll = $(window).scrollTop();
    let screenHeight = window.innerHeight;

    if (scroll > screenHeight * 1 - 1) {
      $(".to-top").css({
        bottom: "5%"
      });

      $(".to-top").hover(
        () => {
          $(".to-top #up-normal").addClass("hidden");
          $(".to-top #up-hover").removeClass("hidden");
        },
        () => {
          $(".to-top #up-hover").addClass("hidden");
          $(".to-top #up-normal").removeClass("hidden");
        }
      );
    } else {
      $(".to-top").css({
        bottom: "-20%"
      });
    }
  });
});
