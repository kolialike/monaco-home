jQuery(function(b){b("#bb-bookblock").bookblock({nextEl:".bb-nav-prev",circular:!0,prevEl:".bb-nav-next"}),b(".bb-bookblock").css("height",b(".bb-bookblock img").height()),b(".bb-bookblock .bb-item img").imagesLoaded(function(){b(".bb-bookblock").css("height",b(".bb-bookblock img").height())})}),$(window).resize(function(){$(".bb-bookblock").css("height",$(".bb-bookblock img").height()),$(".bb-bookblock").imagesLoaded(function(){$(".bb-bookblock").css("height",$(".bb-bookblock img").height())})});