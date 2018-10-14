var app = require('express')();
var http = require('http').createServer();
var io = require('socket.io').listen(http, {transports:['flashsocket', 'websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling']});
var port = process.env.PORT || 3000;

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

