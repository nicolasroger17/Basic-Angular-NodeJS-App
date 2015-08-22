var model = require('../models/tennis');

module.exports.controller = function(app) {
	app.get('/tennis', function(req, res) {
		res.send(model.infos());
	});
}