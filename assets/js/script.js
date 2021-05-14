$(document).ready(function () {
  // 'Offset scroll anchor in HTML with Bootstrap 4 fixed navbar' code block adapted from https://stackoverflow.com/questions/49331572/offset-scroll-anchor-in-html-with-bootstrap-4-fixed-navbar/49331692 | https://codepen.io/anon/pen/NYRvaL
  var divId;
  $(".dropdown-item").click(function () {
    divId = $(this).attr("href");
    if ($(window).width() < 992) {
      $("html, body").animate(
        {
          scrollTop: $(divId).offset().top - 62.08,
        },
        300
      );
    } else if ($(window).width() < 1440) {
      $("html, body").animate(
        {
          scrollTop: $(divId).offset().top - 32,
        },
        300
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $(divId).offset().top - 80,
        },
        300
      );
    }
  });

  $(".navbar-nav .dropdown-item").on("click", function () {
    $(".navbar-collapse").collapse("hide");
    $(".dropdown-menu").collapse("hide");
  });

  if ($(window).scrollTop() <= 500) {
    $("#btn-back-to-top").hide();
  }
  // 'Bootstrap 4 simple back to top with smooth scroll' code block adapted from https://bbbootstrap.com/snippets/simple-back-top-smooth-scroll-17111555
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#btn-back-to-top").fadeIn();
    } else {
      $("#btn-back-to-top").fadeOut();
    }
  });

  $("#btn-back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });

  // Code block adapted from: https://stackoverflow.com/questions/50968181/bootstrap-4-carousel-individual-data-interval-on-each-slide
  $.fn.carousel.Constructor.prototype.cycle = function (event) {
    if (!event) {
      this._isPaused = false;
    }

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }

    if (this._config.interval && !this._isPaused) {
      var $ele = $(".carousel-item-next");
      var newInterval = $ele.data("interval") || this._config.interval;
      this._interval = setInterval(
        (document.visibilityState ? this.nextWhenVisible : this.next).bind(
          this
        ),
        newInterval
      );
    }
  };

  $(".social-links").click(function () {
    $(this).children().css({ transform: "scale(1)", color: "#fff" });
  });

  $(".social-links").mouseenter(function () {
    $(this).children().css({ transform: "scale(1.4)", color: "#005960" });
  });

  $(".social-links").mouseleave(function () {
    $(this).children().css({ transform: "scale(1)", color: "#fff" });
  });

  $(".social-links").focusin(function () {
    $(this).children().css({ transform: "scale(1.4)", color: "#005960" });
  });

  $(".social-links").focusout(function () {
    $(this).children().css({ transform: "scale(1)", color: "#fff" });
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

});
