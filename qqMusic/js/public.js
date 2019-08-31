$(function(){
	// 头部
	$('.client').mouseenter(function(){
		$('.client_details').css('display','block');
	})
	$('.client').mouseleave(function(){
		$('.client_details').css('display','none');
	})
	$('.header_music').mouseenter(function(){
		$('.header_music .icon_btn').css('display','block');
	})
	$('.header_music').mouseleave(function(){
		$('.header_music .icon_btn').css('display','none');
	})
	$('.header_vip').mouseenter(function(){
		$('.header_vip .icon_btn').css('display','block');
	})
	$('.header_vip').mouseleave(function(){
		$('.header_vip .icon_btn').css('display','none');
	})
	$('.search_input i').hover(function(){
		$('.search_input i').css('background-position','0 -60px')
	})
	$(' .openVIP').mouseenter(function(){
		$(' .openVIP').css('background-color','#2caf6f');

	})
	$(' .openVIP').mouseleave(function(){
		$(' .openVIP').css('background-color','#31c27c');
	})
	$(' .openMusic').mouseenter(function(){
		$(' .openMusic').css('background-color','#ededed');
	})
	$(' .openMusic').mouseleave(function(){
		$(' .openMusic').css('background-color','#fff');
	})

// 导航栏
$('.nav a').click(function(){
		$(this).css('color','#31c27c').parent().siblings().children().css('color','#000');
		$('.nav a').hover(function(){
			$(this).css('color','#31c27c').parent().siblings().children().css('color','#000');

		})
	})
		// $('.nav li:nth-child(1) a').css('color','#31c27c');



// 内容区
// 内容1
$('.content1').mouseenter(function(){
		// $('.btn_left').css('display','block');
		$('.btn_left').fadeIn(500);

	})
$('.content1').mouseleave(function(){
		// $('.btn_left').css('display','none');
		$('.btn_left').fadeOut(500);
	})
$('.content1').mouseenter(function(){
		// $('.btn_right').css('display','block');
		$('.btn_right').fadeIn(500);

	})
$('.content1').mouseleave(function(){
		// $('.btn_right').css('display','none');
		$('.btn_right').fadeOut(500);

	})
// 按钮
var n=0;
$('.content1_silde_btn .btn_left').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	
	$('.content1_palyList_ul').css('margin-left',-1220*n+'px');
})
$('.content1_silde_btn .btn_right').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	$('.content1_palyList_ul').css('margin-left',-1220*n+'px');
})
// 小图标
$('.content1_silde .content1_silde_left').click(function(){
	n++;
	if(n>1){
		n=0;
	}
	
	$('.content1_palyList_ul').css('margin-left',-1220*n+'px');
	$(this).css('opacity','0.3').siblings().css('opacity','1');
})
$('.content1_silde .content1_silde_right').click(function(){
	n--;
	if(n<0){
		n=1;
	}
	$('.content1_palyList_ul').css('margin-left',-1220*n+'px');
	$(this).css('opacity','0.3').siblings().css('opacity','1');

})

// 侧导航栏
$(window).scroll(function(){
	var h=$(window).scrollTop();
	if(h>400){
		$('.backTop').css('display','block');

	}else{
		$('.backTop').css('display','none');

	}
})

// login
$('.qq_login').hover(function(){
	$('.qq_login .qq_number').css('display','inline-block');
},function(){
	$('.qq_login .qq_number').css('display','none');

})
$('.top_login').click(function(){
	$('.login').css('display','block');
})
$('.close').click(function(){
	$('.login').css('display','none');
})

$('.qq_login1').click(function(){
	$('.login_qq').css('display','block');
	$('.login_wechat').css('display','none');
	$('.wechat_login1').removeClass('current_index');
	$('.qq_login1').addClass('current_index');
})
$('.wechat_login1').click(function(){
	$('.login_qq').css('display','none');
	$('.login_wechat').css('display','block');
	$('.qq_login1').removeClass('current_index');
	$('.wechat_login1').addClass('current_index');
})








})