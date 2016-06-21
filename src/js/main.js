jQuery(function($){
   $('#bb-bookblock').imagesLoaded( function() {
      $('#bb-bookblock').bookblock({
       	nextEl      : '.bb-nav-prev',
       	circular    : true,
       	prevEl      : '.bb-nav-next'
       });

      var myArray = $(".bb-bookblock img");
      var heightArray = myArray.map(function() {
        return $(this).height();
      }).get();

      $('.bb-bookblock').css('height', Math.max.apply(Math, heightArray));
      $(window).resize(function () {
        heightArray = myArray.map(function() {
          return $(this).height();
        }).get();
        $('.bb-bookblock').css('height', Math.max.apply(Math, heightArray));
      });
   });    

});

