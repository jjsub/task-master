'use strict';

function Task(o){
  this.name     = o.name;
  this.due      = o.due;
  this.photo    = o.photo;
  this.tags     = o.tags;
  this.priority = o.priority;
}

module.exports = Task;

