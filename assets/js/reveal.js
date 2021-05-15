ScrollReveal().reveal(".card-skills", { delay: 300, useDelay: "once" });
ScrollReveal().reveal(".card-focus", { delay: 300, useDelay: "once" });

$(document).ready(function () {
  // jQuery utility function adapted from https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
  $(function () {
    $(window).scroll(function () {
      function Utils() {}

      Utils.prototype = {
        constructor: Utils,
        isElementInMiddle: function (element, fullyInView) {
          var pageTop = $(window).scrollTop();
          var pageBottom = pageTop + $(window).height();
          elementTop = $(element).offset().top;
          elementBottom = elementTop + $(element).height();

          if (fullyInView === true) {
            return pageTop < elementTop && pageBottom > elementBottom;
          } else if ($(window).width() < 768 && elementTop - pageTop < 300 || 768 <= $(window).width() && $(window).width() < 992 && elementTop - pageTop < 800) {
            return elementTop <= pageBottom || elementBottom >= pageTop;
          }
        },
      };

      var Utils = new Utils();

      var isSkillsCardInMiddle = Utils.isElementInMiddle(
        $(".card-skills"),
        false
      );

      if (isSkillsCardInMiddle) {
        $(".featured-list-item .fa-check").addClass("flashing");
        if ($(window).width() >= 768) {
          $(".skills-blurb").addClass("fade-in");
        }
      }

      var isFocusCardInMiddle = Utils.isElementInMiddle(
        $(".card-focus"),
        false
      );

      if (isFocusCardInMiddle) {
        $(".featured-list-item .fa-user-cog").addClass("flashing");
      }
    });
  });
});
