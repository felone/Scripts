//Script para crear 2 estados al evento Click


			$('.btn-menu').on('click', function(){
			    var isToggled = $(this).data('isToggled');
			    if(isToggled){
			        $(".menu").transition({ x:299});
			    } else {
			       $(".menu").transition({ x:0});
			    } 

			    $(this).data('isToggled', !isToggled)
			});
