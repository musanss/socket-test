var http = require('http');
//creating server
var server = new http.createServer();
//setting server listening port and domain
server.listen(3000);
var io = require('socket.io').listen(server, {transports: ["flashsocket" ,"websocket", "xhr-polling", "htmlfile", "jsonp-polling"]});

io.sockets.on('connection', function (socket) {
   socket.emit('WelcomeMsg', 'hello world');
   });