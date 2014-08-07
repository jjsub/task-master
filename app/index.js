'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var logger = morgan();
var app = express();
var reqbody = bodyParser();
var Task = require('./models/task');// export from task.js Task object


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

  var tasks = [{
      name: 'Hi',
      due: '1/2/03',
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
        due: '1/2/03',
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

