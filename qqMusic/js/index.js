$(function(){
// 内容区
// 内容1
$('.content1').mouseenter(function(){
		// $('.btn_left').css('display','block');
		$('.content1 .btn_left').fadeIn(500);

	})
$('.content1').mouseleave(function(){
		// $('.btn_left').css('display','none');
		$('.content1 .btn_left').fadeOut(500);
	})
$('.content1').mouseenter(function(){
		// $('.btn_right').css('display','block');
		$('.content1 .btn_right').fadeIn(500);

	})
$('.content1').mouseleave(function(){
		// $('.btn_right').css('display','none');
		$('.content1 .btn_right').fadeOut(500);

	})
// 按钮
var n=0;
$('.content1_silde_btn .btn_left').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	
	$('.content1_palyList_ul').css('margin-left',-1220*n+'px');
	$('.slide_dotted').eq(n).css('opacity','1').siblings().css('opacity','0.5');

})
$('.content1_silde_btn .btn_right').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	$('.content1_palyList_ul').css('margin-left',-1220*n+'px');
	$('.slide_dotted').eq(n).css('opacity','1').siblings().css('opacity','0.5');

})
// 小图标
$('.content1_silde .content1_silde_left').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	
	$('.content1_palyList_ul').css('margin-left',-1220*n+'px');
	$(this).css('opacity','1').siblings().css('opacity','0.5');
})
$('.content1_silde .content1_silde_right').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	$('.content1_palyList_ul').css('margin-left',-1220*n+'px');
	$(this).css('opacity','1').siblings().css('opacity','0.5');

})
//图片播放按钮

$('.content1_palyList_ul li').hover(function(){
	$(this).children().children('img').eq(1).css('display','inline-block')
},function(){
	$(this).children().children('img').eq(1).css('display','none')
})





// 内容二
$('.content2 ').mouseenter(function(){
		// $('.btn_left').css('display','block');
		$('.content2 .content2_btn_left').fadeIn(500);

	})
$('.content2').mouseleave(function(){
		// $('.btn_left').css('display','none');
		$('.content2 .content2_btn_left').fadeOut(500);
	})
$('.content2 ').mouseenter(function(){
		// $('.btn_right').css('display','block');
		$('.content2 .content2_btn_right').fadeIn(500);

	})
$('.content2').mouseleave(function(){
		// $('.btn_right').css('display','none');
		$('.content2 .content2_btn_right').fadeOut(500);

	})
// 按钮
var n=0;
$('.content2 .content2_btn_left').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	$('.content2 .slide_dotted').eq(n).css('opacity','1').siblings().css('opacity','0.5');
	$(' .content2_songList').css('margin-left',-1205*n+'px');

})
$('.content2 .content2_btn_right').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	$('.content2_songList').css('margin-left',-1205*n+'px');
	$('.content2 .slide_dotted').eq(n).css('opacity','1').siblings().css('opacity','0.5');

})
// 小图标
$('.content2_silde .content2_silde_left').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	$('.content2_songList').css('margin-left',-1205*n+'px');
	$(this).css('opacity','1').siblings().css('opacity','0.5');

})
$('.content2_silde .content2_silde_right').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	$('.content2_songList').css('margin-left',-1205*n+'px');
	$(this).css('opacity','1').siblings().css('opacity','0.5');

})


// 内容三
$('.content3 ').mouseenter(function(){
		// $('.btn_left').css('display','block');
		$('.content3 .content3_btn_left').fadeIn(500);

	})
$('.content3').mouseleave(function(){
		// $('.btn_left').css('display','none');
		$('.content3 .content3_btn_left').fadeOut(500);
	})
$('.content3 ').mouseenter(function(){
		// $('.btn_right').css('display','block');
		$('.content3 .content3_btn_right').fadeIn(500);

	})
$('.content3').mouseleave(function(){
		// $('.btn_right').css('display','none');
		$('.content3 .content3_btn_right').fadeOut(500);

	})
// 按钮
var n=0;
$('.content3 .content3_btn_left').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	
	$(' .content3 .songRecommend_box_ul').css('margin-left',-1220*n+'px');
	$('.content3 .slide_dotted').eq(n).css('opacity','1').siblings().css('opacity','0.5');

})
$('.content3 .content3_btn_right').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	$('.content3 .songRecommend_box_ul').css('margin-left',-1220*n+'px');
	$('.content3 .slide_dotted').eq(n).css('opacity','1').siblings().css('opacity','0.5');

})
// 小图标
$('.content3_silde .content3_silde_left').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	
	$('.songRecommend_box_ul').css('margin-left',-1220*n+'px');
	$(this).css('opacity','1').siblings().css('opacity','0.5');
})
$('.content3_silde .content3_silde_right').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	$('.songRecommend_box_ul').css('margin-left',-1220*n+'px');
	$(this).css('opacity','1').siblings().css('opacity','0.5');

})


// playMusic
$('.bigBowl').click(function(){
	window.open('playMusic.html');
})

// 排行榜
$('.topList_box_ul li').hover(function(){
	$(this).children().children('i').eq(1).css('display','inline-block');
	// $(this).css('background-size','600%');
},function(){
	$(this).children().children('i').eq(1).css('display','none');
	// $(this).css('background-image','scale(1.0)');


})











})