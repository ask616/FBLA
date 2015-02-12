var Twitter = require('twitter');

module.exports = function(app) {

	app.get('/', function(req, res) {

	var client = new Twitter({
	  consumer_key: 'rTxutdJ9DV2S28Zo9cWaR0vX4',
	  consumer_secret: '0O5b5RnxkaFbwT1RyvohJeQk7j9spg1C8v2SXDdrTKcaebd6hp',
	  access_token_key: '384649434-UsNSJmkFGNhJfPibyIA5RXBBzfWWEHVJM2S4cUBH',
	  access_token_secret: 'M5gHDaPYD44YYczpXB9hD7JoI4KrNfrYVXskSZDYXl6hN'
	});
	var tweetArr;
	client.get('search/tweets', {q: 'CycleFitnessNY_'}, function(error, tweets, response){
	  if(error) console.log("error");
	  //tweets.statuses[0].user.profile_image_url
	  tweetArr = tweets.statuses;
	  // console.log(tweets.statuses[0]);
	  res.render('index.ejs',{tweets: tweets.statuses}); // load the home page
	});

		
	});

	app.get('/catalog', function(req, res) {
		res.redirect('/catalog/cyclocross?p=1');
	});

	app.get('/catalog/:section', function(req, res) {

/*done*/var cyclocrossArr = [["Trek Boone 9 Disc", 6299.99, "TrekBoone.jpg","Trek 600 Series OCLV Carbon", "Trek IsoSpeed Cross", "HED Ardennes","Bontrager CX3 Team Issue","Shimano Ultegra","46/36","Shimano R785"],
					/*done*/ ["Trek Crockett 9 Disc", 4999.99, "TrekCrocket.jpg","Trek 200 Series Alpha Aluminum", "Trek IsoSpeed Cross", "HED Ardennes","Bontrager CX3 Team Issue","FSA Energy Cross","46/36","Shimano R785"],
					/*done*/ ["Trek Cronus CX", 3849.99, "TrekCronus.jpg","Monocoque Carbon", "Bontrager Race X Lite Cross", "Bontrager Race Lite FCC","Bontrager CX0","SRAM S900","46/38","Avid Shorty Ultimate"]];

/*done*/var kidsArr = [["Trek KRX Kids", 989.99, "TrekKrx.jpg","Trek Alpha Silver Aluminum", "Trek KRX Aluminum", "Aluminum","Kenda Kontender","Aluminum","48/34","Shimano CX50 Cantilevers"],
		/*done*/	   ["Trek Neko Kids", 499.99, "TrekNeko.jpg","Trek Alpha Silver Aluminum", "Aluminum", "Bontrager Aluminum", "Bontrager LT3","Suntour XCT JR","42/32/22","Shimano HL280"]];


/*done*/var mountainArr = [["Surly Moonlander", 2550.00, "SurlyMoonlander.jpg","Surly TIG-Welded Chromoly", "Surly TIG-Welded Chromoly", "Surly Clown Shoes","Surly Bud, Surly Lou","Surly Offset Double","36/22","Avid SD-1"],
		/*done*/		   ["Trek Fuel Ex 7 29", 2629.99, "TrekFuelEx.jpg","Trek Alpha Platinum Series", "Fox Evolution Series 32", "Bontrager Duster","Bontrager XR3 Expert","Shimano","42/32/24","Shimano"],
		/*done*/		   ["Trek Remedy 9 29", 4499.99, "TrekRemedy.jpg","Trek Alpha Platinum Series", "Fox 34 Factory Series Float", "Bontrager Rhythm Elite","Bontrager XR3 Team Issue","Shimano Deore XT","38/24","Shimano Deore XT"],
		/*done*/		   ["Trek Rumblefish Elite 29 ", 3049.99, "TrekRumblefish.jpg","Trek Alpha Platinum Series", "Fox Evolution Float", "Bontrager Duster","Bontrager 29-3 Expert","Shimano","42/32/24","Shimano SLX"],
		/*done*/		   ["Trek Superfly Elite 100", 2424.99, "TrekSuperflyElite.jpg","Trek OCLV Mountain Carbon", "Fox Factory Series 32", "Bontrager Race Lite","Bontrager 29-1 Team Issue","Shimano Deore XT","38/26","Shimano Deore XT"]];

/*done*/var roadArr = [["Surly Long Haul Trucker (700c)", 1350.00, "SurlyLongHaul.jpg","Surly TIG-Welded Chromoly", "Surly Chromoly", "Alex Adventurer","Continental Tour Ride","Andel","48/36/26","Tektro"],
		/*done*/	   ["Surly Pacer", 1850.00, "SurlyPacer1.jpg","Surly TIG-Welded Chromoly", "Surly Chromoly", "Alex DA28","Schwalbe Durano","Shimano 105","50/34","Shimano Tiagra"],
		/*done*/	   ["Trek 520", 1199.99, "Trek520.jpg","Trek Butted-Chromoly", "Chromoly Touring", "Bontrager TLR","Bontrager AW1 Hardcase","Shimano Deore","48/36/26","Tektro RL-520"],
		/*done*/	   ["Trek Domane 5.2 C", 3679.99, "TrekDomane.jpg","Trek 500 Series OCLV Carbon", "Trek IsoSpeed Carbon", "Bontrager Race","Bontrager R3 Hard-Case Lite","Shimano Ultegra","50/34","Shimano Ultegra"],
		/*done*/	   ["Trek Emonda SL 5", 2599.99, "TrekEmonda.jpg","Trek 500 Series OCLV Carbon", "Trek Emonda Carbon", "Bontrager Race","Bontrager R1 Hard Case Lite","Shimano 105","50/34","Shimano 105"],
		/*done*/	   ["Trek Madone 3.1", 1799.99, "TrekMadone.jpg","Trek 300 Series OCLV carbon", "Trek E2 Carbon Road", "Bontrager","Bontrager R1","SRAM S350","50/34","Shimano 105"],
		/*done*/	   ["Trek Speed Concept 7.5", 4199.99, "TrekSpeed1.jpg","Trek 500 Series OCLV Carbon", "TBontrager KVF E2", "Bontrager Race","Bontrager R3 Hard Case Lite","Shimano Ultegra","52/36","Bontrager Race Lite"]];

/*done*/var womensArr = [["Trek Syke", 439.99, "TrekSyke.jpg","Trek Alpha Silver Aluminum", "SR Suntour M3030", "Bontrager 550","Bontrager LT-3","Shimano","48/38/28","Tektro"],
		/*done*/	   ["Trek 7.3 FX WSD", 659.99, "Trek7.3.jpg","Trek FX Alpha Gold Aluminum", "Trek FX Aluminum", "Bontrager Tubeless", "Bontrager AW1 Hardcase Lite","Shimano Acera","48/36/26","Tektro"]];

/*done*/var electricArr = [["Electra Townie Go!", 2409.99, "ElectraTownie.jpg","Electra 6061-Aluminum", "High-Tensile Steel", "Aluminum","Schwalbe Fat Frank","Forged Alloy 170mm","46/36","Alloy 4-Finger"],
					/*done*/ ["Trek T80+", 1999.99, "Trek180.jpg","Trek Alpha Silver Aluminum", "SR SunTour CR-8V", "Vuelta Airline II","Schwalbe Road Cruiser Light","Shimano M171","46/36","Tektro TRB-02"]];

/*done*/var foldingArr = [["Dahon Anniversary Replica", 2198.99, "AnniversaryReplica.png","PA Series-Dalloy", "Carbon Fiber", "Alloy","Durano","Omega Mega Exo","46/36","Shimano Tiagra"]];


		var sendArr = cyclocrossArr;

		var section = req.params.section;

		if(section == "kids")
			sendArr = kidsArr;
		else if(section == "cyclocross")
			sendArr = cyclocrossArr;
		else if(section == "mountain")
			sendArr = mountainArr;
		else if(section == "road")
			sendArr = roadArr;
		else if(section == "electric")
			sendArr = electricArr;
		else if(section == "women")
			sendArr = womensArr;
		else if(section == "folding")
			sendArr = foldingArr;
		else
			sendArr = cyclocrossArr

		var index;

		if(!req.query.p)
			index = 0;
		else
			index = parseInt(req.query.p)-1;

		// console.log(index);

		if(index < 0 || index > sendArr.length)
			index = 0;

		section = req.params.section.charAt(0).toUpperCase()+req.params.section.substring(1,req.params.section.length);
		// console.log(section);
		res.render('catalog.ejs',{bikeArr: sendArr[index], arrIndex:index, sec: section, len:sendArr.length}); // load the index.ejs file

	});


}