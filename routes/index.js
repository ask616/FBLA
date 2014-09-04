module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});

	app.get('/inner', function(req, res) {
		res.render('inner.ejs'); // load the index.ejs file
	});


}