var express = require('express');
var io = require('socket.io');

var app = express.createServer();

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req,res) {
  res.send('hello bayNode'); 
});

app.listen( process.env.C9_PORT || 93);

var sockets = io.listen(app).sockets;

sockets.on('connection', function (socket) {
    socket.emit('news','NEWS!');
});
