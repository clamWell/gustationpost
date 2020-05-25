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


	/******** 모바일 전용 조정 ********/
	if(isMobile==true){
		$(".page-title-img").find("img").attr("src", "img/page-title-img-m.png");
	
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
