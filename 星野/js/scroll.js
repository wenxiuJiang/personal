$(function(){
    var ind = 0;
    var curTop = 55;

    var timer = 1500;
    var my_interval;

    function run(){
        $('body').one('mousewheel', function(event, delta){
            clearInterval(my_interval);
            console.log(event);
            console.log(delta);
            var now_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            console.log(now_top);
            event.preventDefault();
                if(delta < 0){
                    
                    if(now_top >= 0 && now_top < 550){
                       $('body,html').stop().animate({scrollTop: 550}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top >= 550 && now_top < 1220){
                       $('body,html').stop().animate({scrollTop: 1220}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top >= 1220 && now_top < 1970){
                       $('body,html').stop().animate({scrollTop: 1970}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top >= 1970 && now_top < 2606){
                       $('body,html').stop().animate({scrollTop: 2606}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top >= 2606 && now_top < 3247){
                       $('body,html').stop().animate({scrollTop: 3247}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top >= 3247 && now_top < 3890){
                       $('body,html').stop().animate({scrollTop: 3890}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top >= 3890){
                       $('body,html').stop().animate({scrollTop: 4611}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                }
                else if(delta > 0){
                        
                    if(now_top >= 0 && now_top <= 550){
                       $('body,html').stop().animate({scrollTop: 0}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top > 550 && now_top <= 1220){
                       $('body,html').stop().animate({scrollTop: 550}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top > 1220 && now_top <= 1970){
                       $('body,html').stop().animate({scrollTop: 1220}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top > 1970 && now_top <= 2606){
                       $('body,html').stop().animate({scrollTop: 1970}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top > 2606 && now_top <= 3247){
                       $('body,html').stop().animate({scrollTop: 2606}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top > 3247 && now_top <= 3890){
                       $('body,html').stop().animate({scrollTop: 3247}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                    else if(now_top > 3890){
                       $('body,html').stop().animate({scrollTop: 3890}, 500, function(){
                            my_interval = setInterval(run(), timer);
                        });
                    }
                }
            
            
        });
    }

    my_interval = setInterval(run(), timer);
});