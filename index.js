/*var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
  
});
server.listen(3000);*/

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.configure(function () {  
  io.set("transports", ["flashsocket" , "websocket", "xhr-polling", "htmlfile", "jsonp-polling"]);
  io.set("polling duration", 10); 
  });

io.on('connection', function(socket){
	
});
server.listen(3000);