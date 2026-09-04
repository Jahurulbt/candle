(function($){

	'use strict';

	//code starts

	$('.menu-icon i.fa-bars').on('click', function(){
		$('.menu').animate({left:0});
		// $('.menu-icon i.fa-times').show();
		// $(this).hide();
	});

	$('.menu i.fa-times').on('click', function(){
		$('.menu').animate({left:-250});
		// $('.menu-icon i.fa-bars').show();
		// $(this).hide();
	});


	

	$(window).resize(function(){

		var screenSize = $(window).width();

		if (screenSize > 991) {
			$('.main-menu').removeAttr('style');
		}
	});

	// Fixed header
	$(window).scroll(function(){
		var scrollSize = $(window).scrollTop();
		if(scrollSize > 100){
			$('header').addClass('fixed-header');
		}else{
				$('header').removeClass('fixed-header');
			}
	})

	// Arrow section
	$(window).scroll(function(){
		var scrolSize = $(window).scrollTop();
		if(scrolSize > 500){
			$('.arrow-sec').fadeIn();
		}else{
			$('.arrow-sec').fadeOut();
		}
	})
	$('.arrow-sec i').on('click', function(){
		$('html').animate({scrollTop:0})
	})


	








}) (jQuery);