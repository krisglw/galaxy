$(function(){

	var n=0;
	var timer1;
	function play(){
		timer1=setInterval(function(){
			n++;
			if(n>400){
				$('.lyric_scroll ').css('marginTop','0px');
				n=0;
			}
			$('.lyric_scroll ').animate({'margin-top':-7*n+'px'},1000);
			console.log($('.iyric p').eq(n))
		},1500)
	}
	play();
	var timer2;
	function go(){
		timer2=setInterval(function(){
			n++;
			if(n>600){
				n=0;
			}
			$('.palyIcon ').animate({'left':1*n+'px'},500);
			// console.log($('.iyric p').eq(n))
		},700)
	}
	go();
	// paly
	$('.change').click(function(){
	 a=$(this).css('animation-play-state');
	console.log(a);
	if(a=='running'){
		$(this).css({"animation-play-state":"paused"});
		$('audio')[0].pause();
		$('.change').removeClass('glyphicon glyphicon-pause');
		$('.change').addClass('glyphicon glyphicon-play');
		clearInterval(timer1);
		clearInterval(timer2);
		
		
		}else{
		$(this).css({"animation-play-state":"running"});
		$('audio')[0].play();
		$('.change').removeClass('glyphicon glyphicon-play');
		$('.change').addClass('glyphicon glyphicon-pause');
		play();
		go();
	
		}
		
	})
	console.log($('.iyric').height())

	// iyric
	// var n=0;
	// var timer;
	// function play(){
	// 	timer=setInterval(function(){
	// 		n++;
	// 		$('.lyric p').eq(n).animate({'margin-top':-10*n+'px'},500);
	// 		console.log($('.iyric p').eq(n))
	// 	},1000)
	// }
	// play();
	// $('img').hover(function(){
	// 	clearInterval(timer);
	// },function(){
	// 	play();
	// })


})