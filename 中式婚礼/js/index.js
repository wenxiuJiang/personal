window.onload = function(){
	//服饰部分
	var fushi_ind = 0;
	var fushi_arr = ['现代中式礼服，是在传统的中国元素上，采用西方立体剪裁工艺，将中国传统的文化和风貌得以再现，从而以现代人的审美需求来打造富有传统韵味的婚庆吉服。例如改良版的礼服，就是在传统旗袍的廓形上加入现代流行元素，最常见的就是旗袍加鱼尾廓形这一典范设计。',
					 '天然真丝是中式礼服面料的上乘之选。由于丝绸的蛋白纤维与人体有极好的生物相容性，故而舒适且环保。同时，丝绸天然的光泽度是任何现代化纤面料无可比拟的，细腻莹润的光泽，加之华丽名贵的质感，更能衬托雍容典雅的气质。此外，加入时尚元素的中式礼服也会使用一些蕾丝、欧根纱等面料。',
					 '中式礼服工艺考究，绝大部分靠刺绣实现。刺绣是一种在织物上用各种线料织出不同图案的工艺。历史悠久的中国刺绣博大精深，以风格独特、工整娟秀、色彩瑰丽、针法多样绣工精致享誉海内外。苏绣、湘绣、蜀绣、粤绣并称四大名绣。刺绣工艺非常繁琐，一件精良的吉服往往耗费数人数日去创作和完成。',
					 '中式婚礼讲究的是热闹圆满、喜乐融融，传统的图腾和纹样是最适宜在礼服中运用的，因为中国风的纹饰细节可以让中式婚礼更加韵味十足。最应时应景的纹饰当属各种有吉祥寓意的意象了，例如，龙凤、鸳鸯、喜鹊、双鱼、牡丹、石榴、祥云、如意、喜字等等。'];

    var fushi_link = ['http://www.brides.com.cn/dresses/wedding_gown/blog_29740.html', 'http://www.brides.com.cn/dresses/wedding_gown/blog_29727.html', 'http://www.brides.com.cn/dresses/wedding_gown/blog_29728.html', 'http://www.brides.com.cn/dresses/wedding_gown/slide_29744.html'];
	$('.fushi .fushi_nav ul li').mouseover(function(){
		if(fushi_ind == $(this).index()){
			return;
		}
		else{
			$('.fushi .fushi_nav ul li').eq(fushi_ind).removeClass('current');
			fushi_ind = $(this).index();
			$(this).addClass('current');
			$('.fushi .fushi_img').css({'background-position-x': -fushi_ind * 488 + 'px'});
			$('.fushi .fushi_detail').html(fushi_arr[fushi_ind]);
            $('.fushi .more a').attr("href", fushi_link[fushi_ind]);
		}
	});
	//造型
	var zaoxing_ind = 0;
	var zaoxing_arr = [
						{texts:[{title: '新娘在选择中式妆容时需要注意哪些？', text: '粉底要选择遮瑕力强的产品，但要避免过于白皙。中式妆容的眼妆不适宜五颜六色，推荐金色和红色的搭配，能够凸显新娘的气质。建议新娘不要选择韩式粗平眉，以采用弯月眉最佳，千万不要选择细弯的眉型，否则会让新娘显得刻薄。'}, {title: '如何打造出具有个人特色的中式婚礼妆容？', 'text': '在自然光下找出一种接近自己肤色的、较薄的粉底，让妆容呈现出最自然纯净的自然肤色，自然裸色眼影让眼妆更自然 有立体感。精致的隐形眼线配合立体睫毛让眼妆更加真实自然。红色，橘红色，正红色的口红是最合适中式婚礼的颜色。'}]}, 
						{texts:[{title: '如何根据脸型打造中式婚礼发型？', text: '打造中式婚礼发型时要注意自己脸型适合的中式发型轮廓结构，不对称的刘海修饰方形脸的边缘，可以增加纵长感；利落干净的盘发，会让鹅蛋脸庞更有立体感；倒三角脸型要将前额露出来，会让新娘看起来更加纯情、甜美、可爱。'}, {title: '新娘如果是短发要怎样考虑自己的中式婚礼发型呢？', 'text': '如果是短发新娘，而且又很喜欢中式古典感觉的发型，新娘可以选择和自己发色相接近的假发，真假发的可以很好的做出婉约 端庄效果的发型，需要强调一点是假发的颜色和新娘本身发色一定要一致。'}]},
						{texts:[{title: '新人在跟化妆师沟通婚礼造型时应该注意哪些？', text: '造型师单宝建议：和化妆师确定婚礼风格、婚礼场地之后，把选择好的婚纱款式和风格拿给化妆师参考。确定好以上内容后可以遵循以上条件，再根具新娘自身气质特点为新娘进行量身定制与整体婚礼风格和新娘自身风格特点的妆容发型。<div class="more"><a href="http://www.brides.com.cn/beauty/fitness/blog_29747.html">更多》</a></div>'}, {title: '', 'text': '造型师吴赳赳建议：新人尽可素颜，让造型师更清晰的了解新人的五官特点；建议新人在选择好礼服的款式颜色后，请造型师做个全面的定妆发型，避免婚礼当日临场发挥的状况发生。<div class="more"><a href="http://www.brides.com.cn/beauty/fitness/blog_29747.html">更多》</a></div>'}]}
						]
	$('.zaoxing .zaoxing_nav ul li').mouseover(function(){
		if(zaoxing_ind == $(this).index()){
			return;
		}
		else{
			$('.zaoxing .zaoxing_nav ul li').eq(zaoxing_ind).removeClass('current');
			zaoxing_ind = $(this).index();
			$(this).addClass('current');
			$('.zaoxing .zaoxing_img').css({'background-position-x': -zaoxing_ind * 708 + 'px'});
			$('.zaoxing .zaoxing_text .paragraph').eq(0).children().eq(0).html(zaoxing_arr[zaoxing_ind].texts[0].title);
			$('.zaoxing .zaoxing_text .paragraph').eq(0).children().eq(1).html(zaoxing_arr[zaoxing_ind].texts[0].text);
			$('.zaoxing .zaoxing_text .paragraph').eq(1).children().eq(0).html(zaoxing_arr[zaoxing_ind].texts[1].title);
			$('.zaoxing .zaoxing_text .paragraph').eq(1).children().eq(1).html(zaoxing_arr[zaoxing_ind].texts[1].text);
		}
	});

	//婚礼图片
	var hunli_ind = 0;
	var pre_ind = 0;
	var hunli_href = ['http://photos.brides.com.cn/client/lastPage.html?picId=02caaab9-4104-425b-b9eb-7b721ea4ef34&str', 'http://www.brides.com.cn/wedding/real-wedding/slide_29720.html', 'http://www.brides.com.cn/wedding/real-wedding/slide_29717.html', 'http://www.brides.com.cn/wedding/real-wedding/slide_29726.html', 'http://photos.brides.com.cn/client/lastPage.html?picId=c9c76291-fc14-4fe4-9d72-4c29337cc3ff&str=', 'http://www.brides.com.cn/wedding/real-wedding/slide_29721.html', 'http://www.brides.com.cn/wedding/real-wedding/slide_29722.html', 'http://www.brides.com.cn/wedding/real-wedding/slide_29724.html', 'http://www.brides.com.cn/wedding/real-wedding/slide_29723.html'];//婚礼部分图片链接
    $('.hunli ul li').each(function(){
    	$(this).css({'background': 'url(imgs/hl_' + $(this).index() + '.jpg) 0 0 no-repeat'});
    });

    function nextChange(ind){
    	$('.hunli ul li').each(function(){
    		var now = ($(this).index() + hunli_ind) % 9;
	    	$(this).css({'background': 'url(imgs/hl_' + now + '.jpg)'});
	    	$(this).children().attr("href", hunli_href[now]);
	    });
	    circleChange(pre_ind, ind);
	    pre_ind = ind;
    }
    function circleChange(ind1, ind2){
    	$('.circle span').eq(ind1).removeClass('current');
    	$('.circle span').eq(ind2).addClass('current');
    }

    var time = 3000;
    var interval;
    function run(){
    	pre_ind = hunli_ind;
        interval = setInterval(function(){nextChange((++hunli_ind) % 9 )}, time);
    }
    run();
    
    $('.circle span').click(function(){
    	hunli_ind = $(this).index();
    	nextChange(hunli_ind);
    });

    $('.circle span').hover(function(){
    	clearInterval(interval);
    }, function(){
    	run();
    });

    //场地
    var cd_arr = [
    	{top: '170px', title: '北京华尔道夫酒店', info: '北京华尔道夫酒店位于<br>北京市东城区金鱼胡同5-15号<br>+86 10 8520 8989<br>BJSWA.Reservations@waldorfastoria.com', 'imgs': ['imgs/cd1_1.jpg', 'imgs/cd1_2.jpg', 'imgs/cd1_3.jpg'], texts: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;坐落于繁华的王府井核心地段的北京华尔道夫酒店，是华尔道夫酒店及度假村在中国的第二家酒店。酒店由两幢风格迥异的宏伟建筑组成——优雅的全铜主楼与古典的华尔道夫胡同客房。新人的婚礼既可追求现代奢华浪漫，也可传承古代皇室风华，同时还将充分感受到一脉相承的华尔道夫服务，从一件件典藏珍品、一幅幅艺术佳作中感受到京派文化的独特韵味，拥有独一无二的体验，开启美好人生新篇章，叙写专属自己的传世故事。'},
    	{top: '327px', title: '<br>丽江悦榕庄', info: '丽江悦榕庄酒店位于<br>中国云南省丽江市古城区束河悦榕路<br>电话+86 888 533 1111<br>邮箱lijiang@banyantree.com', 'imgs': ['imgs/cd2_1.jpg', 'imgs/cd2_2.jpg', 'imgs/cd2_3.jpg'], texts: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位于玉龙雪上脚下的丽江悦榕庄，拥有直面雪山的绝佳地理位置。酒店别具匠心的设计，恰如其分的体现了丽江这座保存极完好的古城，在悠久历史中沉淀下来的浓郁纳西建筑特色，让每位客人无不为之倾倒。融入浓郁的纳西民族建筑风格的丽江悦榕庄绝对是一道眼睛的盛宴，一次独特的体验。每栋别墅都以丰富的黄褐色和金色为内饰色调基础，并采用传统宽广的屋顶设计。悦榕庄周到的服务与古朴的本地装饰品将带您远离城市的喧嚣。'},
    	{top: '473px', title: '<br><br>富春山居', info: '富川山居酒店位于<br>中国浙江省杭州市富阳区东洲街道江滨东大道339号<br>电话0571 6341 9500<br>邮箱reservation@fuchunresort.com<br>网址www.fuchunresort.com', 'imgs': ['imgs/cd3_1.jpg', 'imgs/cd3_2.jpg', 'imgs/cd3_3.jpg'], texts: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地处杭州富阳葱茏美丽的茶山环抱之中的富春山居，是享誉中国乃至亚洲地区的顶级度假村兼水疗中心。度假村隐逸于富春湖畔，拥有150公顷私家土地，一间豪华度假酒店，17间私人别墅，一间水疗中心和私家高尔夫俱乐部。富春山居曾获选为Andrew Harper国际最隐秘的度假酒店，绝对会是你与心爱之人逃离喧嚣、独享二人世界的完美去处。酒店配备专业的婚庆团队，可根据贵宾的个人喜好以及融合季节的景观变化，在依山傍水的自然风光中打造无法复制、属于两人世界的顶级婚礼盛典。'}
    ];
    var cd_link = ['http://www.brides.com.cn/planning/slide_29998.html', 'http://www.brides.com.cn/wedding/reception/slide_29999.html', 'http://www.brides.com.cn/reception/slide_30000.html'];
    var cd_ind = 0;
    var img_ind = 0;

    $('.changdi_nav div').click(function(){
    	cd_ind = $(this).index();
    	img_ind = 0;
    	$('.changdi .changdi_con .con_title').html(cd_arr[cd_ind].title);
    	$('.changdi .changdi_con .con_info').html(cd_arr[cd_ind].info);
    	$('.changdi .changdi_con .con_img img').attr("src", cd_arr[cd_ind].imgs[0]);
    	$('.changdi .changdi_con .con_detail').html(cd_arr[cd_ind].texts);
    	$('.changdi .line').css({'top': cd_arr[cd_ind].top});
        $('.changdi .more a').attr("href", cd_link[cd_ind]);
    	if(cd_ind == 2)$('.changdi .changdi_con .con_text').css({'top': '105px'});
    	else $('.changdi .changdi_con .con_text').css({'top': '153px'});
    });

    function cdImgChange(cdInd){
    	img_ind = (img_ind + 1) % 3;
    	$('.changdi .changdi_con .con_img img').attr("src", cd_arr[cdInd].imgs[img_ind]);
    }

    var cd_time = 3000;
    var cd_interval;
    function cdRun(){
        cd_interval = setInterval(function(){cdImgChange(cd_ind)}, time);
    }
	cdRun();
}




















