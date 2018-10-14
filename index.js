var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
  
});
server.listen(3000);

/*var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(){
	
});
server.listen(3000);*/