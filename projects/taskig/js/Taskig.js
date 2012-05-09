smalltalk.addPackage('Taskig', {});
smalltalk.addClass('ToDoApp', smalltalk.Object, ['logger', 'storage', 'listModel', 'listWidget'], 'Taskig');
smalltalk.ToDoApp.comment=unescape("A%20ToDoApp%20is%20the%20entry%20point%20for%20this%20ToDo%20application.%0D%0DInstance%20Variables%0D%09listModel%3A%09%09Data%20model.%0D%09listWidget%3A%09Main%20widget.%0D%09logger%3A%09%09%09A%20logging%20facility.%0D%09storage%3A%09%09A%20storage%20facility.")
smalltalk.addMethod(
"_initializeWithLogger_andStorage_",
smalltalk.method({
selector: "initializeWithLogger:andStorage:",
category: 'initialize-release',
fn: function (aLogger, aStorage){
var self=this;
(self['@logger']=aLogger);
(self['@storage']=aStorage);
(self['@listModel']=smalltalk.send((smalltalk.TaskList || TaskList), "_new", []));
smalltalk.send(self['@storage'], "_loadTasksInto_", [self['@listModel']]);
(self['@listWidget']=smalltalk.send((smalltalk.TaskListWidget || TaskListWidget), "_newWithList_", [self['@listModel']]));
smalltalk.send(self, "_setupListeners", []);
smalltalk.send(self, "_open", []);
return self;},
args: ["aLogger", "aStorage"],
source: unescape("initializeWithLogger%3A%20aLogger%20andStorage%3A%20aStorage%20%0A%09%22Main%20initialization%20method.%22%0A%09logger%20%3A%3D%20aLogger.%0A%09storage%20%3A%3D%20aStorage.%0A%09listModel%20%3A%3D%20TaskList%20new.%0A%09storage%20loadTasksInto%3A%20listModel.%0A%09listWidget%20%3A%3D%20TaskListWidget%20newWithList%3A%20listModel.%0A%09self%20setupListeners.%0A%09self%20open."),
messageSends: ["new", "loadTasksInto:", "newWithList:", "setupListeners", "open"],
referencedClasses: ["TaskList", "TaskListWidget"]
}),
smalltalk.ToDoApp);

smalltalk.addMethod(
"_listWidget",
smalltalk.method({
selector: "listWidget",
category: 'accessing',
fn: function (){
var self=this;
return self['@listWidget'];
return self;},
args: [],
source: unescape("listWidget%0D%09%5ElistWidget"),
messageSends: [],
referencedClasses: []
}),
smalltalk.ToDoApp);

smalltalk.addMethod(
"_onTaskAdded_",
smalltalk.method({
selector: "onTaskAdded:",
category: 'interaction',
fn: function (aTask){
var self=this;
smalltalk.send(self['@storage'], "_save_", [aTask]);
return self;},
args: ["aTask"],
source: unescape("onTaskAdded%3A%20aTask%0D%09%22The%20model%20has%20added%20a%20task.%20Save%20it.%22%0D%09storage%20save%3A%20aTask"),
messageSends: ["save:"],
referencedClasses: []
}),
smalltalk.ToDoApp);

smalltalk.addMethod(
"_onTaskRemoved_",
smalltalk.method({
selector: "onTaskRemoved:",
category: 'interaction',
fn: function (aTask){
var self=this;
smalltalk.send(self['@storage'], "_delete_", [aTask]);
return self;},
args: ["aTask"],
source: unescape("onTaskRemoved%3A%20aTask%0D%09%22The%20model%20has%20removed%20a%20task.%20Save%20it.%22%0D%09storage%20delete%3A%20aTask"),
messageSends: ["delete:"],
referencedClasses: []
}),
smalltalk.ToDoApp);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
category: 'initialize-release',
fn: function (){
var self=this;
smalltalk.send(self['@listWidget'], "_appendToJQuery_", [smalltalk.send(unescape("%23playground"), "_asJQuery", [])]);
return self;},
args: [],
source: unescape("open%0A%09%22Show%20the%20main%20widget%22%0A%09listWidget%20appendToJQuery%3A%20%27%23playground%27%20asJQuery%20"),
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.ToDoApp);

smalltalk.addMethod(
"_setupListeners",
smalltalk.method({
selector: "setupListeners",
category: 'initialize-release',
fn: function (){
var self=this;
var announcer=nil;
(announcer=smalltalk.send(self['@listModel'], "_announcer", []));
smalltalk.send(announcer, "_on_do_", [(smalltalk.NewTaskAdded || NewTaskAdded), (function(announcement){return smalltalk.send(self, "_onTaskAdded_", [smalltalk.send(announcement, "_task", [])]);})]);
smalltalk.send(announcer, "_on_do_", [(smalltalk.TaskRemoved || TaskRemoved), (function(announcement){return smalltalk.send(self, "_onTaskRemoved_", [smalltalk.send(announcement, "_task", [])]);})]);
return self;},
args: [],
source: unescape("setupListeners%0D%09%22Listen%20to%20changes%20in%20the%20listModel%22%0D%09%7C%20announcer%20%7C%0D%09announcer%20%3A%3D%20listModel%20announcer.%0D%0D%09announcer%20on%3A%20NewTaskAdded%20do%3A%20%5B%20%3Aannouncement%20%7C%20self%20onTaskAdded%3A%20announcement%20task%20%5D.%0D%09announcer%20on%3A%20TaskRemoved%20do%3A%20%5B%20%3Aannouncement%20%7C%20self%20onTaskRemoved%3A%20announcement%20task%20%5D."),
messageSends: ["announcer", "on:do:", "onTaskAdded:", "task", "onTaskRemoved:"],
referencedClasses: ["NewTaskAdded", "TaskRemoved"]
}),
smalltalk.ToDoApp);


smalltalk.addMethod(
"_defaultLogger",
smalltalk.method({
selector: "defaultLogger",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.NullLogger || NullLogger), "_new", []);
return self;},
args: [],
source: unescape("defaultLogger%0D%0D%09%5E%20NullLogger%20new"),
messageSends: ["new"],
referencedClasses: ["NullLogger"]
}),
smalltalk.ToDoApp.klass);

smalltalk.addMethod(
"_defaultStorage",
smalltalk.method({
selector: "defaultStorage",
category: 'configuration',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.NullStorage || NullStorage), "_new", []);
return self;},
args: [],
source: unescape("defaultStorage%0A%0A%09%5E%20NullStorage%20new"),
messageSends: ["new"],
referencedClasses: ["NullStorage"]
}),
smalltalk.ToDoApp.klass);

smalltalk.addMethod(
"_main",
smalltalk.method({
selector: "main",
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(self, "_newWithDefaults", []);
return self;},
args: [],
source: unescape("main%0A%0A%09self%20newWithDefaults.%0A"),
messageSends: ["newWithDefaults"],
referencedClasses: []
}),
smalltalk.ToDoApp.klass);

smalltalk.addMethod(
"_newWithDefaults",
smalltalk.method({
selector: "newWithDefaults",
category: 'instance creation',
fn: function (){
var self=this;
var logger=nil;
var storage=nil;
(logger=smalltalk.send(self, "_defaultLogger", []));
(storage=smalltalk.send(self, "_defaultStorage", []));
return smalltalk.send(self, "_newWithLogger_andStorage_", [logger, storage]);
return self;},
args: [],
source: unescape("newWithDefaults%0D%09%22Create%20a%20new%20ToDo%20application%20with%20default%20logger%20and%20storage.%22%0D%09%7C%20logger%20storage%20%7C%0D%09logger%20%3A%3D%20self%20defaultLogger.%0D%09storage%20%3A%3D%20self%20defaultStorage.%0D%09%5Eself%20newWithLogger%3A%20logger%20andStorage%3A%20storage"),
messageSends: ["defaultLogger", "defaultStorage", "newWithLogger:andStorage:"],
referencedClasses: []
}),
smalltalk.ToDoApp.klass);

smalltalk.addMethod(
"_newWithLogger_andStorage_",
smalltalk.method({
selector: "newWithLogger:andStorage:",
category: 'instance creation',
fn: function (logger, storage){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithLogger_andStorage_", [logger, storage]);
return self;},
args: ["logger", "storage"],
source: unescape("newWithLogger%3A%20logger%20andStorage%3A%20storage%0D%09%22Create%20a%20new%20ToDo%20application.%22%0D%09%5Eself%20new%20initializeWithLogger%3A%20logger%20andStorage%3A%20storage"),
messageSends: ["initializeWithLogger:andStorage:", "new"],
referencedClasses: []
}),
smalltalk.ToDoApp.klass);


smalltalk.addMethod(
"_todo_",
smalltalk.method({
selector: "todo:",
category: '*Taskig',
fn: function (aString){
var self=this;
return self;
return self;},
args: ["aString"],
source: unescape("todo%3A%20aString%0A%09%22Do%20nothing.%20This%20is%20for%20notes%20to%20the%20developer.%22%0A%09%5Eself"),
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_signal_",
smalltalk.method({
selector: "signal:",
category: '*Taskig-Exceptions',
fn: function (aString){
var self=this;
return (function($rec){smalltalk.send($rec, "_messageText_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send(self, "_new", []));
return self;},
args: ["aString"],
source: unescape("signal%3A%20aString%0A%09%20%20%20%20%5Eself%20new%0A%09%09messageText%3A%20aString%3B%0A%09%09signal"),
messageSends: ["messageText:", "signal", "new"],
referencedClasses: []
}),
smalltalk.Error.klass);

