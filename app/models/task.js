'use strict';

function Task(o){

  if(o.date){
    this.due = new Date(o.date)
  } else {
    this.due = new Date()
  }

  this.name     = o.name;
  this.photo    = o.photo;
  this.tags     = o.tags;
  this.priority = o.priority;
}

module.exports = Task;

