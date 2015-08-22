var config = {
	local: {
		protocol : "mongodb",
		user     : "tennis",
		password : "tennis",	
		host     : "127.0.0.1",
		port     : 27017,         // optional, defaults to database default
		database : "tennis"
	}
}
module.exports = function(mode) {
	c = config[mode] || config.local;
	return c.protocol + "://" + c.user + ":" + c.password + "@" + c.host + ":" + c.port
	+ "/" + c.database;
}