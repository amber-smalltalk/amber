smalltalk.addPackage('Taskig-Tests', {});
smalltalk.addClass('ExceptionsTestCase', smalltalk.TestCase, [], 'Taskig-Tests');
smalltalk.addMethod(
"_testRaisingEnException",
smalltalk.method({
selector: "testRaisingEnException",
fn: function (){
var self=this;
smalltalk.send((function(){return smalltalk.send((smalltalk.EmptyDescriptionException || EmptyDescriptionException), "_signal", []);}), "_on_do_", [(smalltalk.EmptyDescriptionException || EmptyDescriptionException), (function(exception){return smalltalk.send(self, "_assert_equals_", [smalltalk.send(exception, "_messageText", []), smalltalk.send((smalltalk.EmptyDescriptionException || EmptyDescriptionException), "_message", [])]);})]);
return self;}
}),
smalltalk.ExceptionsTestCase);



smalltalk.addClass('Mock', smalltalk.Object, ['selectorList'], 'Taskig-Tests');
smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
smalltalk.send(self['@selectorList'], "_at_ifPresent_ifAbsent_", [smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", []), (function(valueBlock){return smalltalk.send(valueBlock, "_value", []);}), (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object);})]);
return self;}
}),
smalltalk.Mock);

smalltalk.addMethod(
"_ignore_",
smalltalk.method({
selector: "ignore:",
fn: function (aSelectorSymbol){
var self=this;
smalltalk.send(self['@selectorList'], "_at_put_", [smalltalk.send(aSelectorSymbol, "_asSymbol", []), (function(){return nil;})]);
return self;}
}),
smalltalk.Mock);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
(self['@selectorList']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;}
}),
smalltalk.Mock);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
fn: function (aSelectorSymbol, aBlockClosure){
var self=this;
smalltalk.send(self['@selectorList'], "_at_put_", [smalltalk.send(aSelectorSymbol, "_asSymbol", []), aBlockClosure]);
return self;}
}),
smalltalk.Mock);



smalltalk.addClass('MockTestCase', smalltalk.TestCase, [], 'Taskig-Tests');
smalltalk.addMethod(
"_testAmessageWithoutArguments",
smalltalk.method({
selector: "testAmessageWithoutArguments",
fn: function (){
var self=this;
var mock=nil;
var visited=nil;
(visited=false);
(mock=smalltalk.send((smalltalk.Mock || Mock), "_new", []));
smalltalk.send(mock, "_on_do_", [smalltalk.symbolFor("testOne"), (function(){return (visited=true);})]);
smalltalk.send(mock, "_testOne", []);
smalltalk.send(self, "_assert_", [visited]);
return self;}
}),
smalltalk.MockTestCase);

smalltalk.addMethod(
"_testAnIgonredMessage",
smalltalk.method({
selector: "testAnIgonredMessage",
fn: function (){
var self=this;
var mock=nil;
(mock=smalltalk.send((smalltalk.Mock || Mock), "_new", []));
smalltalk.send(mock, "_ignore_", [smalltalk.symbolFor("thisMessage")]);
smalltalk.send(mock, "_thisMessage", []);
return self;}
}),
smalltalk.MockTestCase);

smalltalk.addMethod(
"_testAnIgonredMessageShouldNotDoAnything",
smalltalk.method({
selector: "testAnIgonredMessageShouldNotDoAnything",
fn: function (){
var self=this;
var mock=nil;
(mock=smalltalk.send((smalltalk.Mock || Mock), "_new", []));
smalltalk.send(mock, "_ignore_", [smalltalk.symbolFor("thisMessage")]);
smalltalk.send(mock, "_thisMessage", []);
return self;}
}),
smalltalk.MockTestCase);

smalltalk.addMethod(
"_testAnUnknownMessage",
smalltalk.method({
selector: "testAnUnknownMessage",
fn: function (){
var self=this;
var mock=nil;
(mock=smalltalk.send((smalltalk.Mock || Mock), "_new", []));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(mock, "_testOne", []);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.MockTestCase);



smalltalk.addClass('TaskListTestCase', smalltalk.TestCase, ['task', 'list'], 'Taskig-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
var today=nil;
(today=smalltalk.send((smalltalk.Date || Date), "_today", []));
(self['@task']=smalltalk.send((smalltalk.Task || Task), "_newWithDescription_createdOn_dueOn_", ["One", today, nil]));
(self['@list']=smalltalk.send((smalltalk.TaskList || TaskList), "_new", []));
return self;}
}),
smalltalk.TaskListTestCase);

smalltalk.addMethod(
"_testAddingATask",
smalltalk.method({
selector: "testAddingATask",
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@list'], "_size", []), (0)]);
smalltalk.send(self['@list'], "_addTask_", [self['@task']]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@list'], "_size", []), (1)]);
return self;}
}),
smalltalk.TaskListTestCase);

smalltalk.addMethod(
"_testAddingATaskShouldTriggerAnnouncement",
smalltalk.method({
selector: "testAddingATaskShouldTriggerAnnouncement",
fn: function (){
var self=this;
var visited=nil;
(visited=false);
smalltalk.send(smalltalk.send(self['@list'], "_announcer", []), "_on_do_", [(smalltalk.NewTaskAdded || NewTaskAdded), (function(announcement){return (visited=true);})]);
smalltalk.send(self['@list'], "_addTask_", [self['@task']]);
smalltalk.send(self, "_assert_", [visited]);
return self;}
}),
smalltalk.TaskListTestCase);

smalltalk.addMethod(
"_testRemovingATask",
smalltalk.method({
selector: "testRemovingATask",
fn: function (){
var self=this;
smalltalk.send(self['@list'], "_addTask_", [self['@task']]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@list'], "_size", []), (1)]);
smalltalk.send(self['@list'], "_removeTask_", [self['@task']]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@list'], "_size", []), (0)]);
return self;}
}),
smalltalk.TaskListTestCase);

smalltalk.addMethod(
"_testRemovingATaskShouldTriggerAnnouncement",
smalltalk.method({
selector: "testRemovingATaskShouldTriggerAnnouncement",
fn: function (){
var self=this;
var visited=nil;
(visited=false);
smalltalk.send(self['@list'], "_addTask_", [self['@task']]);
smalltalk.send(smalltalk.send(self['@list'], "_announcer", []), "_on_do_", [(smalltalk.TaskRemoved || TaskRemoved), (function(announcement){return (visited=true);})]);
smalltalk.send(self['@list'], "_removeTask_", [self['@task']]);
smalltalk.send(self, "_assert_", [visited]);
return self;}
}),
smalltalk.TaskListTestCase);



smalltalk.addClass('TaskListWidgetCase', smalltalk.TestCase, [], 'Taskig-Tests');
smalltalk.addMethod(
"_testNewTaskEventShouldAddAnEmptyTaskToTheModel",
smalltalk.method({
selector: "testNewTaskEventShouldAddAnEmptyTaskToTheModel",
fn: function (){
var self=this;
var widget=nil;
var listModel=nil;
var flag=nil;
(flag=false);
(listModel=smalltalk.send((smalltalk.Mock || Mock), "_new", []));
smalltalk.send(listModel, "_ignore_", [smalltalk.symbolFor("do:")]);
smalltalk.send(listModel, "_on_do_", [smalltalk.symbolFor("addTask:"), (function(){return (flag=true);})]);
(widget=smalltalk.send((smalltalk.TaskListWidget || TaskListWidget), "_newWithList_", [listModel]));
smalltalk.send(widget, "_onNewTask", []);
smalltalk.send(self, "_assert_", [flag]);
return self;}
}),
smalltalk.TaskListWidgetCase);



smalltalk.addClass('TaskTestCase', smalltalk.TestCase, [], 'Taskig-Tests');
smalltalk.addMethod(
"_testDescriptionShouldNotBeEmpty",
smalltalk.method({
selector: "testDescriptionShouldNotBeEmpty",
fn: function (){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send((smalltalk.Task || Task), "_newWithDescription_createdOn_dueOn_", ["", (1), (2)]);}), (smalltalk.EmptyDescriptionException || EmptyDescriptionException)]);
return self;}
}),
smalltalk.TaskTestCase);

smalltalk.addMethod(
"_testDueDateIsNotMandatory",
smalltalk.method({
selector: "testDueDateIsNotMandatory",
fn: function (){
var self=this;
var today=nil;
(today=smalltalk.send((smalltalk.Date || Date), "_today", []));
smalltalk.send(self, "_shouldnt_raise_", [(function(){return smalltalk.send((smalltalk.Task || Task), "_newWithDescription_createdOn_dueOn_", ["One", today, nil]);}), (smalltalk.Error || Error)]);
return self;}
}),
smalltalk.TaskTestCase);

smalltalk.addMethod(
"_testDueDateShouldBeLaterThanCreationDate",
smalltalk.method({
selector: "testDueDateShouldBeLaterThanCreationDate",
fn: function (){
var self=this;
var today=nil;
var yesterday=nil;
(today=(3));
(yesterday=(2));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send((smalltalk.Task || Task), "_newWithDescription_createdOn_dueOn_", ["Something to do", today, yesterday]);}), (smalltalk.DueDateShouldBeLaterThanCreationDateException || DueDateShouldBeLaterThanCreationDateException)]);
return self;}
}),
smalltalk.TaskTestCase);



smalltalk.addClass('ToDoAppTestCase', smalltalk.TestCase, [], 'Taskig-Tests');
smalltalk.addMethod(
"_testNewTaskGetsSaved",
smalltalk.method({
selector: "testNewTaskGetsSaved",
fn: function (){
var self=this;
var app=nil;
var storageMock=nil;
var visited=nil;
var widget=nil;
(visited=false);
(storageMock=smalltalk.send((smalltalk.Mock || Mock), "_new", []));
smalltalk.send(storageMock, "_ignore_", [smalltalk.symbolFor("loadTasksInto:")]);
smalltalk.send(storageMock, "_on_do_", [smalltalk.symbolFor("save:"), (function(){return (visited=true);})]);
(app=smalltalk.send((smalltalk.ToDoApp || ToDoApp), "_newWithLogger_andStorage_", [smalltalk.send((smalltalk.NullLogger || NullLogger), "_new", []), storageMock]));
(widget=smalltalk.send(app, "_listWidget", []));
smalltalk.send(widget, "_onNewTask", []);
smalltalk.send(self, "_assert_", [visited]);
return self;}
}),
smalltalk.ToDoAppTestCase);



