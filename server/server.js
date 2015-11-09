var express = require('express');
var config = require('./config.js');

var app = express();


app.get('/',function(req,res){

  res.sendFile('index.html',{ root: config.server.distFolder });

});

var server = app.listen(3000, function(){

  var host = server.address().address;
  var port = server.address().port;

  console.log("Server is now running at http://%s:%s",host,port);

});
