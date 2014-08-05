'use strict'; 

var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/',function(req, res){
  res.send('hi');
});

app.get('/tasks',function(req, res){
  res.render('tasks');
});

app.listen(3000, function(){
  console.log('Node listening on port 3000');
});

