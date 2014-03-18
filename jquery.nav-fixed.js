 // Se crea la clase 'fixed' la cual se 
 // debe declarar en el archivo CSS y
 // nombrar al menu con dicha clase



 $(document).ready(function() {
              var navpos = $('.menu').offset();
              console.log(navpos.top);
                $(window).bind('scroll', function() {
                  if ($(window).scrollTop() > navpos.top) {
                    $('.menu').addClass('fixed');
                   }
                   else {
                     $('.menu').removeClass('fixed');
                   }
                });
});
