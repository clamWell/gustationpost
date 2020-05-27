$(function(){
	var ieTest = false,
		screenWidth = $(window).width(),
		screenHeight = $(window).height(),
		imgURL = "http://img.khan.co.kr/spko/storytelling/2020/gustation/",
		isMobile = screenWidth <= 800 && true || false,
		isNotebook = (screenWidth <= 1300 && screenHeight < 750) && true || false,
		isMobileLandscape = ( screenWidth > 400 && screenWidth <= 800 && screenHeight < 450 ) && true || false;
	window.onbeforeunload = function(){ window.scrollTo(0, 0) ;}
	var randomRange = function(n1, n2) {
		return Math.floor((Math.random() * (n2 - n1 + 1)) + n1);
	};
	$(window).resize(function() {
		screenWidth = $(window).width();
		screenHeight = $(window).height();
    });

	$(".close-ie-block").on("click", function(){
		$(".ie-block-9").hide();
	})


	var userPutMsg = "";
	function setPostDefault(){
		$(".user-made-post").hide();
		$(".user-made-post").addClass("user-made-post-scale");	
	}
	setPostDefault();

	function makePost(msg){
		if(msg.length >= 40){
			$(".alertMsg").fadeIn();
		}else{
			$(".alertMsg").hide();
			$(".text-input .input-bar").addClass("input-bar-block");
			$(".user-made-post .post-msg p").html(userPutMsg);
			$(".user-made-post").fadeIn();
			$(".user-made-post").removeClass("user-made-post-scale");
			var topMoveVal = ($(".user-made-post").height()-$(".user-made-post .post-msg p").outerHeight())/2;
			$(".user-made-post .post-msg p").css({"top":topMoveVal+"px"});
			$(".user-made-post .post-msg p").animate({"opacity":"1"},500);  
	}
	
	};
	$("#USER_POST_CONFIRM").on("click", function(e){
		e.preventDefault();
		userPutMsg = $("#USER_POST").val();
		makePost(userPutMsg);
	});


	/******** 모바일 전용 조정 ********/
	if(isMobile==true){
		//$(".page-title-img").find("img").attr("src", imgURL + "page-title-full-m.png");
		$(".back-post-holder").insertAfter(".intro-front");
	
	}
	/******** 모바일 전용 조정 ********/
	function init(){
		$introItem = $(".station-item");
		for(o=0; o<$introItem.length;o++){
			$introItem.eq(o).delay(o*500).animate({"opacity":"1", "filter":"none","-webkit-filter":"none"}, 1500);
		};
	}

	$(".loading-page").fadeOut(200, function(){
		init();
	});


	

});

function sendSns(s) {
  var url = encodeURIComponent(location.href),
	  txt = encodeURIComponent($("title").html());
  switch (s) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      break;
    case 'twitter':
      window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
      break;
  }
}
