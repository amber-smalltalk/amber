smalltalk.addPackage('Taskig-Model', {});
smalltalk.addClass('NullLogger', smalltalk.Object, [], 'Taskig-Model');
smalltalk.addMethod(
"_debug_",
smalltalk.method({
selector: "debug:",
fn: function (aMessage){
var self=this;

return self;}
}),
smalltalk.NullLogger);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
fn: function (aMessage){
var self=this;

return self;}
}),
smalltalk.NullLogger);

smalltalk.addMethod(
"_fatal_",
smalltalk.method({
selector: "fatal:",
fn: function (aMessage){
var self=this;

return self;}
}),
smalltalk.NullLogger);

smalltalk.addMethod(
"_info_",
smalltalk.method({
selector: "info:",
fn: function (aMessage){
var self=this;

return self;}
}),
smalltalk.NullLogger);

smalltalk.addMethod(
"_trace_",
smalltalk.method({
selector: "trace:",
fn: function (aMessage){
var self=this;

return self;}
}),
smalltalk.NullLogger);

smalltalk.addMethod(
"_warn_",
smalltalk.method({
selector: "warn:",
fn: function (aMessage){
var self=this;

return self;}
}),
smalltalk.NullLogger);



smalltalk.addClass('TranscriptLogger', smalltalk.NullLogger, [], 'Taskig-Model');
smalltalk.addMethod(
"_trace_",
smalltalk.method({
selector: "trace:",
fn: function (aMessage){
var self=this;

return self;}
}),
smalltalk.TranscriptLogger);



smalltalk.addClass('NullStorage', smalltalk.Object, ['tasks'], 'Taskig-Model');
smalltalk.addMethod(
"_delete_",
smalltalk.method({
selector: "delete:",
fn: function (aTask){
var self=this;

return self;}
}),
smalltalk.NullStorage);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;

return self;}
}),
smalltalk.NullStorage);

smalltalk.addMethod(
"_loadTasksInto_",
smalltalk.method({
selector: "loadTasksInto:",
fn: function (aListModel){
var self=this;

return self;}
}),
smalltalk.NullStorage);

smalltalk.addMethod(
"_save_",
smalltalk.method({
selector: "save:",
fn: function (aTask){
var self=this;

return self;}
}),
smalltalk.NullStorage);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;

return self;}
}),
smalltalk.NullStorage);


smalltalk.NullStorage.klass.iVarNames = ['Instance'];

smalltalk.addClass('Task', smalltalk.Object, ['description', 'creationDate', 'dueDate'], 'Taskig-Model');
smalltalk.addMethod(
"_initializeWithDescription_createdOn_dueOn_",
smalltalk.method({
selector: "initializeWithDescription:createdOn:dueOn:",
fn: function (aDescription, aDate, anotherDate){
var self=this;
(self['@description']=aDescription);
(self['@creationDate']=aDate);
(self['@dueDate']=anotherDate);
return self;}
}),
smalltalk.Task);

smalltalk.addMethod(
"_updateWith_",
smalltalk.method({
selector: "updateWith:",
fn: function (aTask){
var self=this;
smalltalk.send(self, "_shouldBeImplemented", []);
return self;}
}),
smalltalk.Task);


smalltalk.addMethod(
"_assert_isLaterThan_",
smalltalk.method({
selector: "assert:isLaterThan:",
fn: function (dueDate, creationDate){
var self=this;
(($receiver = dueDate) != nil && $receiver != undefined) ? (function(){return ((($receiver = ((($receiver = dueDate).klass === smalltalk.Number) ? $receiver >=creationDate : smalltalk.send($receiver, "__gt_eq", [creationDate]))).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((smalltalk.DueDateShouldBeLaterThanCreationDateException || DueDateShouldBeLaterThanCreationDateException), "_signal", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((smalltalk.DueDateShouldBeLaterThanCreationDateException || DueDateShouldBeLaterThanCreationDateException), "_signal", []);})]));})() : nil;
return self;}
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_assertNotEmpty_",
smalltalk.method({
selector: "assertNotEmpty:",
fn: function (aDescription){
var self=this;
smalltalk.send(smalltalk.send(aDescription, "_asString", []), "_ifEmpty_", [(function(){return smalltalk.send((smalltalk.EmptyDescriptionException || EmptyDescriptionException), "_signal", []);})]);
return self;}
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_newWithDefaults",
smalltalk.method({
selector: "newWithDefaults",
fn: function (){
var self=this;
return smalltalk.send(self, "_newWithDescription_", [unescape("What%20shall%20I%20do%3F")]);
return self;}
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_newWithDescription_",
smalltalk.method({
selector: "newWithDescription:",
fn: function (aDescription){
var self=this;
var today=nil;
(today=smalltalk.send(self, "_today", []));
return smalltalk.send(self, "_newWithDescription_createdOn_", [aDescription, today]);
return self;}
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_newWithDescription_createdOn_",
smalltalk.method({
selector: "newWithDescription:createdOn:",
fn: function (aDescription, creationDate){
var self=this;
return smalltalk.send(self, "_newWithDescription_createdOn_dueOn_", [aDescription, creationDate, nil]);
return self;}
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_newWithDescription_createdOn_dueOn_",
smalltalk.method({
selector: "newWithDescription:createdOn:dueOn:",
fn: function (aDescription, creationDate, dueDate){
var self=this;
smalltalk.send(self, "_assertNotEmpty_", [aDescription]);
smalltalk.send(self, "_assert_isLaterThan_", [dueDate, creationDate]);
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithDescription_createdOn_dueOn_", [aDescription, creationDate, dueDate]);
return self;}
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_today",
smalltalk.method({
selector: "today",
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_today", []);
return self;}
}),
smalltalk.Task.klass);


smalltalk.addClass('TaskList', smalltalk.Object, ['tasks', 'announcer'], 'Taskig-Model');
smalltalk.addMethod(
"_addTask_",
smalltalk.method({
selector: "addTask:",
fn: function (aTask){
var self=this;
var announcement=nil;
smalltalk.send(self['@tasks'], "_add_", [aTask]);
(announcement=smalltalk.send((smalltalk.NewTaskAdded || NewTaskAdded), "_newWith_", [aTask]));
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;}
}),
smalltalk.TaskList);

smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return self['@announcer'];
return self;}
}),
smalltalk.TaskList);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlockClosure){
var self=this;
smalltalk.send(self['@tasks'], "_do_", [aBlockClosure]);
return self;}
}),
smalltalk.TaskList);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
(self['@tasks']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
(self['@announcer']=smalltalk.send((smalltalk.Announcer || Announcer), "_new", []));
return self;}
}),
smalltalk.TaskList);

smalltalk.addMethod(
"_removeTask_",
smalltalk.method({
selector: "removeTask:",
fn: function (aTask){
var self=this;
var announcement=nil;
smalltalk.send(self['@tasks'], "_remove_", [aTask]);
(announcement=smalltalk.send((smalltalk.TaskRemoved || TaskRemoved), "_newWith_", [aTask]));
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;}
}),
smalltalk.TaskList);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
fn: function (){
var self=this;
return smalltalk.send(self['@tasks'], "_size", []);
return self;}
}),
smalltalk.TaskList);



