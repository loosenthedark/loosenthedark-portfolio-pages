$(document).ready(function () {
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
    $(this).children().css({"transform": "scale(1)", "color": "#fff"});
  });

  $(".social-links").mouseenter(function () {
    $(this).children().css({"transform": "scale(1.4)", "color": "#005960"});
  });

  $(".social-links").mouseleave(function () {
    $(this).children().css({"transform": "scale(1)", "color": "#fff"});
  });

  $(".social-links").focusin(function () {
    $(this).children().css({"transform": "scale(1.4)", "color": "#005960"});
  });

  $(".social-links").focusout(function () {
    $(this).children().css({"transform": "scale(1)", "color": "#fff"});
  });
});
