$(".fullSlide").hover(function() {
		$(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
	},
	function() {
		$(this).find(".prev,.next").fadeOut()
	});
$(".fullSlide").slide({
	titCell: ".hd ul",
	mainCell: ".bd ul",
	effect: "fold",
	autoPlay: true,
	autoPage: true,
	trigger: "click",
	startFun: function(i) {
		var curLi = jQuery(".fullSlide .bd li").eq(i);
		if(!!curLi.attr("_src")) {
			curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
		}
	}
});

$(function(){
	$(".img-p").mouseover(function(){
		$(this).find("p").css("background","#f5b950");
		$(this).find("p").css("color","#FFFFFF");
	});
	$(".img-p").mouseleave(function(){
		$(this).find("p").css("background","#FFFFFF");
		$(this).find("p").css("color","#000000");
	});
	$(".img-pr").mouseover(function(){
		$(this).find("p").css("background","#f5b950");
		$(this).find("p").css("color","#FFFFFF");
	});
	$(".img-pr").mouseleave(function(){
		$(this).find("p").css("background","#FFFFFF");
		$(this).find("p").css("color","#000000");
	});
});
