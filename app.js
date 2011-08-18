var express = require('express');

var app = express.createServer();

app.get('/', function (req,res) {
  res.send('hello bayNode'); 
});

app.listen( process.env.C9_PORT || 93);