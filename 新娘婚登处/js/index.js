window.onload = function(){
	$('.atttention_list ul li').eq(0).children().eq(1).show();

	$('.atttention_list ul li').eq(0).children().eq(0).children().eq(0).css({'background-position': '-10px 0'});

	$('.atttention_list ul li .every').click(function(){
		if($(this).next().css('display') == 'none'){
			$(this).next().slideDown();
			$(this).children().eq(0).css({'background-position': '-10px 0'});
		}
		else{
			$(this).next().slideUp();
			$(this).children().eq(0).css({'background-position': '0 0'});
		}
	});

	var ind = 0;
	var show_ind = 0;
	var sum = 0;
	$('.list_nav ul li').each(function(){
		sum += 1;
	});

	var page = Math.ceil(sum / 5);

	$('.list_nav ul li').eq(0).css({'background-color': '#eee'});
	$('.list .map img').eq(0).show();

	$('.list_nav ul li').click(function(){
		$('.list .map img').eq(show_ind).hide();
		$('.list_nav ul li').eq(show_ind).css({'background-color': '#fff'});

		show_ind = $(this).index();

		$('.list .map img').eq(show_ind).show();
		$('.list_nav ul li').eq(show_ind).css({'background-color': '#eee'});
	});

	
	for(var i = 0; i < 5; i++){
		$('.list_nav ul li').eq(ind * 5 + i ).css({'display': 'block'});
	}

	$('.list_nav .next span').click(function(){
		ind = (ind + 1) % page;
		$('.list_nav ul li').css({'display': 'none'});

		for(var i = 0; i < 5; i++){
			$('.list_nav ul li').eq(ind * 5 + i ).css({'display': 'block'});
		}

		$('.list .map img').eq(show_ind).hide();
		$('.list_nav ul li').eq(show_ind).css({'background-color': '#fff'});

		show_ind = ind * 5;

		$('.list .map img').eq(show_ind).show();
		$('.list_nav ul li').eq(show_ind).css({'background-color': '#eee'});

	});

	var screen_width = document.body.clientWidth;

	$('.list .map').css({'width': screen_width - 325 + 'px'});


	var str = "";

	$('.tishi ul li').click(function(){
		$('.tishi ul li').removeClass('xuanzhong');
		$(this).addClass('xuanzhong');

		str = $(this).text();

		$('.search_box input').val(str);
	});

	$('.clear_bg').click(function(){
		$('.search_box input').val('');
		$('.tishi').css({'display': 'none'});
	});

	$(document).click(function(e){
		var v_id = $(e.target).attr('id'); 

		if(v_id == 'input'){
			$('.tishi').css({'display': 'block'});
		}
		else{
			if((e.target).tagName == 'LI'){
				return;
			}
			else{
				$('.tishi').css({'display': 'none'});
			}
		}
	});
	
}



