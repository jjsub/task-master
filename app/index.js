'use strict'; 

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var logger = morgan();
var app = express();
var reqbody = bodyParser();

app.use(logger);
app.use(reqbody);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/',function(req, res){
  res.send('hi');
});

app.get('/tasks',function(req, res){
  res.render('tasks');
});

app.get('/tasks/new',function(req, res){
  res.render('new-task');
});

app.post('/tasks',function(req, res){
  var taskObject = {
    name: req.body['name'],
    due: req.body['due-date'],
    photo: req.body['photo-url'],
    tags: req.body['tags'],
    priority: req.body['priority']
  }
  res.render('tasks', taskObject);
});

app.listen(3000, function(){
  console.log('Node listening on port 3000');
});

