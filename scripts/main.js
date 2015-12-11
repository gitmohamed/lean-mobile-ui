
/**
* Lean Mobile UI - Mohamed Hassan 2015
* License: MIT
**/

(function(){
  $(document).on('ready', function(){
    // Main page animations
    if ($(window).width() <= 700) {

      $('nav ul li').css({ 'opacity': 0 });

      $('.menu-icon').click(function(){
        $('nav').removeClass('shrink').addClass('menuIn');
        $('nav ul li').each(function(i){
          setTimeout(function(){
            $('nav ul li').eq(i).css({'opacity': 1}, 250);
          }, 100*(i + 1));
        });
      });

      $('.exit-btn').click(function(){
        $(this.parentNode).addClass('shrink');
        setTimeout(function(){
          $('nav').removeClass('menuIn');
        }, 1000)
        $('nav ul li').css({ 'opacity': 0 });
      });
    }
  });
})();
