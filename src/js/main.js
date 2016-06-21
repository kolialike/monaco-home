jQuery(function($){
   $('#bb-bookblock').bookblock({
   	nextEl      : '.bb-nav-prev',
   	circular    : true,
   	prevEl      : '.bb-nav-next'
   });
   
      $('.bb-bookblock').css('height', $(".bb-bookblock img").height());

    $('.bb-bookblock .bb-item img').imagesLoaded( function() {
  		$('.bb-bookblock').css('height', $(".bb-bookblock img").height());
  	});

});

  $(window).resize(function () {
    $('.bb-bookblock').css('height', $(".bb-bookblock img").height());
    $('.bb-bookblock').imagesLoaded( function() {
  		$('.bb-bookblock').css('height', $(".bb-bookblock img").height());
    });
	
});
