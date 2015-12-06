(function(){
  $(document).on('ready', function(){
    // Main page animations
    $('.menu-icon').click(function(){
      if (!$('.menu-icon .mdi').hasClass('mdi-close')) {
        $('.menu-icon .mdi').removeClass('mdi-format-align-right').addClass('mdi-close');
        $(this).css({'background': '#f2f2f2', 'color': '#111'});

        // Bring in menu
        $('nav').removeClass('anti-clicked').addClass('clicked');
      } else {
        $('.menu-icon .mdi').removeClass('mdi-close').addClass('mdi-format-align-right');
        $(this).css({'background': '#111', 'color': '#f2f2f2'});
        $('nav').removeClass('clicked').addClass('anti-clicked');
      }
    });
  });
})();
