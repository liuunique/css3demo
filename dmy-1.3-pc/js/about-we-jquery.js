//banner
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
//tab
$(function () {
	$(".no-select").each(function (i,e) {
		$(e).on('click',function(){
			$(this).siblings().removeClass("select");
			$(this).addClass("select");
			$(".aw-content-back").eq(i).show();
			$(".aw-content-back").eq(i).siblings().hide();
		})
	})
})