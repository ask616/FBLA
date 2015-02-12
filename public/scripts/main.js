function initialize() {

	var myLatlng = new google.maps.LatLng(40.7239272,-74.0046749);
	var mapOptions = {
		zoom: 17,
		center: myLatlng,
		scrollwheel:false
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		icon:'images/point.png',
		title: 'Cycle Fitness'
	});

}

google.maps.event.addDomListener(window, 'load', initialize);




$(document).ready(function(){

	 $(".about-link").click(function(){
	 	$('html,body').animate({
             scrollTop: $(".about-text").offset().top 
        }, 1000)
	 });

	 $(".faq-link").click(function(){
	 	$('html,body').animate({
             scrollTop: $(".faq").offset().top 
        }, 1000)
	 });

	 $(".seminars-link").click(function(){
	 	$('html,body').animate({
             scrollTop: $(".seminars").offset().top 
        }, 1000)
	 });
	 
	 $(".contact-link").click(function(){
	 	$('html,body').animate({
             scrollTop: $(".contact").offset().top 
        }, 1000)
	 });
	 
	  $(".learn-more-button").click(function(){
	 	$('html,body').animate({
             scrollTop: $(".about-qualities").offset().top 
        }, 1000)
	 });

    $(".catalog-link").click(function(){
    $('html,body').animate({
             scrollTop: $(".catalog").offset().top 
        }, 1000)
   });

	 $("#map-canvas").height($(".contact-form-wrapper").height()+80);

   $(".video-wrapper,.video-overlay").height($(".video-content-wrapper").height()+200);

	 
	 
});