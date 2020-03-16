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

  // Click Function
  // Prestasi Section
  let counter = 0;

  $("#sec4.container .content .arrow .right").click(() => {
    counter += 100;

    $("#sec4.container .content .center .wrapper").css({
      transform: "translateX(-" + counter + "%)"
    });

    if (counter >= 300) {
      $("#sec4.container .content .arrow .right").css({
        display: "none"
      });
      $("#sec4.container .content .arrow .left").css({
        display: "block"
      });
    } else {
      $("#sec4.container .content .arrow .right").css({
        display: "block"
      });
      $("#sec4.container .content .arrow .left").css({
        display: "block"
      });
    }
  });

  $("#sec4.container .content .arrow .left").click(() => {
    counter -= 100;

    $("#sec4.container .content .center .wrapper").css({
      transform: "translateX(-" + counter + "%)"
    });

    if (counter < 100) {
      $("#sec4.container .content .arrow .left").css({
        display: "none"
      });
      $("#sec4.container .content .arrow .right").css({
        display: "block"
      });
    } else {
      $("#sec4.container .content .arrow .left").css({
        display: "block"
      });
      $("#sec4.container .content .arrow .right").css({
        display: "block"
      });
    }
  });

  console.log(counter);
});
