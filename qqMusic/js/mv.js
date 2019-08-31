$(function(){
	$('.mvList_content .pic').hover(function(){
		$(this).next().fadeIn(500);
	},function(){
		$(this).next().fadeOut(500);

	})

	$('.poxiao').click(function(){
		window.open('playVideo.html');
	})






})