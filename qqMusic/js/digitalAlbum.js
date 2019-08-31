$(function(){
	// 左右按钮
	$('.banner_box').hover(function(){
		$('.banner_box .btn_left').stop().animate({'width':'100px'},500);
	},function(){
		$('.banner_box .btn_left').stop().animate({'width':'0px'},500);

	})
	$('.banner_box').hover(function(){
		$(' .banner_box .btn_right').stop().animate({'width':'100px'},500);
	},function(){
		$('.banner_box .btn_right').stop().animate({'width':'0px'},500);

	})
	// 自动轮播
	var n=0;
	var timer;
	function play(){
		timer=setInterval(function(){
			n++;
			if(n==3){
				$('.slide_icon i').eq(0).addClass('current_icon').siblings('i').removeClass('current_icon');
			}
			if(n>3){
				$('.banner_ul').css('left','0px');
				n=1;
			}
			$('.banner_ul').stop().animate({'left':-1200*n+'px'},100);
			$('.slide_icon i').eq(n).addClass('current_icon').siblings('i').removeClass('current_icon');

		},1500);
	}
	play();
	$('.banner_box').hover(function(){
		clearInterval(timer);
	},function(){
		play();

	})

	



	// btn
	
	$('.btn_left').click(function(){
		n++;
		if(n==3){
				$('.slide_icon i').eq(0).addClass('current_icon').siblings('i').removeClass('current_icon');
			}
		if(n>3){
			$('.banner_ul').css('left','0px');
			n=1;
		}
		$('.banner_ul').stop().animate({'left':-1200*n+'px'},100);
		$('.slide_icon i').eq(n).addClass('current_icon').siblings('i').removeClass('current_icon');

		// $('.banner_ul ').children('li').eq(n).children('img').css('transform','scale(1.2)');
		// console.log($('.banner_ul ').children('li').eq(n).children('img'));

	})
	$('.btn_right').click(function(){
		n--;
		if(n<0){
			$('.banner_ul').css('left','-3240px');
			n=2;
		}
		$('.banner_ul').stop().animate({'left':-1200*n+'px'},100);
		$('.slide_icon i').eq(n).addClass('current_icon').siblings('i').removeClass('current_icon');

		// $('.banner_ul ').children('li').eq(n).children('img').css('transform','scale(1.2)');


	})

	// 圆点按钮
	$('.slide_icon i').click(function(){
		var  m=$(this).index();
		$('.banner_ul').stop().animate({'left':-1200*m+'px'},100);
		$('.slide_icon i').eq(m).addClass('current_icon').siblings('i').removeClass('current_icon');

	})






})