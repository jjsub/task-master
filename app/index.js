'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var logger = morgan();
var app = express();
var reqbody = bodyParser();
var Task = require('./models/task');


app.use(logger);
app.use(reqbody);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/',function(req, res){
  res.send('hi');
});

app.get('/tasks/new', function(req, res){
  res.render('new-task');
});

app.get('/tasks',function(req, res){

  var taskObject = { tasks: [{
      name: 'Hi',
      due: '1/2/03',
      photo: 'http://hello.com/hi.png',
      tags: 'Hi, You',
      priority: 'Low'
  }]};

  res.render('tasks', taskObject);
});

app.post('/tasks',function(req, res){
  var taskObject = { tasks: [{
        name: 'Hi',
        due: '1/2/03',
      photo: 'http://hello.com/hi.png',
      tags: 'Hi, You',
      priority: 'Low'
  }]};

  taskObject.tasks.push(new Task(req.body));

  res.render('tasks', taskObject);
});

app.listen(3000, function(){
  console.log('Node listening on port 3000 & love is good');
});

