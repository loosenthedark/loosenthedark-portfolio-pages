$(document).ready(function() {
  if ($(window).scrollTop() <= 500) {
    $('#btn-back-to-top').hide();
  }
  // 'Bootstrap 4 simple back to top with smooth scroll' code block adapted from https://bbbootstrap.com/snippets/simple-back-top-smooth-scroll-17111555
  $(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
  $('#btn-back-to-top').fadeIn();
  } else {
  $('#btn-back-to-top').fadeOut();
  }
  });
  
  $('#btn-back-to-top').click(function() {
  $("html, body").animate({
  scrollTop: 0
  }, 1000);
  return false;
  });
  });