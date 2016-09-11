function redraw() {
  if ($(window).width() > 768) {
    $('.s-main').css(
      'min-height',
      $(window).height() - $('.s-header').height() - $('.s-footer').height() - 4);
    $('.s-article').innerHeight($('.s-main').height());
  } else {
    $('.s-main').css('min-height', 'auto');
    $('.s-article').innerHeight('auto');
  }
}
$(window).resize(function() {
  redraw();
});
$(document).ready(function() {
  redraw();
  $('.s-nav__trigger').on('click', function() {
  $(this).toggleClass('menu__trigger--active');
    $('.s-nav__menu').slideToggle('fast');
  });
});

/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }

})();
