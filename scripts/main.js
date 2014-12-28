function initialize() {

		var myLatlng = new google.maps.LatLng(40.7239272,-74.0046749);
		var mapOptions = {
			zoom: 17,
			center: myLatlng
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h3 id="firstHeading" class="firstHeading">Cycle Fitness</h3>'+
		'<div id="bodyContent">'+
		'bicycle shop</p>'+
		'(last visited June 22, 2009).</p>'+
		'</div>'+
		'</div>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon:'images/point.png',
			title: 'Cycle Fitness'
		});
		infowindow.open(map,marker);

	}

	google.maps.event.addDomListener(window, 'load', initialize);