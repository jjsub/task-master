'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var moment = require('moment');

var Task = require('./models/task');// export from task.js Task object

var logger = morgan();
var reqbody = bodyParser();
var app = express();

app.use(logger);
app.use(reqbody);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.locals.moment = moment;

app.get('/',function(req, res){
  var now = moment();
  res.send(now);
});

app.get('/tasks/new', function(req, res){
  res.render('new-task');
});

app.get('/tasks',function(req, res){

  var tasks = [{
      name: 'Hi',
      due: new Date('1/2/03'),
      photo: 'http://i.imgur.com/prVZKtL.png',
      tags: 'Hi, You',
      priority: 'Low'
  }];
                    // {tasks: tasks } is the array raped in a object
  res.render('tasks', { tasks: tasks });
});

app.post('/tasks',function(req, res){
  var tasks = [{
        name: 'Hi',
        due: new Date('1/2/03'),
      photo: 'http://i.imgur.com/prVZKtL.png',
      tags: 'Hi, You',
      priority: 'Low'
  }];
  // This is the constructor
  tasks.push(new Task(req.body));

  res.render('tasks', { tasks: tasks });
});

app.listen(3000, function(){
  console.log('Node listening on port 3000 & love is good');
});

