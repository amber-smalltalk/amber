smalltalk.addPackage('Taskig', {});
smalltalk.addClass('ToDoApp', smalltalk.Object, ['logger', 'storage', 'listModel', 'listWidget'], 'Taskig');
smalltalk.addMethod(
"_initializeWithLogger_andStorage_",
smalltalk.method({
selector: "initializeWithLogger:andStorage:",
fn: function (aLogger, aStorage){
var self=this;
(self['@logger']=aLogger);
(self['@storage']=aStorage);
(self['@listModel']=smalltalk.send((smalltalk.TaskList || TaskList), "_new", []));
smalltalk.send(self['@storage'], "_loadTasksInto_", [self['@listModel']]);
(self['@listWidget']=smalltalk.send((smalltalk.TaskListWidget || TaskListWidget), "_newWithList_", [self['@listModel']]));
smalltalk.send(self, "_setupListeners", []);
smalltalk.send(self, "_open", []);
return self;}
}),
smalltalk.ToDoApp);

smalltalk.addMethod(
"_listWidget",
smalltalk.method({
selector: "listWidget",
fn: function (){
var self=this;
return self['@listWidget'];
return self;}
}),
smalltalk.ToDoApp);

smalltalk.addMethod(
"_onTaskAdded_",
smalltalk.method({
selector: "onTaskAdded:",
fn: function (aTask){
var self=this;
smalltalk.send(self['@storage'], "_save_", [aTask]);
return self;}
}),
smalltalk.ToDoApp);

smalltalk.addMethod(
"_onTaskRemoved_",
smalltalk.method({
selector: "onTaskRemoved:",
fn: function (aTask){
var self=this;
smalltalk.send(self['@storage'], "_delete_", [aTask]);
return self;}
}),
smalltalk.ToDoApp);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
smalltalk.send(self['@listWidget'], "_appendToJQuery_", [smalltalk.send(unescape("%23playground"), "_asJQuery", [])]);
return self;}
}),
smalltalk.ToDoApp);

smalltalk.addMethod(
"_setupListeners",
smalltalk.method({
selector: "setupListeners",
fn: function (){
var self=this;
var announcer=nil;
(announcer=smalltalk.send(self['@listModel'], "_announcer", []));
smalltalk.send(announcer, "_on_do_", [(smalltalk.NewTaskAdded || NewTaskAdded), (function(announcement){return smalltalk.send(self, "_onTaskAdded_", [smalltalk.send(announcement, "_task", [])]);})]);
smalltalk.send(announcer, "_on_do_", [(smalltalk.TaskRemoved || TaskRemoved), (function(announcement){return smalltalk.send(self, "_onTaskRemoved_", [smalltalk.send(announcement, "_task", [])]);})]);
return self;}
}),
smalltalk.ToDoApp);


smalltalk.addMethod(
"_defaultLogger",
smalltalk.method({
selector: "defaultLogger",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.NullLogger || NullLogger), "_new", []);
return self;}
}),
smalltalk.ToDoApp.klass);

smalltalk.addMethod(
"_defaultStorage",
smalltalk.method({
selector: "defaultStorage",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.NullStorage || NullStorage), "_new", []);
return self;}
}),
smalltalk.ToDoApp.klass);

smalltalk.addMethod(
"_main",
smalltalk.method({
selector: "main",
fn: function (){
var self=this;
smalltalk.send(self, "_newWithDefaults", []);
return self;}
}),
smalltalk.ToDoApp.klass);

smalltalk.addMethod(
"_newWithDefaults",
smalltalk.method({
selector: "newWithDefaults",
fn: function (){
var self=this;
var logger=nil;
var storage=nil;
(logger=smalltalk.send(self, "_defaultLogger", []));
(storage=smalltalk.send(self, "_defaultStorage", []));
return smalltalk.send(self, "_newWithLogger_andStorage_", [logger, storage]);
return self;}
}),
smalltalk.ToDoApp.klass);

smalltalk.addMethod(
"_newWithLogger_andStorage_",
smalltalk.method({
selector: "newWithLogger:andStorage:",
fn: function (logger, storage){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithLogger_andStorage_", [logger, storage]);
return self;}
}),
smalltalk.ToDoApp.klass);


smalltalk.addMethod(
"_todo_",
smalltalk.method({
selector: "todo:",
fn: function (aString){
var self=this;
return self;
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
"_signal_",
smalltalk.method({
selector: "signal:",
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.Error.klass);

