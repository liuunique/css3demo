$(function(){
   //点击分页
	$("#pageGro li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
		currOn();
	})
	$("#pageGro .pageDown").click(function(){
		$("#pageGro li.on").removeClass("on").next("li").addClass("on");
		var control = $("#pageGro li.on").text();
		if(control>5){
			return;
		}
		currOn();
	})
	$(".pageUp").click(function(){
		$(this).addClass("on");
		$("#pageGro li").removeClass("on");
	})
	$(".pageLast").click(function(){
		$(this).addClass("on");
		$("#pageGro li").removeClass("on");

	})

})
//当前选中的 页码
function currOn(obj){
	var obj = $("#pageGro li.on");
	var num = obj.text();
	if(num ==1){
		$(".news-list:eq(0)").show().siblings(".news-list").hide();
		$(".pageUp").hide();
		$(".pageLast").removeClass("on").show();
		$(".pageDown").removeClass("on").show();
	}
	if(num==2){
		$(".news-list:eq(1)").show().siblings(".news-list").hide();
		$(".pageUp").removeClass("on").show();
		$(".pageLast").removeClass("on").show();
		$(".pageDown").removeClass("on").show();
	}
	if(num==3){
		$(".news-list:eq(2)").show().siblings(".news-list").hide();
		$(".pageUp").removeClass("on").show();
		$(".pageLast").removeClass("on").show();
		$(".pageDown").removeClass("on").show();
	}
	if(num==4){
		$(".news-list:eq(3)").show().siblings(".news-list").hide();
		$(".pageUp").removeClass("on").show();
		$(".pageLast").removeClass("on").show();
		$(".pageDown").removeClass("on").show();
	}
	if(num==5){
		$(".news-list:eq(4)").show().siblings(".news-list").hide();
		$(".pageUp").removeClass("on").show();
		$(".pageLast").hide();
		$(".pageDown").hide();
	}
}
$(function () {
	$(".pageUp").each(function (i, e) {
		$(e).on('click', function () {
			$(".news-list").eq(0).show();
			$(".pageLast").removeClass("on");
			$(".news-list").eq(0).siblings().hide();
		});
	});
});
$(function () {
	$(".pageLast").each(function (i, e) {
		$(e).on('click', function () {
			$(".news-list").eq(4).show();
			$(".pageUp").removeClass("on");
			$(".news-list").eq(4).siblings().hide();
		});
	});
});
