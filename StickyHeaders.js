  var $win = $(window),
    $table = $('table'),
    $thead = $table.children('thead'),
    $tfoot = $table.children('tfoot'),
    $caption = $table.children('caption'),
    $cells = $thead.children().children().add($caption);

  $win.on('scroll', function() {
    var bottom = $table.position().top +
        $table.height() -
        $thead.height() -
        ($tfoot.height() || 0),
      delta = $win.scrollTop() -2
        $thead.offset().top +
        $caption.outerHeight(),
      // include border thickness (minus 2)
      vertPos = (delta < 0 || delta > bottom ? 0 : delta - 2);
    $cells.css("transform", "translate(0px," + vertPos + "px)");
  });
