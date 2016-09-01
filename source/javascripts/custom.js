function redraw() {
  $('.container-fluid').css('min-height', $(window).height());
  if ($(window).width() < 768) {
    $('article').height('auto');
  } else {
    $('article').height(Math.max($('article').height(), $('aside').height()));
  }
}
$(window).resize(function() {
  redraw();
});
$(document).ready(function() {
  redraw();
});
