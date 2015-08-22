var express = require('express'),
    app = express(),
    path = require('path'),
    server = require('http').createServer(app),
    fs = require('fs'),
    favicon = require('serve-favicon'),
    methodOverride = require('method-override'),
    logger = require('morgan'),
    conf = require('./config/conf.js')('local');
    // global
    io = require('socket.io')(server);

app.set('port', process.env.PORT || 8080) // define the server port
.use(logger('dev')) // activate dev mod for for the console
.use(methodOverride())


fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      var route = require('./controllers/' + file);
      route.controller(app);
  }
});

// start server
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
