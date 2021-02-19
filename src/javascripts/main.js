$(".ham-menu-trigger").click(function() {
  $(".ham-menu-trigger").toggleClass("ham-menu-trigger_close");
});
$(document).ready(function() {
  $('.js_ham-menu').sidr({side: 'right'});
  $(".js_ham-menu-close").click(function() {
    $.sidr('close', 'sidr');
    return false;
  });
});
$(window).on("scroll", function() {
  if($(this).scrollTop() > 0) {
    $(".header").addClass("scroll");
  }
  else {
    $(".header").removeClass("scroll");
  }
});