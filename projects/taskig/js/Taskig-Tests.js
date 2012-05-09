smalltalk.addPackage('Taskig-Tests', {});
smalltalk.addClass('ExceptionsTestCase', smalltalk.TestCase, [], 'Taskig-Tests');
smalltalk.addMethod(
"_testRaisingEnException",
smalltalk.method({
selector: "testRaisingEnException",
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send((function(){return smalltalk.send((smalltalk.EmptyDescriptionException || EmptyDescriptionException), "_signal", []);}), "_on_do_", [(smalltalk.EmptyDescriptionException || EmptyDescriptionException), (function(exception){return smalltalk.send(self, "_assert_equals_", [smalltalk.send(exception, "_messageText", []), smalltalk.send((smalltalk.EmptyDescriptionException || EmptyDescriptionException), "_message", [])]);})]);
return self;},
args: [],
source: unescape("testRaisingEnException%0A%09%22Test%20raising%20an%20exception.%22%0A%09%5B%20EmptyDescriptionException%20signal%20%5D%0A%09%09on%3A%20EmptyDescriptionException%0A%09%09do%3A%20%5B%20%3Aexception%20%7C%20self%20assert%3A%20exception%20messageText%20equals%3A%20EmptyDescriptionException%20message%20%5D"),
messageSends: ["on:do:", "signal", "assert:equals:", "messageText", "message"],
referencedClasses: ["EmptyDescriptionException"]
}),
smalltalk.ExceptionsTestCase);



smalltalk.addClass('Mock', smalltalk.Object, ['selectorList'], 'Taskig-Tests');
smalltalk.Mock.comment="A generic Mock to make testing easier."
smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'as yet unclassified',
fn: function (aMessage){
var self=this;
smalltalk.send(self['@selectorList'], "_at_ifPresent_ifAbsent_", [smalltalk.send(smalltalk.send(aMessage, "_selector", []), "_asSymbol", []), (function(valueBlock){return smalltalk.send(valueBlock, "_value", []);}), (function(){return smalltalk.send(self, "_doesNotUnderstand_", [aMessage], smalltalk.Object);})]);
return self;},
args: ["aMessage"],
source: unescape("doesNotUnderstand%3A%20aMessage%0A%09%22Execute%20block%20for%20selector%2C%20if%20present.%22%0A%09selectorList%20at%3A%20aMessage%20selector%20asSymbol%0A%09%09ifPresent%3A%20%5B%20%3AvalueBlock%20%7C%20valueBlock%20value%20%5D%0A%09%09ifAbsent%3A%20%5B%20super%20doesNotUnderstand%3A%20aMessage%20%5D."),
messageSends: ["at:ifPresent:ifAbsent:", "asSymbol", "selector", "value", "doesNotUnderstand:"],
referencedClasses: []
}),
smalltalk.Mock);

smalltalk.addMethod(
"_ignore_",
smalltalk.method({
selector: "ignore:",
category: 'as yet unclassified',
fn: function (aSelectorSymbol){
var self=this;
smalltalk.send(self['@selectorList'], "_at_put_", [smalltalk.send(aSelectorSymbol, "_asSymbol", []), (function(){return nil;})]);
return self;},
args: ["aSelectorSymbol"],
source: unescape("ignore%3A%20aSelectorSymbol%20%0A%09%22Ignore%20this%20selector.%22%0A%09selectorList%20at%3A%20aSelectorSymbol%20asSymbol%20put%3A%20%5B%5D."),
messageSends: ["at:put:", "asSymbol"],
referencedClasses: []
}),
smalltalk.Mock);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
(self['@selectorList']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));
return self;},
args: [],
source: unescape("initialize%0D%0D%09selectorList%20%3A%3D%20Dictionary%20new."),
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Mock);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
category: 'as yet unclassified',
fn: function (aSelectorSymbol, aBlockClosure){
var self=this;
smalltalk.send(self['@selectorList'], "_at_put_", [smalltalk.send(aSelectorSymbol, "_asSymbol", []), aBlockClosure]);
return self;},
args: ["aSelectorSymbol", "aBlockClosure"],
source: unescape("on%3A%20aSelectorSymbol%20do%3A%20aBlockClosure%0A%09%22Register%20a%20selector%20for%20later%20execution%22%0A%09selectorList%20at%3A%20aSelectorSymbol%20asSymbol%20put%3A%20aBlockClosure."),
messageSends: ["at:put:", "asSymbol"],
referencedClasses: []
}),
smalltalk.Mock);



smalltalk.addClass('MockTestCase', smalltalk.TestCase, [], 'Taskig-Tests');
smalltalk.addMethod(
"_testAmessageWithoutArguments",
smalltalk.method({
selector: "testAmessageWithoutArguments",
category: 'as yet unclassified',
fn: function (){
var self=this;
var mock=nil;
var visited=nil;
(visited=false);
(mock=smalltalk.send((smalltalk.Mock || Mock), "_new", []));
smalltalk.send(mock, "_on_do_", [smalltalk.symbolFor("testOne"), (function(){return (visited=true);})]);
smalltalk.send(mock, "_testOne", []);
smalltalk.send(self, "_assert_", [visited]);
return self;},
args: [],
source: unescape("testAmessageWithoutArguments%0D%0D%09%7C%20mock%20visited%20%7C%0D%09visited%20%3A%3D%20false.%0D%09mock%20%3A%3D%20Mock%20new.%0D%09mock%20on%3A%20%23testOne%20do%3A%20%5B%20visited%20%3A%3D%20true%20%5D.%0D%09mock%20testOne.%0D%09self%20assert%3A%20visited."),
messageSends: ["new", "on:do:", "testOne", "assert:"],
referencedClasses: ["Mock"]
}),
smalltalk.MockTestCase);

smalltalk.addMethod(
"_testAnIgonredMessage",
smalltalk.method({
selector: "testAnIgonredMessage",
category: 'as yet unclassified',
fn: function (){
var self=this;
var mock=nil;
(mock=smalltalk.send((smalltalk.Mock || Mock), "_new", []));
smalltalk.send(mock, "_ignore_", [smalltalk.symbolFor("thisMessage")]);
smalltalk.send(mock, "_thisMessage", []);
return self;},
args: [],
source: unescape("testAnIgonredMessage%0D%0D%09%7C%20mock%20%20%7C%0D%09mock%20%3A%3D%20Mock%20new.%0D%09mock%20ignore%3A%20%23thisMessage.%0D%09mock%20thisMessage."),
messageSends: ["new", "ignore:", "thisMessage"],
referencedClasses: ["Mock"]
}),
smalltalk.MockTestCase);

smalltalk.addMethod(
"_testAnIgonredMessageShouldNotDoAnything",
smalltalk.method({
selector: "testAnIgonredMessageShouldNotDoAnything",
category: 'as yet unclassified',
fn: function (){
var self=this;
var mock=nil;
(mock=smalltalk.send((smalltalk.Mock || Mock), "_new", []));
smalltalk.send(mock, "_ignore_", [smalltalk.symbolFor("thisMessage")]);
smalltalk.send(mock, "_thisMessage", []);
return self;},
args: [],
source: unescape("testAnIgonredMessageShouldNotDoAnything%0D%0D%09%7C%20mock%20%20%7C%0D%09mock%20%3A%3D%20Mock%20new.%0D%09mock%20ignore%3A%20%23thisMessage.%0D%09mock%20thisMessage."),
messageSends: ["new", "ignore:", "thisMessage"],
referencedClasses: ["Mock"]
}),
smalltalk.MockTestCase);

smalltalk.addMethod(
"_testAnUnknownMessage",
smalltalk.method({
selector: "testAnUnknownMessage",
category: 'as yet unclassified',
fn: function (){
var self=this;
var mock=nil;
(mock=smalltalk.send((smalltalk.Mock || Mock), "_new", []));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send(mock, "_testOne", []);}), (smalltalk.Error || Error)]);
return self;},
args: [],
source: unescape("testAnUnknownMessage%0D%0D%09%7C%20mock%20%7C%0D%09mock%20%3A%3D%20Mock%20new.%09%0D%09self%20should%3A%20%5B%20mock%20testOne%20%5D%20raise%3A%20Error."),
messageSends: ["new", "should:raise:", "testOne"],
referencedClasses: ["Mock", "Error"]
}),
smalltalk.MockTestCase);



smalltalk.addClass('TaskListTestCase', smalltalk.TestCase, ['task', 'list'], 'Taskig-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'as yet unclassified',
fn: function (){
var self=this;
var today=nil;
(today=smalltalk.send((smalltalk.Date || Date), "_today", []));
(self['@task']=smalltalk.send((smalltalk.Task || Task), "_newWithDescription_createdOn_dueOn_", ["One", today, nil]));
(self['@list']=smalltalk.send((smalltalk.TaskList || TaskList), "_new", []));
return self;},
args: [],
source: unescape("setUp%0D%0D%09%7C%20today%20%7C%0D%09today%20%3A%3D%20Date%20today.%0D%09task%20%3A%3D%20Task%20newWithDescription%3A%20%27One%27%20createdOn%3A%20today%20dueOn%3A%20nil.%0D%09list%20%3A%3D%20TaskList%20new."),
messageSends: ["today", "newWithDescription:createdOn:dueOn:", "new"],
referencedClasses: ["Date", "Task", "TaskList"]
}),
smalltalk.TaskListTestCase);

smalltalk.addMethod(
"_testAddingATask",
smalltalk.method({
selector: "testAddingATask",
category: 'as yet unclassified',
fn: function (){
var self=this;
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@list'], "_size", []), (0)]);
smalltalk.send(self['@list'], "_addTask_", [self['@task']]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@list'], "_size", []), (1)]);
return self;},
args: [],
source: unescape("testAddingATask%0D%0D%09self%20assert%3A%20list%20size%20equals%3A%200.%0D%09list%20addTask%3A%20task.%0D%09self%20assert%3A%20list%20size%20equals%3A%201."),
messageSends: ["assert:equals:", "size", "addTask:"],
referencedClasses: []
}),
smalltalk.TaskListTestCase);

smalltalk.addMethod(
"_testAddingATaskShouldTriggerAnnouncement",
smalltalk.method({
selector: "testAddingATaskShouldTriggerAnnouncement",
category: 'as yet unclassified',
fn: function (){
var self=this;
var visited=nil;
(visited=false);
smalltalk.send(smalltalk.send(self['@list'], "_announcer", []), "_on_do_", [(smalltalk.NewTaskAdded || NewTaskAdded), (function(announcement){return (visited=true);})]);
smalltalk.send(self['@list'], "_addTask_", [self['@task']]);
smalltalk.send(self, "_assert_", [visited]);
return self;},
args: [],
source: unescape("testAddingATaskShouldTriggerAnnouncement%0D%0D%09%7C%20visited%20%7C%0D%09visited%20%3A%3D%20false.%0D%09list%20announcer%20on%3A%20NewTaskAdded%20do%3A%20%5B%20%3Aannouncement%20%7C%20visited%20%3A%3D%20true%20%5D.%0D%09list%20addTask%3A%20task.%0D%0D%09self%20assert%3A%20visited."),
messageSends: ["on:do:", "announcer", "addTask:", "assert:"],
referencedClasses: ["NewTaskAdded"]
}),
smalltalk.TaskListTestCase);

smalltalk.addMethod(
"_testRemovingATask",
smalltalk.method({
selector: "testRemovingATask",
category: 'as yet unclassified',
fn: function (){
var self=this;
smalltalk.send(self['@list'], "_addTask_", [self['@task']]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@list'], "_size", []), (1)]);
smalltalk.send(self['@list'], "_removeTask_", [self['@task']]);
smalltalk.send(self, "_assert_equals_", [smalltalk.send(self['@list'], "_size", []), (0)]);
return self;},
args: [],
source: unescape("testRemovingATask%0D%0D%09list%20addTask%3A%20task.%0D%09self%20assert%3A%20list%20size%20equals%3A%201.%0D%09list%20removeTask%3A%20task.%0D%09self%20assert%3A%20list%20size%20equals%3A%200."),
messageSends: ["addTask:", "assert:equals:", "size", "removeTask:"],
referencedClasses: []
}),
smalltalk.TaskListTestCase);

smalltalk.addMethod(
"_testRemovingATaskShouldTriggerAnnouncement",
smalltalk.method({
selector: "testRemovingATaskShouldTriggerAnnouncement",
category: 'as yet unclassified',
fn: function (){
var self=this;
var visited=nil;
(visited=false);
smalltalk.send(self['@list'], "_addTask_", [self['@task']]);
smalltalk.send(smalltalk.send(self['@list'], "_announcer", []), "_on_do_", [(smalltalk.TaskRemoved || TaskRemoved), (function(announcement){return (visited=true);})]);
smalltalk.send(self['@list'], "_removeTask_", [self['@task']]);
smalltalk.send(self, "_assert_", [visited]);
return self;},
args: [],
source: unescape("testRemovingATaskShouldTriggerAnnouncement%0D%0D%09%7C%20visited%20%7C%0D%09visited%20%3A%3D%20false.%0D%09list%20addTask%3A%20task.%0D%0D%09list%20announcer%20on%3A%20TaskRemoved%20do%3A%20%5B%20%3Aannouncement%20%7C%20visited%20%3A%3D%20true%20%5D.%0D%09list%20removeTask%3A%20task.%0D%09%09%0D%09self%20assert%3A%20visited."),
messageSends: ["addTask:", "on:do:", "announcer", "removeTask:", "assert:"],
referencedClasses: ["TaskRemoved"]
}),
smalltalk.TaskListTestCase);



smalltalk.addClass('TaskListWidgetCase', smalltalk.TestCase, [], 'Taskig-Tests');
smalltalk.addMethod(
"_testNewTaskEventShouldAddAnEmptyTaskToTheModel",
smalltalk.method({
selector: "testNewTaskEventShouldAddAnEmptyTaskToTheModel",
category: 'as yet unclassified',
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
return self;},
args: [],
source: unescape("testNewTaskEventShouldAddAnEmptyTaskToTheModel%0D%0D%09%7C%20widget%20listModel%20flag%20%7C%0D%09flag%20%3A%3D%20false.%0D%09listModel%20%3A%3D%20Mock%20new.%0D%09listModel%20ignore%3A%20%23do%3A.%0D%09listModel%20on%3A%20%23addTask%3A%20do%3A%20%5B%20flag%20%3A%3D%20true%20%5D.%0D%09widget%20%3A%3D%20TaskListWidget%20newWithList%3A%20listModel.%0D%09%0D%09widget%20onNewTask.%0D%09self%20assert%3A%20flag."),
messageSends: ["new", "ignore:", "on:do:", "newWithList:", "onNewTask", "assert:"],
referencedClasses: ["Mock", "TaskListWidget"]
}),
smalltalk.TaskListWidgetCase);



smalltalk.addClass('TaskTestCase', smalltalk.TestCase, [], 'Taskig-Tests');
smalltalk.addMethod(
"_testDescriptionShouldNotBeEmpty",
smalltalk.method({
selector: "testDescriptionShouldNotBeEmpty",
category: 'as yet unclassified',
fn: function (){
var self=this;
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send((smalltalk.Task || Task), "_newWithDescription_createdOn_dueOn_", ["", (1), (2)]);}), (smalltalk.EmptyDescriptionException || EmptyDescriptionException)]);
return self;},
args: [],
source: unescape("testDescriptionShouldNotBeEmpty%0D%0D%09self%20should%3A%20%5B%20Task%20newWithDescription%3A%20%27%27%20createdOn%3A%201%20dueOn%3A%202%20%5D%20%0D%09%09raise%3A%20EmptyDescriptionException."),
messageSends: ["should:raise:", "newWithDescription:createdOn:dueOn:"],
referencedClasses: ["Task", "EmptyDescriptionException"]
}),
smalltalk.TaskTestCase);

smalltalk.addMethod(
"_testDueDateIsNotMandatory",
smalltalk.method({
selector: "testDueDateIsNotMandatory",
category: 'as yet unclassified',
fn: function (){
var self=this;
var today=nil;
(today=smalltalk.send((smalltalk.Date || Date), "_today", []));
smalltalk.send(self, "_shouldnt_raise_", [(function(){return smalltalk.send((smalltalk.Task || Task), "_newWithDescription_createdOn_dueOn_", ["One", today, nil]);}), (smalltalk.Error || Error)]);
return self;},
args: [],
source: unescape("testDueDateIsNotMandatory%0D%0D%09%7C%20today%20%7C%0D%09today%20%3A%3D%20Date%20today.%0D%09self%20shouldnt%3A%20%5B%20Task%20newWithDescription%3A%20%27One%27%20createdOn%3A%20today%20dueOn%3A%20nil%20%5D%20%0D%09%09raise%3A%20Error."),
messageSends: ["today", "shouldnt:raise:", "newWithDescription:createdOn:dueOn:"],
referencedClasses: ["Date", "Task", "Error"]
}),
smalltalk.TaskTestCase);

smalltalk.addMethod(
"_testDueDateShouldBeLaterThanCreationDate",
smalltalk.method({
selector: "testDueDateShouldBeLaterThanCreationDate",
category: 'as yet unclassified',
fn: function (){
var self=this;
var today=nil;
var yesterday=nil;
(today=(3));
(yesterday=(2));
smalltalk.send(self, "_should_raise_", [(function(){return smalltalk.send((smalltalk.Task || Task), "_newWithDescription_createdOn_dueOn_", ["Something to do", today, yesterday]);}), (smalltalk.DueDateShouldBeLaterThanCreationDateException || DueDateShouldBeLaterThanCreationDateException)]);
return self;},
args: [],
source: unescape("testDueDateShouldBeLaterThanCreationDate%0D%0D%09%7C%20today%20yesterday%20%7C%0D%09today%20%3A%3D%203.%0D%09yesterday%20%3A%3D%202.%0D%09self%20should%3A%20%5B%20Task%20newWithDescription%3A%20%27Something%20to%20do%27%20createdOn%3A%20today%20dueOn%3A%20yesterday%20%5D%20%0D%09%09raise%3A%20DueDateShouldBeLaterThanCreationDateException."),
messageSends: ["should:raise:", "newWithDescription:createdOn:dueOn:"],
referencedClasses: ["Task", "DueDateShouldBeLaterThanCreationDateException"]
}),
smalltalk.TaskTestCase);



smalltalk.addClass('ToDoAppTestCase', smalltalk.TestCase, [], 'Taskig-Tests');
smalltalk.addMethod(
"_testNewTaskGetsSaved",
smalltalk.method({
selector: "testNewTaskGetsSaved",
category: 'as yet unclassified',
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
return self;},
args: [],
source: unescape("testNewTaskGetsSaved%0D%0D%09%7C%20app%20storageMock%20%20visited%20widget%20%7C%0D%09visited%20%3A%3D%20false.%0D%09storageMock%20%3A%3D%20Mock%20new.%0D%09storageMock%20ignore%3A%20%23loadTasksInto%3A.%0D%09storageMock%20on%3A%20%23save%3A%20do%3A%20%5B%20visited%20%3A%3D%20true%20%5D.%0D%09app%20%3A%3D%20ToDoApp%20newWithLogger%3A%20NullLogger%20new%20andStorage%3A%20storageMock.%0D%09widget%20%3A%3D%20app%20listWidget.%0D%09widget%20onNewTask.%0D%09%0D%09self%20assert%3A%20visited."),
messageSends: ["new", "ignore:", "on:do:", "newWithLogger:andStorage:", "listWidget", "onNewTask", "assert:"],
referencedClasses: ["Mock", "ToDoApp", "NullLogger"]
}),
smalltalk.ToDoAppTestCase);



