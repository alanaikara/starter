"use strict";

$(window).scroll(function (e) {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.jumbotron').css('top', scrolled * 0.0150 + 'rem');
  $('.jumbotron > .jumbotron-content').css('top', -(scrolled * -0.075) + 'rem');
}

;