// JavaScript Document
$(function(){
	for(var i=0; i<document.links.length; i++){
            document.links[i].onfocus=function(){this.blur()}
		}
		
    <!--导航鼠标滑过效果-->
    $("#nav_ul>li").hover(function(){
		$(".submenu").hide();	
	   $(this).find(".submenu").stop(true,true).slideDown(800); 
	},function(){
		$(".submenu").hide();	
		$(this).find(".submenu").stop(true,true).slideUp(300);
	})
	
	var s = $("#nav_ul>li").size();
	var w = 0;
	for(var i=0;i<s;i++){
		if($(".brides_logo").css("display")=="none"&&i==1){
			w+=0;
			continue;
		}
	    w+=$("#nav_ul>li").eq(i).width();	
	}
	if($(".brides_logo").css("display")=="none"){
		s = s-1;	
		$("#nav_ul>li.brides_logo").css("padding","0px");
    }
	var m_v = ($("#nav_ul").width()-w)/(2*s)-2;
	$("#nav_ul>li").css("padding","0px "+m_v+"px");
	
	$(".kepu li>a").mouseover(function(){
	    $(this).siblings("p").show();
	})	
	$(".kepu li").mouseleave(function(){
	    $(this).find("p").hide();	
	})
	
	$(".p_fs>div").hover(function(){
	     $(this).stop(!0).animate({"top":"25px"},function(){$(this).find(".btn_info").show();});
		 	
	},function(){
	     $(this).stop(!0).animate({"top":"100px"},function(){$(this).find(".btn_info").hide();});	
		 $(this).find(".p_info").hide();
	})
	
	$(".btn_info").click(function(){
	     $(this).siblings(".p_info").show();	
	})
})


//<!--搜索框点击效果开始-->
function bg_change(id){
	$("#search_box").val("");
	$("#search_box").css({"background":"#fff","color":"#000"});
	$("#search_box").animate({width:"135px"},500);
	$("#nav_ul").animate({width:"1000px"},500);
	$("#nav_ul>li").animate({paddingLeft:"-=2px",paddingRight:"-=2px"},500);
	$("#search_a").css("background","url(images/search_black.jpg) no-repeat");
	
}
function bg_back(id){
	if($("#search_box").val()==""){
	   $("#search_box").css({"background":"url(images/top_search_bg.jpg) repeat-x","color":"#fff"});
	   $("#search_box").animate({width:"68px"},500);
	   $("#nav_ul").animate({width:"1067px"},500);
	   $("#nav_ul>li").animate({paddingLeft:"+=2px",paddingRight:"+=2px"},500);
	   $("#search_a").css("background","url(images/search_white.jpg) no-repeat");
	   
	}
}
<!--搜索框点击效果结束-->

