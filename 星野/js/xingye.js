/**
 * Created by JWX on 15-2-9.
 */
//顶部热点图片部分
$(function(){
    $('.arrow_left, .arrow_right').hover(function(){
        clearInterval(interval);
    },function(){
        run();
    });

    $('.arrow_right').click(function(){
        nextChange();
    });

    $('.arrow_left').click(function(){
        prevChange();
    });

    function nextChange(){
        $('.hot ul').each(function(){
            $(this).stop().animate({'left': parseInt($(this).css('left')) - 756 + 'px'}, 500, function(){
                if(parseInt($(this).css('left')) <= -6048){
                    $(this).css({'left': '6048px'});
                }
            });
        });
    }

    function prevChange(){
        $('.hot ul').each(function(){
            $(this).stop().animate({'left': parseInt($(this).css('left')) + 756 + 'px'}, 500, function(){
                if(parseInt($(this).css('left')) >= 3024){
                    $(this).css({'left': '-9072px'});
                }
            });
        });
    }
    var time = 3000;
    var interval;
    function run(){
        interval = setInterval(nextChange, time);
    }
    run();
});

//part1
$(function(){
    var ind = 0;
    var ind1 = 0;
    var ind2 = 0;

    $('#xy .jiaotangchushi .small_img li:first').children().eq(1).css({'top': 0});
    $('#xy .jiaotangchushi .content li').hide();
    $('#xy .jiaotangchushi .content li:first').show();

    $('#xy .jiaotangchushi .content li').eq(0).children().eq(0).children().css({'filter':'alpha(opacity=0)','-moz-opacity':0,'-khtml-opacity': 0, 'opacity': 0});
    $('#xy .jiaotangchushi .content li').eq(0).children().eq(0).children().eq(0).css({'filter':'alpha(opacity=100)','-moz-opacity':1,'-khtml-opacity': 1, 'opacity': 1});

    $('#xy .jiaotangchushi .small_img li').hover(function(){
        clearInterval(interval);
        ind2 = $(this).index();

        ind1 = 0;
        $('#xy .jiaotangchushi .content li').eq(ind).hide();
        $('#xy .jiaotangchushi .content li').eq($(this).index()).show();

        interval = setInterval(imgChange, time);

        $('#xy .jiaotangchushi .content li').eq($(this).index()).children().eq(0).children().css({'filter':'alpha(opacity=0)','-moz-opacity':0,'-khtml-opacity': 0, 'opacity': 0});
        $('#xy .jiaotangchushi .content li').eq($(this).index()).children().eq(0).children().eq(0).css({'filter':'alpha(opacity=100)','-moz-opacity':1,'-khtml-opacity': 1, 'opacity': 1});


        $('#xy .jiaotangchushi .small_img li').eq(ind).children().eq(1).stop().animate({'top': '114px'}, 300);
        $('#xy .jiaotangchushi .small_img li').eq($(this).index()).children().eq(1).stop().animate({'top': 0},300);
        ind = $(this).index();

    },function(){
        return;
    });


    function imgChange(){
        $('#xy .jiaotangchushi .content li').eq(ind2).children().eq(0).children().eq(ind1 % 3).animate({'filter':'alpha(opacity=0)','-moz-opacity':0,'-khtml-opacity': 0, 'opacity': 0}, 300);
        $('#xy .jiaotangchushi .content li').eq(ind2).children().eq(0).children().eq((ind1 + 1) % 3).animate({'filter':'alpha(opacity=100)','-moz-opacity':1,'-khtml-opacity': 1, 'opacity': 1}, 300);

        ind1 = (ind1 + 1) % 3;
    }

    var time = 3000;
    var interval;
    function run(){
        interval = setInterval(imgChange, time);
    }
    run();
});

//part2
$(function(){
    var ind = 0;
    $('#xy .yizhanshifuwu .wrap .service_big img').hide();
    $('#xy .yizhanshifuwu .wrap .service_big img').eq(ind).show();
    $('#xy .yizhanshifuwu .wrap .info .content').hide();
    $('#xy .yizhanshifuwu .wrap .info .content').eq(ind).show();

    $('#xy .yizhanshifuwu .wrap .info').css({'top': 309 - parseInt($('#xy .yizhanshifuwu .wrap .info').css('height')) + 'px'});

    $('#xy .yizhanshifuwu .wrap .service_little li').hover(function(){
        if(ind == $(this).index())return;
        else{
            $('#xy .yizhanshifuwu .wrap .service_big img').eq(ind).hide();
            $('#xy .yizhanshifuwu .wrap .service_big img').eq($(this).index()).show();
            $('#xy .yizhanshifuwu .wrap .info .content').eq(ind).hide();
            $('#xy .yizhanshifuwu .wrap .info .content').eq($(this).index()).show();
            $('#xy .yizhanshifuwu .wrap .info').css({'top': '309px'});
            // alert(parseInt($('#xy .yizhanshifuwu .wrap .info').css('height')))
            $('#xy .yizhanshifuwu .wrap .info').stop().animate({'top': 309 - parseInt($('#xy .yizhanshifuwu .wrap .info').css('height')) + 'px'}, 500);
            ind = $(this).index();
        }

    },function(){});
});

//part3
$(function(){
    var ind = 0;

    $('#xy .jiudiansheshi .wrap .center img').css({'filter':'alpha(opacity=0)','-moz-opacity':0,'-khtml-opacity': 0, 'opacity': 0});
    $('#xy .jiudiansheshi .wrap .center img').eq(0).css({'filter':'alpha(opacity=100)','-moz-opacity':1,'-khtml-opacity': 1, 'opacity': 1});
    $('#xy .jiudiansheshi .wrap .little li').children().eq(2).hide();
    $('#xy .jiudiansheshi .wrap .little li').children().eq(1).css({'outline': '6px solid #8acdf3', 'width': '87px', 'height': '54px', 'left': '6px', 'top': '6px'});
    $('#xy .jiudiansheshi .wrap .center ul li').eq(0).css({'top': '276px'});

    $('#xy .jiudiansheshi .wrap .little li').eq(0).children().eq(0).show().css({'top': '42px'});



    $('#xy .jiudiansheshi .wrap .little li').hover(function(){
        clearInterval(interval);

//        $('#xy .jiudiansheshi .wrap .center ul li').css({'top': '396px'}).hide();
        $('#xy .jiudiansheshi .wrap .little li').eq(ind).children().eq(1).css({'outline': 'none', 'width': '99px', 'height': '66px', 'left': 0, 'top': 0});
        $('#xy .jiudiansheshi .wrap .little li').eq(ind).children().eq(2).show();
        $('#xy .jiudiansheshi .wrap .little li').eq(ind).children().eq(0).hide().css({'top': '60px'});


        $(this).children().eq(2).hide();
        $(this).children().eq(1).css({'outline': '6px solid #8acdf3', 'width': '87px', 'height': '54px', 'left': '6px', 'top': '6px'});
        $(this).children().eq(0).show().stop().animate({'top': '42px'}, 100);

        if(ind == $(this).index())return;
        else{
            $('#xy .jiudiansheshi .wrap .center img').eq(ind).stop().animate({'filter':'alpha(opacity=0)','-moz-opacity':0,'-khtml-opacity': 0, 'opacity': 0}, 500);
            $('#xy .jiudiansheshi .wrap .center ul li').eq(ind).css({'top': '396px'}).hide();
            $('#xy .jiudiansheshi .wrap .center img').eq($(this).index()).stop().animate({'filter':'alpha(opacity=100)','-moz-opacity':1,'-khtml-opacity': 1, 'opacity': 1}, 500);
            var this_top = parseInt($('#xy .jiudiansheshi .wrap .center ul li').eq($(this).index()).css('height'));
            $('#xy .jiudiansheshi .wrap .center ul li').eq($(this).index()).show().stop().animate({'top': 356 - this_top + 'px'}, 500);

        }

        ind = $(this).index();
    },function(){
        run();
    });

    function part3Change(){
        ind = (ind + 1) % 12;
        $('#xy .jiudiansheshi .wrap .little li').eq((ind - 1) % 12).children().eq(1).css({'outline': 'none', 'width': '99px', 'height': '66px', 'left': 0, 'top': 0});
        $('#xy .jiudiansheshi .wrap .little li').eq((ind - 1) % 12).children().eq(2).show();
        $('#xy .jiudiansheshi .wrap .little li').eq((ind - 1) % 12).children().eq(0).hide().css({'top': '60px'});


        $('#xy .jiudiansheshi .wrap .little li').eq(ind).children().eq(2).hide();
        $('#xy .jiudiansheshi .wrap .little li').eq(ind).children().eq(1).css({'outline': '6px solid #8acdf3', 'width': '87px', 'height': '54px', 'left': '6px', 'top': '6px'});
        $('#xy .jiudiansheshi .wrap .little li').eq(ind).children().eq(0).show().stop().animate({'top': '42px'}, 100);
        
        var this_top = parseInt($('#xy .jiudiansheshi .wrap .center ul li').eq(ind).css('height'));

        $('#xy .jiudiansheshi .wrap .center img').eq((ind - 1) % 12).stop().animate({'filter':'alpha(opacity=0)','-moz-opacity':0,'-khtml-opacity': 0, 'opacity': 0}, 500);
        $('#xy .jiudiansheshi .wrap .center ul li').eq((ind - 1) % 12).css({'top': '396px'}).hide();
        $('#xy .jiudiansheshi .wrap .center img').eq(ind).stop().animate({'filter':'alpha(opacity=100)','-moz-opacity':1,'-khtml-opacity': 1, 'opacity': 1}, 500);
        $('#xy .jiudiansheshi .wrap .center ul li').eq(ind).show().stop().animate({'top': 356 - this_top + 'px'}, 500);
    }

    var timer = 3000;
    var interval;
    function run(){
        interval = setInterval(part3Change, timer);
    }
    run();
});

//part5
$(function(){
    var ind = 0;
    $('#xy .hunlilinggan .wrap .big img').eq(0).show();
    $('#xy .hunlilinggan .biantai ._nav').hover(function(){
        $('.hunlilinggan .wrap .nav').css({'backgroundPosition': '0 -' + $(this).index() * 99 + 'px'});
        if(ind == $(this).index())return;
        else{
            $('#xy .hunlilinggan .wrap .big img').eq(ind).hide();
            $('#xy .hunlilinggan .wrap .big img').eq($(this).index()).show();
        }
        ind = $(this).index();

    },function(){});
});


//part6
$(function(){
    var ind = 27;
    $('#xy .xingyezonglan li').each(function(){
        this_width = parseInt($(this).css('width'));
        this_height = parseInt($(this).css('height'));
        var str = '<div style="width: ' + this_width + 'px;height:' + this_height + 'px;background-color: #000;filter:alpha(opacity=70);-moz-opacity:0.7;-khtml-opacity: 0.7;opacity: 0.7"></div>'
        $(this).append(str);
    });
    $('#xy .xingyezonglan li').eq(ind).children().eq(1).hide();
    $('#xy .xingyezonglan li').eq(ind).css({'zIndex': 100});
    $('#xy .xingyezonglan li').hover(function(){
        if(ind == $(this).index())return;
        else{
            $('#xy .xingyezonglan li').eq(ind).css({'zIndex': 'auto'});
            $('#xy .xingyezonglan li').eq(ind).children().eq(1).show();
            $(this).css({'zIndex': 100});
            $(this).children().eq(1).hide();
        }

        ind = $(this).index();
    }, function(){});
});

//part4
$(function(){
    var ind = 0;
    $('#xy .xianlutuijian .wrap .nav ul li').eq(ind).children().eq(0).children().eq(0).css({'backgroundColor': '#fbfcfd'});
    $('#xy .xianlutuijian .wrap .nav ul li').eq(ind).children().eq(1).css({'height': '292px'});
    $('#xy .xianlutuijian .wrap .nav ul li').eq(ind).children().eq(1).children().eq(0).css({'height': '292px'});
    $('#xy .xianlutuijian .wrap .nav ul li').eq(ind).children().eq(1).children().eq(1).show().css({'height': '292px'});
    $('#xy .xianlutuijian .wrap .map img').eq(0).css({'filter':'alpha(opacity=100)','-moz-opacity':1,'-khtml-opacity': 1, 'opacity': 1});
    $('#xy .xianlutuijian .wrap .photo div').eq(0).css({'filter':'alpha(opacity=100)','-moz-opacity':1,'-khtml-opacity': 1, 'opacity': 1});


    $('#xy .xianlutuijian .wrap .nav ul li').hover(function(){
        if(ind == $(this).index())return;
        else{
            $('#xy .xianlutuijian .wrap .nav ul li').eq(ind).children().eq(0).children().eq(0).css({'backgroundColor': '#000'});
            $(this).children().eq(0).children().eq(0).css({'backgroundColor': '#fbfcfd'});

            $('#xy .xianlutuijian .wrap .nav ul li').eq(ind).children().eq(1).stop().animate({'height': '0'}, 500);
            $('#xy .xianlutuijian .wrap .nav ul li').eq(ind).children().eq(1).children().eq(0).stop().animate({'height': '0'}, 500);
            $('#xy .xianlutuijian .wrap .nav ul li').eq(ind).children().eq(1).children().eq(1).stop().animate({'height': '0'}, 500).hide();

            $('#xy .xianlutuijian .wrap .nav ul li').eq($(this).index()).children().eq(1).stop().animate({'height': '292px'}, 500);
            $('#xy .xianlutuijian .wrap .nav ul li').eq($(this).index()).children().eq(1).children().eq(0).stop().animate({'height': '292px'}, 500);
            $('#xy .xianlutuijian .wrap .nav ul li').eq($(this).index()).children().eq(1).children().eq(1).show().stop().animate({'height': '292px'}, 500);

            $('#xy .xianlutuijian .wrap .map img').eq(ind).stop().animate({'filter':'alpha(opacity=0)','-moz-opacity':0,'-khtml-opacity': 0, 'opacity': 0}, 500);
            $('#xy .xianlutuijian .wrap .photo div').eq(ind).stop().animate({'filter':'alpha(opacity=0)','-moz-opacity':0,'-khtml-opacity': 0, 'opacity': 0}, 500);
            $('#xy .xianlutuijian .wrap .map img').eq($(this).index()).stop().animate({'filter':'alpha(opacity=100)','-moz-opacity':1,'-khtml-opacity': 1, 'opacity': 1}, 500);
            $('#xy .xianlutuijian .wrap .photo div').eq($(this).index()).stop().animate({'filter':'alpha(opacity=100)','-moz-opacity':1,'-khtml-opacity': 1, 'opacity': 1}, 500);
        }
        ind = $(this).index();
    }, function(){});
});


