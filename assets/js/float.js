$(document).ready(function () {
  
  // jQuery utility function adapted from https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
  $(function () {
    $("#card-profile-img-clipadvisor").addClass("icon-float");
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
          } else if (
            pageBottom - elementBottom >= 75 &&
            elementTop - pageTop > 75
          ) {
            return elementTop <= pageBottom && elementBottom >= pageTop;
          }
        },
      };

      var Utils = new Utils();

      var isClipadvisorInMiddle = Utils.isElementInMiddle(
        $("#card-profile-img-clipadvisor"),
        false
      );

      if (isClipadvisorInMiddle) {
        $("#card-profile-img-clipadvisor").addClass("icon-float");
      } else {
        $("#card-profile-img-clipadvisor").removeClass("icon-float");
      }

      var isStrikeForceInMiddle = Utils.isElementInMiddle(
        $("#card-profile-img-strikeforce"),
        false
      );

      if (isStrikeForceInMiddle) {
        $("#card-profile-img-strikeforce").addClass("icon-float");
      } else {
        $("#card-profile-img-strikeforce").removeClass("icon-float");
      }

      var isMofHInMiddle = Utils.isElementInMiddle(
        $("#card-profile-img-mofh"),
        false
      );

      if (isMofHInMiddle) {
        $("#card-profile-img-mofh").addClass("icon-float");
      } else {
        $("#card-profile-img-mofh").removeClass("icon-float");
      }
    });
  });
});