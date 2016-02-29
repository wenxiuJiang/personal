window.onload = function(){
	//头图部分两个粉色三角块
	$('.sanjiao_left').show().animate({'top': '131px'}, 700);
	$('.sanjiao_right').show().animate({'top': '437px'}, 700);

	//品牌秀场的菜单
	$('.show_nav .pinpaijiansuo').click(function(){
		$('.show_nav ul').slideDown();
	});

	$('.show_nav').mouseleave(function(){
		$('.show_nav ul').slideUp(500);
	});


	//品牌秀场的图片

	//存储四十张图片
	// var img_arr = ['imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png',  'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png', 'imgs/showimg_01.png'];
	var img_arr = [{'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 1', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 2', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 3', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 4', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 5', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 6', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 7', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 8', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 9', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 10', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 11', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 12', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 13', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 14', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 15', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 16', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 17', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 18', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 19', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 20', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 21', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 22', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 23', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 24', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 25', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 26', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 27', 'imghref': '#'},
				   {'imgurl': 'imgs/showimg_01.jpg', 'imginfo': 'Vera Wang 2016 Spring 28', 'imghref': '#'}];
	for(i in img_arr){
		$('.show_img ul').append('<li><a href="' + img_arr[i].imghref + '"><img src="' + img_arr[i].imgurl + '""><div class="showimg_text"><div class="text_bg"></div><div class="text">' + img_arr[i].imginfo+  '</div></div></a></li>');
	}

	$('.show_img ul li').hide()

	//图片运动
	$('.show_img ul li').eq(0).show().css({'width': '215px', 'height': '215px', 'top': '89px', 'left': '132px', 'zIndex': '900'});
	$('.show_img ul li').eq(1).show().css({'width': '215px', 'height': '322px', 'top': '89px', 'left': '0', 'zIndex': '1000'});
	$('.show_img ul li').eq(2).show().css({'width': '315px', 'height': '422px', 'top': '39px', 'left': '132px', 'zIndex': '1001'});
	$('.show_img ul li').eq(3).show().css({'width': '353px', 'height': '472px', 'top': '0', 'left': '276px', 'zIndex': '1002'}).children().children().eq(1).show();
	$('.show_img ul li').eq(4).show().css({'width': '315px', 'height': '422px', 'top': '39px', 'left': '468px', 'zIndex': '1001'});
	$('.show_img ul li').eq(5).show().css({'width': '215px', 'height': '322px', 'top': '89px', 'left': '698px', 'zIndex': '1000'});
	$('.show_img ul li').eq(6).css({'width': '215px', 'height': '322px', 'top': '89px', 'left': '468px', 'zIndex': '900'});

	function showimgChange(ind){
		$('.showimg_text').hide();
		$('.show_img ul li').eq((ind - 4) % img_arr.length).css({'width': '215px', 'height': '322px', 'top': '89px', 'left': '132px', 'zIndex': '900'});
		$('.show_img ul li').eq((ind - 3) % img_arr.length).show().stop().animate({'width': '215px', 'height': '322px', 'top': '89px', 'left': '132px', 'zIndex': '900'}, 500);
		$('.show_img ul li').eq((ind - 2) % img_arr.length).show().stop().animate({'width': '215px', 'height': '322px', 'top': '89px', 'left': '0', 'zIndex': '1000'}, 500);
		$('.show_img ul li').eq((ind - 1) % img_arr.length).show().stop().animate({'width': '315px', 'height': '422px', 'top': '39px', 'left': '132px', 'zIndex': '1001'}, 500);
		$('.show_img ul li').eq(ind % img_arr.length).show().css({'zIndex': '1002'}).stop().animate({'width': '353px', 'height': '472px', 'top': '0', 'left': '276px'}, 500, function(){
			$(this).children().children().eq(1).show();
		});
		$('.show_img ul li').eq((ind + 1) % img_arr.length).show().stop().animate({'width': '315px', 'height': '422px', 'top': '39px', 'left': '468px', 'zIndex': '1001'}, 500);
		$('.show_img ul li').eq((ind + 2) % img_arr.length).show().stop().animate({'width': '215px', 'height': '322px', 'top': '89px', 'left': '698px', 'zIndex': '1000'}, 500);
		$('.show_img ul li').eq((ind + 3) % img_arr.length).css({'width': '215px', 'height': '322px', 'top': '89px', 'left': '468px', 'zIndex': '900'});
	}

	function showimgprevChange(ind){
		$('.showimg_text').hide();
		$('.show_img ul li').eq((ind - 3) % img_arr.length).stop().animate({'width': '215px', 'height': '322px', 'top': '89px', 'left': '132px', 'zIndex': '900'}, 500);
		$('.show_img ul li').eq((ind - 2) % img_arr.length).show().stop().animate({'width': '215px', 'height': '322px', 'top': '89px', 'left': '0', 'zIndex': '1000'}, 500);
		$('.show_img ul li').eq((ind - 1) % img_arr.length).show().stop().animate({'width': '315px', 'height': '422px', 'top': '39px', 'left': '132px', 'zIndex': '1001'}, 500);
		
		$('.show_img ul li').eq(ind % img_arr.length).show().css({'zIndex': '1002'}).stop().animate({'width': '353px', 'height': '472px', 'top': '0', 'left': '276px'}, 500, function(){
			$(this).children().children().eq(1).show();
		});
		$('.show_img ul li').eq((ind + 1) % img_arr.length).show().stop().animate({'width': '315px', 'height': '422px', 'top': '39px', 'left': '468px', 'zIndex': '1001'}, 500);
		$('.show_img ul li').eq((ind + 2) % img_arr.length).show().stop().animate({'width': '215px', 'height': '322px', 'top': '89px', 'left': '698px', 'zIndex': '1000'}, 500);
		$('.show_img ul li').eq((ind + 3) % img_arr.length).show().animate({'width': '215px', 'height': '322px', 'top': '89px', 'left': '468px', 'zIndex': '900'}, 500);

	}

	

	var img_ind = 3;
	$('.arrow_right').click(function(){
		showimgChange(++img_ind);
	});
	$('.arrow_left').click(function(){
		showimgprevChange(--img_ind);
	});

	var timer = 2000;
    var interval;

    function run(){
        interval = setInterval(function(){showimgChange(++img_ind)}, timer);
    }
    run();

    $('.arrow_left, .arrow_right, .show_img ul li').hover(function(){
		clearInterval(interval);
	}, function(){
		run();
	});

	//trend婚纱趋势部分
	

	//再trend_arr中存储题目，info，图片，背景
	var trend_arr = [{'title': '利落短裙', 'imgurl': 'imgs/t4.png', 'info': '可以露出美腿的短款婚纱，帮助小个子的新娘成功拉长身材比例。同样，它们也是伴娘礼服的好选择哦。', 'bg': 'imgs/trend_4.jpg'},
					 {'title': '梦幻袖子', 'imgurl': 'imgs/t2.png', 'info': '与抹胸款式相比，带袖子的款式既能帮助你遮住讨厌的拜拜肉，精致的蕾丝设计也可成为点睛之笔。', 'bg': 'imgs/trend_2.jpg'},
					 {'title': '舞动羽毛', 'imgurl': 'imgs/t3.png', 'info': '将轻盈的羽毛元素大面积运用在裙摆上，为整体LOOK增加了层次感，既为裙摆增加了厚重感，也保持了灵巧的动感。<br><br>', 'bg': 'imgs/trend_3.jpg'},
					 {'title': 'V领诱惑', 'imgurl': 'imgs/t10.png', 'info': '深开的领口最能体现女性的妩媚与性感，带有薄纱的全新设计为娇羞的新娘们，提供了更安全的选择。', 'bg': 'imgs/trend_10.jpg'},
					 {'title': '优雅落肩', 'imgurl': 'imgs/t8.png', 'info': '优雅大气的落肩款式婚纱，特别有雅典娜般的女神范儿，同时还能够巧妙地修饰肩部和上臂欠缺的线条呢。', 'bg': 'imgs/trend_8.jpg'},
					 {'title': '灵动彩色', 'imgurl': 'imgs/t1.png', 'info': '优雅的白色是婚纱的不二选择，但在今年的秀场上，柔和的马卡龙色似乎更受设计师们的青睐。', 'bg': 'imgs/trend_1.jpg'},
					 {'title': '两件式', 'imgurl': 'imgs/t7.png', 'info': '两件式的婚纱依旧火爆2016春夏的T台，活泼俏皮的设计，将腹部玲珑的线条巧妙微露。', 'bg': 'imgs/trend_7.jpg'},
					 {'title': '性感美背', 'imgurl': 'imgs/t9.png', 'info': '女性背部玲珑的线条，配以精致的蕾丝绣花，设计感十足的背部让从身后看到的婚纱，更有妩媚风情。', 'bg': 'imgs/trend_9.jpg'},
					 {'title': '帅气裤装', 'imgurl': 'imgs/t6.png', 'info': '利落的裤装婚纱帅气洒脱，简洁的款式却不失柔美的细节设计。与传统长裙相比，更为强势的气场让你个性十足。', 'bg': 'imgs/trend_6.jpg'},
					 {'title': '浪漫花朵', 'imgurl': 'imgs/t5.png', 'info': '幸福婚纱与柔美花朵的组合让人不得不爱，更何况2016全新的立体工艺，仿佛一朵朵芬芳的花朵开满裙身。', 'bg': 'imgs/trend_5.jpg'}];
	var tinfo_height;
	var t_ind = 9;
	$('.trend .small').eq(t_ind).children().eq(1).css({'opacity': 1});
	$('.trend .center .trend_info .trend_text .trend_word').html(trend_arr[t_ind].info);
	$('.trend .center .trend_info .trend_title').html(trend_arr[t_ind].title);

	//中间大图center部分的文字
	tinfo_height = parseInt($('.trend .center .trend_text').css('height'));
	$('.trend .center .trend_info, .trend .center .trend_info .bg').css({'height': tinfo_height + 20 + 'px'});
	$('.trend .center .trend_info').css({'top': 435 - tinfo_height + 'px'});

	$('.trend .small').hover(function(){
		if($(this).index() == t_ind)return;
		$('.trend .small').eq(t_ind).children().eq(1).css({'opacity': 0}).hide();
		t_ind = $(this).index();
		$(this).children().eq(1).show().animate({'opacity': 1});

		$('.trend .center img').attr({'src': trend_arr[t_ind].imgurl});
		$('.trend').css({'background': 'url("' + trend_arr[t_ind].bg + '") 0 center no-repeat'});
		
		$('.trend .center .trend_info .trend_text .trend_word').html(trend_arr[t_ind].info);
		$('.trend .center .trend_info .trend_title').html(trend_arr[t_ind].title);

		//中间大图center部分的文字
		tinfo_height = parseInt($('.trend .center .trend_text').css('height'));
		$('.trend .center .trend_info').hide().css({'top': '450px'});
		$('.trend .center .trend_info, .trend .center .trend_info .bg').css({'height': tinfo_height + 20 + 'px'});
		$('.trend .center .trend_info').show().stop().animate({'top': 435 - tinfo_height + 'px'});
	}, function(){});

	//beautty婚礼妆容 导航鼠标悬停
	var b_ind = 0;
	var click_num = 0;
	var b_img_width = 0;
	var b_img_height = 0;
	var bword_arr = ['一个完美的妆容不能忽视的一点是：唇妆和腮红的统一性。“在你婚礼忙个不停的时候，这些产品是很方便的，而且还可以综合利用。我给模特使用的是浅粉色的两用唇膏胭脂霜，保持了妆容的统一，打造了一副完美而清新的新娘妆', 
					 '新娘是众人的焦点，因此全身上下每一寸肌肤都要呈现出最完美的状态。“保持肤色从头到脚的一致性是很重要的。在模特的脸上和身上，我使用了自然裸肌妆前乳，这减少了肌肤泛红的情况，使肌肤的颜色匀称，在镜头中的效果更加美丽自然。', 
					 '打造精致的妆容的同时不能忘记发型的重要性！为了更加耀眼，Reem Acra的新娘都变成了冰雪女王。发型师用闪亮串珠装饰在编织发辫上，如同晶莹剔透的雪花落在头顶 ，又好像含苞待放的小花盘上新娘发尾，细节之处让新娘看上去更加精致迷人。', 
					 '你花费了那么多精力才找到最完美的礼服，所以，你一定也不想让你的面妆喧宾夺主吧。Naeem Khan秀场上以柔和的裸色为主色调的面妆和唇妆让模特看上去更加精致迷人，保持了整体清新的感觉，同时让你的礼服成为全场关注的焦点。'];
	var danpin_arr = [{'info1': 'benetin美腿红胭脂水', 'info2': 'YSL圣罗兰甜吻唇颊霜10ml<br>320RML N 1'},
					  {'info1': 'Make up forever双用水粉霜', 'info2': 'Sisley轻柔保湿粉饼'},
					  {'info1': '沙宣炫线抚躁滋润精华乳（免洗)', 'info2': '资生堂炫力创意定型发泥'},
					  {'info1': 'GLOSS VOLUPTE 圣罗兰莹亮灿金唇彩<br>6ml 290RMB #202窒息', 'info2': '伊丽莎白雅顿星幻唇彩09#玫瑰粉'}];
	$('.beautty_nav span').eq(b_ind).css({'background-color': '#e4007f'});

	b_img_width = parseInt($('.beautty .danpin1 img').css('width'));
	b_img_height = parseInt($('.beautty .danpin1 img').css('height'));
	$('.beautty .danpin1 img').css({'left': '50%', 'margin-left': '-' + parseInt(b_img_width / 2) + 'px', 'top': 130 - parseInt(b_img_height / 2) + 'px'});

	$('.beautty_nav span').hover(function(){
		if(b_ind == $(this).index()) return;
		click_num = 0;
		$('.beautty_nav span').eq(b_ind).css({'background-color': '#f27ba5'});
		b_ind = $(this).index();
		$('.beautty_nav span').eq(b_ind).css({'background-color': '#e4007f'});
		$('.beautty_img img').each(function(){
			$(this).attr({'src': 'imgs/b' + (b_ind + 1) + '_' + ($(this).index() + 1) + '.png'});
		});

		$('.beautty .per').html('<img src="imgs/b' + (b_ind + 1) + '_per.png">');
		$('.beautty .per_word span').html(bword_arr[b_ind]);
		// $('.beautty .beautty_content').css({'background': 'url(imgs/b' + (b_ind + 1) + '_bg.png) 0 0 no-repeat'});
		$('.beautty .danpin1 img').attr({'src': 'imgs/b' + (b_ind + 1) + '_danpin1.png'});
		$('.beautty .danpin1 div').html(danpin_arr[b_ind].info1);
		// html('<img src="imgs/b' + (b_ind + 1) + '_danpin1.png"><div>' + danpin_arr[b_ind].info1 + '</div>');
		
		$('.beautty .danpin1 img').on("load", function(){
			b_img_width = parseInt($('.beautty .danpin1 img').css('width'));
			b_img_height = parseInt($('.beautty .danpin1 img').css('height'));
			$('.beautty .danpin1 img').css({'left': '50%', 'margin-left': '-' + parseInt(b_img_width / 2) + 'px', 'top': 130 - parseInt(b_img_height / 2) + 'px'});
		});
		

		
	}, function(){});

	
	$('.beautty .right').click(function(){
		click_num += 1;
		if(click_num % 2 != 0){
			$('.beautty .danpin1 img').attr({'src': 'imgs/b' + (b_ind + 1) + '_danpin2.png'});
			$('.beautty .danpin1 div').html(danpin_arr[b_ind].info2);
		}
			// $('.beautty .danpin1').html('<img src="imgs/b' + (b_ind + 1) + '_danpin2.png"><div>' + danpin_arr[b_ind].info2 + '</div>');
		else{
			$('.beautty .danpin1 img').attr({'src': 'imgs/b' + (b_ind + 1) + '_danpin1.png'});
			$('.beautty .danpin1 div').html(danpin_arr[b_ind].info1);
		}
			// $('.beautty .danpin1').html('<img src="imgs/b' + (b_ind + 1) + '_danpin1.png"><div>' + danpin_arr[b_ind].info1 + '</div>');
		$('.beautty .danpin1 img').on("load", function(){
			b_img_width = parseInt($('.beautty .danpin1 img').css('width'));
			b_img_height = parseInt($('.beautty .danpin1 img').css('height'));
			$('.beautty .danpin1 img').css({'left': '50%', 'margin-left': '-' + parseInt(b_img_width / 2) + 'px', 'top': 130 - parseInt(b_img_height / 2) + 'px'});
		});
	});

	$('.beautty .left').click(function(){
		click_num -=1;
		if(click_num % 2 == 0)
			$('.beautty .danpin1').html('<img src="imgs/b' + (b_ind + 1) + '_danpin1.png"><div>' + danpin_arr[b_ind].info1 + '</div>');
		else
			$('.beautty .danpin1').html('<img src="imgs/b' + (b_ind + 1) + '_danpin2.png"><div>' + danpin_arr[b_ind].info2 + '</div>');
		$('.beautty .danpin1 img').on("load", function(){
			b_img_width = parseInt($('.beautty .danpin1 img').css('width'));
			b_img_height = parseInt($('.beautty .danpin1 img').css('height'));
			$('.beautty .danpin1 img').css({'left': '50%', 'margin-left': '-' + parseInt(b_img_width / 2) + 'px', 'top': 130 - parseInt(b_img_height / 2) + 'px'});
		});
	});

	//hotel部分切换
	var h_ind = 1;
	$('.tab').eq(h_ind).show();
	$('.hotel_nav span').eq(h_ind).css({'background-color': '#f27ba5'}).addClass('myclick');

	$('.hotel_nav .classify_nav').click(function(){
		// if(h_ind == $(this).index())return;
		$('.tab').eq(h_ind).hide();
		$('.hotel_nav .classify_nav').css({'background-color': '#000'}).removeClass('myclick');

		h_ind = $(this).index();
		$('.tab').eq(h_ind).show();
		$(this).css({'background-color': '#f27ba5'});
		$(this).addClass('myclick');
	});

	$('.hotel_nav .classify_nav').hover(function(){
		$(this).css({'background-color': '#f27ba5'});
	}, function(){
		if($(this).hasClass('myclick'))return;
		else $(this).css({'background-color': '#000'});
	});



//review
	var r_sum = 0;
	$('.review_nav ul li').each(function(){
		r_sum += 1;
	});
	if(r_sum > 15){
		var doc = document;
        var _wheelData = -1;
        var mainBox = doc.getElementById('mainBox');
        function bind(obj, type, handler) {
            var node = typeof obj == "string" ? $(obj) : obj;
            if (node.addEventListener) {
                node.addEventListener(type, handler, false);
            } else if (node.attachEvent) {
                node.attachEvent('on' + type, handler);
            } else {
                node['on' + type] = handler;
            }
        }
        function mouseWheel(obj, handler) {
            var node = typeof obj == "string" ? $(obj) : obj;
            bind(node, 'mousewheel', function (event) {
                var data = -getWheelData(event);
                handler(data);
                if (document.all) {
                    window.event.returnValue = false;
                } else {
                    event.preventDefault();
                }
 
            });
            //火狐
            bind(node, 'DOMMouseScroll', function (event) {
                var data = getWheelData(event);
                handler(data);
                event.preventDefault();
            });
            function getWheelData(event) {
                var e = event || window.event;
                return e.wheelDelta ? e.wheelDelta : e.detail * 40;
            }
        }
 
        function addScroll() {
            this.init.apply(this, arguments);
        }

        addScroll.prototype = {
            init: function (mainBox, contentBox, className) {
                var mainBox = doc.getElementById(mainBox);
                var contentBox = doc.getElementById(contentBox);
                var scrollDiv = this._createScroll(mainBox, className);
                this._resizeScorll(scrollDiv, mainBox, contentBox);
                this._tragScroll(scrollDiv, mainBox, contentBox);
                this._wheelChange(scrollDiv, mainBox, contentBox);
                this._clickScroll(scrollDiv, mainBox, contentBox);
            },
            //创建滚动条
            _createScroll: function (mainBox, className) {
                var _scrollBox = doc.createElement('div');
                _scrollBox.setAttribute("id", "scrollBox");
                var _scroll = doc.createElement('div');
                var span = doc.createElement('span');
                _scrollBox.appendChild(_scroll);
                _scroll.appendChild(span);
                _scroll.className = className;
                mainBox.appendChild(_scrollBox);
                return _scroll;
            },
            //调整滚动条
            _resizeScorll: function (element, mainBox, contentBox) {
                var p = element.parentNode;
                var conHeight = contentBox.offsetHeight;
                var _width = mainBox.clientWidth;
                var _height = mainBox.clientHeight;
                var _scrollWidth = 4;
                var _left = _width - _scrollWidth;
                p.style.width = _scrollWidth + "px";
                p.style.height = _height + "px";
                p.style.right = "-1px";
                p.style.position = "absolute";
                p.style.background = "#fff";
                contentBox.style.width = "4px";

                var _scrollHeight = parseInt(_height * (_height / conHeight));
                // if (_scrollHeight >= mainBox.clientHeight) {
                //     element.parentNode.style.display = "none";
                // }
                element.style.height = _scrollHeight + "px";
            },
            //拖动滚动条
            _tragScroll: function (element, mainBox, contentBox) {
                var mainHeight = mainBox.clientHeight;
                element.onmousedown = function (event) {
                    var _this = this;
                    var _scrollTop = element.offsetTop;
                    var e = event || window.event;
                    var top = e.clientY;
                    //this.onmousemove=scrollGo;
                    document.onmousemove = scrollGo;
                    document.onmouseup = function (event) {
                        this.onmousemove = null;
                    }
                    function scrollGo(event) {
                        var e = event || window.event;
                        var _top = e.clientY;
                        var _t = _top - top + _scrollTop;
                        if (_t > (mainHeight - element.offsetHeight)) {
                            _t = mainHeight - element.offsetHeight;
                        }
                        if (_t <= 0) {
                            _t = 0;
                        }
                        element.style.top = _t + "px";
                        contentBox.style.top = -_t * (contentBox.offsetHeight / mainBox.offsetHeight) + "px";
                        _wheelData = _t;
                    }
                }
                element.onmouseover = function () {
                    this.style.background = "#000";
                }
                element.onmouseout = function () {
                    this.style.background = "#000";
                }
            },
            //鼠标滚轮滚动，滚动条滚动
            _wheelChange: function (element, mainBox, contentBox) {
                var node = typeof mainBox == "string" ? $(mainBox) : mainBox;
                var flag = 0, rate = 0, wheelFlag = 0;
                if (node) {
                    mouseWheel(node, function (data) {
                        wheelFlag += data;
                        if (_wheelData >= 0) {
                            flag = _wheelData;
                            element.style.top = flag + "px";
                            wheelFlag = _wheelData * 12;
                            _wheelData = -1;
                        } else {
                            flag = wheelFlag / 12;
                        }
                        if (flag <= 0) {
                            flag = 0;
                            wheelFlag = 0;
                        }
                        if (flag >= (mainBox.offsetHeight - element.offsetHeight)) {
                            flag = (mainBox.clientHeight - element.offsetHeight);
                            wheelFlag = (mainBox.clientHeight - element.offsetHeight) * 12;
 
                        }
                        element.style.top = flag + "px";
                        contentBox.style.top = -flag * (contentBox.offsetHeight / mainBox.offsetHeight) + "px";
                    });
                }
            },
            _clickScroll: function (element, mainBox, contentBox) {
                var p = element.parentNode;
                p.onclick = function (event) {
                    var e = event || window.event;
                    var t = e.target || e.srcElement;
                    var sTop = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop;
                    var top = mainBox.offsetTop;
                    var _top = e.clientY + sTop - top - element.offsetHeight / 2;
                    if (_top <= 0) {
                        _top = 0;
                    }
                    if (_top >= (mainBox.clientHeight - element.offsetHeight)) {
                        _top = mainBox.clientHeight - element.offsetHeight;
                    }
                    if (t != element) {
                        element.style.top = _top + "px";
                        contentBox.style.top = -_top * (contentBox.offsetHeight / mainBox.offsetHeight) + "px";
                        _wheelData = _top;
                    }
                }
            }
        }
        new addScroll('mainBox', 'content', 'scrollDiv');
	}

	 $("#scrollBox").show();       



	 //review点击导航切换图片
	 var review_ind = 0;
	 $('.review_nav ul li').eq(0).css({'color': '#ea6485'});

	 $('.review_nav ul li').click(function(){
 		$('.review_nav ul li').eq(review_ind).css({'color': '#040404'});
	 	review_ind = $(this).index();
	 	$('.review_nav ul li').eq(review_ind).css({'color': '#ea6485'});
	 	$('.review_img a').each(function(){
	 		$(this).children().attr({'src': 'imgs/review' + (review_ind + 1) + '_' + ($(this).index() + 1) +'.jpg'});
	 	})
	 });
}









