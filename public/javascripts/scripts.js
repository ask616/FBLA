/***************** Waypoints ******************/

$(document).ready(function() {

	var s = skrollr.init({
		render: function(data) {},
		forceHeight:false
	});

	$('.goal1').waypoint(function() {
		// Animate the element's value from x to y:
		$({someValue: 0}).animate({someValue: 1500080}, {
			duration: 3000,
  			easing:'swing', // can be anything
	      step: function() { // called on every step
	          // Update the element's text with rounded-up value:
	          $('#vaccinations').text(commaSeparateNumber(Math.ceil(this.someValue)));
	      },
	      complete:function(){
	      	$('#vaccinations').text("1,500,000+");
	      }
	  });
	},
	{
		offset:"80%"
	});


	$('.goal2').waypoint(function() {
		$({someValue: 0}).animate({someValue: 2000080}, {
			duration: 3000,
      easing:'swing', // can be anything
      step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('#surepods').text(commaSeparateNumber(Math.ceil(this.someValue)));
      },
      complete:function(){
      	$('#surepods').text("2,000,000+");
      }
  });
	},
	{
		offset:"80%"
	});


	$('.goal3').waypoint(function() {
		$({someValue: 0}).animate({someValue: 1000080}, {
			duration: 3000,
      easing:'swing', // can be anything
      step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('#water').text(commaSeparateNumber(Math.ceil(this.someValue)));
      },
      complete:function(){
      	$('#water').text("1,000,000+");
      }
  });
	},
	{
		offset:"80%"
	});


	

	


	function commaSeparateNumber(val){
		while (/(\d+)(\d{3})/.test(val.toString())){
			val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		}
		return val;
	}







	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function(){
	if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
        	if (!$(this).hasClass("hover")) {
        		$(this).addClass("hover");
        	}
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
        	e.preventDefault();
        	e.stopPropagation();
        	if ($(this).closest(".img").hasClass("hover")) {
        		$(this).closest(".img").removeClass("hover");
        	}
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
        	$(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
        	$(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {


	var s = skrollr.init({
		render: function(data) {},
		forceHeight:false
	});

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});
