var express = require('express');
var app = express();
var fs = require('fs');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, function(){
  console.log('listening to this joint on port 3000');
});
