jQuery(function($){
   $('#bb-bookblock').imagesLoaded( function() {
      $('#bb-bookblock').bookblock({
       	nextEl      : '.bb-nav-prev',
       	circular    : true,
       	prevEl      : '.bb-nav-next'
       });
      $(window).resize(function () {
        $('.bb-bookblock').css('height', $(".bb-bookblock img").height());
      });
      $('.bb-bookblock').css('height', $(".bb-bookblock img").height());
   });    

});

