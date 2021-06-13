(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

            // START MENU JS
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > 500) {
                    $('.navbar-light').addClass('menu-shrink');
                } else {
                    $('.navbar-light').removeClass('menu-shrink');
                }
            });	
  
            $('.navbar-nav .nav-item .nav-link').on('click', function(e){
              var anchor = $(this);
              $('html, body').stop().animate({
                  scrollTop: $(anchor.attr('href')).offset().top - 100
              }, 1500);
              e.preventDefault();
          });
          $(document).on('click','.navbar-collapse.show',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });


        
        // Home slider JS
        $('.home-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
        })   
    


        //Counter Up
        $('.counter').counterUp({
            delay: 7,
            time: 2000
        });

        //review slider
        $('.review-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
        })      

        //logo slider
        $('.logo-slider').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav: false,
            dots:false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                }
            }
                   
        })    

        //map area 
		$(".map-wrap").click(function(){
			$("#map-box").toggle(1000)
		})

        // Back to top 
        $('body').append('<div id="toTop" class="back-ttop-btn"><i class="icofont-arrow-up"></i></div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 
        $('#toTop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });


        // WOW JS
        new WOW().init();

        
         // PRELOADER
         jQuery(window).on('load',function(){
            jQuery(".loader").fadeOut(500);
        });




    }); 
})(jQuery);





