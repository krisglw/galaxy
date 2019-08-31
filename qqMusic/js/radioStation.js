$(function(){
	$('.radio .pic').hover(function(){
		$(this).next().fadeIn(500);
	},function(){
		$(this).next().fadeOut(500);

	})

	// sideNav
	$(window).scroll(function(){
		 var h=$(window).scrollTop();
		 if(h>300){
		 	$('.radio_sideBar').css('position','fixed');
		 	$('.radio_sideBar').css('top','10px');

		 }
		 else{
		 	$('.radio_sideBar').css('position','relative');
		 	$('.radio_sideBar').css('top','0');
		 }
})

	// $('.index1').click(function(){
	// 	$('.box1').css('display','block').siblings().css('display','none');
	// }
	// $('.index2').click(function(){
	// 	$('.box2').css('display','block').siblings().css('display','none');
	// }
	// $('.index3').click(function(){
	// 	$('.box2').css('display','block').siblings().css('display','none');
	// }



		$('.index1').click(function(){
			var h=$('.box1').offset().top;
			$('html,body').stop().animate({'scrollTop':h-20},1000);
			$(this).addClass('current_item').siblings().removeClass('current_item');
		})
		$('.index2').click(function(){
			var h=$('.box2').offset().top;
			$('html,body').stop().animate({'scrollTop':h-20},1000);
			$(this).addClass('current_item').siblings().removeClass('current_item');
			// $(this).css('after','#31c27c').siblings().css('after','#ccc');

		})
		$('.index3').click(function(){
			var h=$('.box3').offset().top;
			console.log(h);
			$('html,body').stop().animate({'scrollTop':h-20},1000);
			$(this).addClass('current_item').siblings().removeClass('current_item');
		})
		$('.index4').click(function(){
			var h=$('.box4').offset().top;
			$('html,body').animate({'scrollTop':h-20},1000);
			$(this).addClass('current_item').siblings().removeClass('current_item');

		})
		$('.index5').click(function(){
			var h=$('.box5').offset().top;
			$('html, body').animate({'scrollTop':h-20},1000);
			$(this).addClass('current_item').siblings().removeClass('current_item');

		})
		$('.index6').click(function(){
			var h=$('.box6').offset().top;
			$('html ,body').animate({'scrollTop':h-20},1000);
			$(this).addClass('current_item').siblings().removeClass('current_item');

		})
		$('.index7').click(function(){
			var h=$('.box7').offset().top;
			$('html, body').animate({'scrollTop':h-20},1000);
			$(this).addClass('current_item').siblings().removeClass('current_item');

		})
		$('.index8').click(function(){
			var h=$('.box8').offset().top;
			$('html, body').animate({'scrollTop':h-20},1000);
			$(this).addClass('current_item').siblings().removeClass('current_item');

		})
		$('.index9').click(function(){
			var h=$('.box9').offset().top;
			$('html, body').animate({'scrollTop':h},1000);
			$(this).addClass('current_item').siblings().removeClass('current_item');

		})
	
	






})