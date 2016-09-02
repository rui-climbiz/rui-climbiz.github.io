function redraw() {
  $('.main').css(
    'min-height',
    $(window).height() - $('.header').height() - $('.footer').height());
  if ($(window).width() < 768) {
    $('article').height('auto');
  } else {
    $('article').height($('.main').height());
  }
}
$(window).resize(function() {
  redraw();
});
$(document).ready(function() {
  redraw();
});
