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










cal_days_labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// these are human-readable month name labels, in order
cal_months_labels = ['January', 'February', 'March', 'April',
                     'May', 'June', 'July', 'August', 'September',
                     'October', 'November', 'December'];

// these are the days of the week for each month, in order
cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

cal_current_date = new Date(); 

var monthName = cal_months_labels[this.month];
var html = '<table class="calendar-table">';
html += '<tr><th colspan="7">';
html +=  monthName + "&nbsp;" + this.year;
html += '</th></tr>';
html += '<tr class="calendar-header">';
for (var i = 0; i <= 6; i++ ){
  html += '<td class="calendar-header-day">';
  html += cal_days_labels[i];
  html += '</td>';
}
html += '</tr><tr>';


function Calendar(month, year) {
  this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
  this.year  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
  this.html = '';
}

Calendar.prototype.generateHTML = function(){

  // get first day of month
  var firstDay = new Date(this.year, this.month, 1);
  var startingDay = firstDay.getDay();
  
  // find number of days in month
  var monthLength = cal_days_in_month[this.month];
  
  // compensate for leap year
  if (this.month == 1) { // February only!
    if((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
      monthLength = 29;
    }
  }


  // fill in the days
  var day = 1;

  var date = new Date();
  var currDate = date.getUTCDate();

  // this loop is for is weeks (rows)
  var html = "";
  for (var i = 0; i < 9; i++) {
  	html+='<tr class="calendar-row">'
    // this loop is for weekdays (cells)
    for (var j = 0; j <= 6; j++) { 
      html += '<td align=center>';
      if (day <= monthLength && (i > 0 || j >= startingDay)) {
      	if(day == currDate){
      		html+="<div class='curr-date'><span class='curr-date-text'><b>"+ day+"</b></span></div>";
      	} else
        	html += day;
        day++;
      }
      html += '</td>';
    }
    html+="</tr><tr>"
    // stop making rows if we've run out of days
    if (day > monthLength) {
      break;
    } else {
      html += '</tr>';
    }
  }

  $(".calendar").append(html);
}

$(document).ready(function(){
	var cal = new Calendar();
	 cal.generateHTML();
	 
});