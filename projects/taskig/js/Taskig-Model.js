smalltalk.addPackage('Taskig-Model', {});
smalltalk.addClass('NullLogger', smalltalk.Object, [], 'Taskig-Model');
smalltalk.NullLogger.comment=unescape("A%20NullLogger%20does%20not%20log%20anything.%0DThis%20is%20usefull%20while%20running%20tests.")
smalltalk.addMethod(
"_debug_",
smalltalk.method({
selector: "debug:",
category: 'logging',
fn: function (aMessage){
var self=this;

return self;},
args: ["aMessage"],
source: "debug: aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.NullLogger);

smalltalk.addMethod(
"_error_",
smalltalk.method({
selector: "error:",
category: 'logging',
fn: function (aMessage){
var self=this;

return self;},
args: ["aMessage"],
source: "error: aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.NullLogger);

smalltalk.addMethod(
"_fatal_",
smalltalk.method({
selector: "fatal:",
category: 'logging',
fn: function (aMessage){
var self=this;

return self;},
args: ["aMessage"],
source: "fatal: aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.NullLogger);

smalltalk.addMethod(
"_info_",
smalltalk.method({
selector: "info:",
category: 'logging',
fn: function (aMessage){
var self=this;

return self;},
args: ["aMessage"],
source: "info: aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.NullLogger);

smalltalk.addMethod(
"_trace_",
smalltalk.method({
selector: "trace:",
category: 'logging',
fn: function (aMessage){
var self=this;

return self;},
args: ["aMessage"],
source: "trace: aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.NullLogger);

smalltalk.addMethod(
"_warn_",
smalltalk.method({
selector: "warn:",
category: 'logging',
fn: function (aMessage){
var self=this;

return self;},
args: ["aMessage"],
source: "warn: aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.NullLogger);



smalltalk.addClass('TranscriptLogger', smalltalk.NullLogger, [], 'Taskig-Model');
smalltalk.TranscriptLogger.comment="A TranscriptLogger logs to the console."
smalltalk.addMethod(
"_trace_",
smalltalk.method({
selector: "trace:",
category: 'logging',
fn: function (aMessage){
var self=this;

return self;},
args: ["aMessage"],
source: "trace: aMessage",
messageSends: [],
referencedClasses: []
}),
smalltalk.TranscriptLogger);



smalltalk.addClass('NullStorage', smalltalk.Object, ['tasks'], 'Taskig-Model');
smalltalk.NullStorage.comment="A MemoryStorage is a singleton providing storage of tasks in the image."
smalltalk.addMethod(
"_delete_",
smalltalk.method({
selector: "delete:",
category: 'as yet unclassified',
fn: function (aTask){
var self=this;

return self;},
args: ["aTask"],
source: unescape("delete%3A%20aTask%20%0A"),
messageSends: [],
referencedClasses: []
}),
smalltalk.NullStorage);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape("initialize%0A"),
messageSends: [],
referencedClasses: []
}),
smalltalk.NullStorage);

smalltalk.addMethod(
"_loadTasksInto_",
smalltalk.method({
selector: "loadTasksInto:",
category: 'as yet unclassified',
fn: function (aListModel){
var self=this;

return self;},
args: ["aListModel"],
source: unescape("loadTasksInto%3A%20aListModel%0A"),
messageSends: [],
referencedClasses: []
}),
smalltalk.NullStorage);

smalltalk.addMethod(
"_save_",
smalltalk.method({
selector: "save:",
category: 'as yet unclassified',
fn: function (aTask){
var self=this;

return self;},
args: ["aTask"],
source: unescape("save%3A%20aTask%20%0A"),
messageSends: [],
referencedClasses: []
}),
smalltalk.NullStorage);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'as yet unclassified',
fn: function (){
var self=this;

return self;},
args: [],
source: "size",
messageSends: [],
referencedClasses: []
}),
smalltalk.NullStorage);


smalltalk.NullStorage.klass.iVarNames = ['Instance'];

smalltalk.addClass('Task', smalltalk.Object, ['description', 'creationDate', 'dueDate'], 'Taskig-Model');
smalltalk.Task.comment=unescape("A%20Task%20represent%20a%20ToDo%20item.%0D%0DInstance%20Variables%0D%09creationDate%3A%09%09%3CDate%3E%0D%09description%3A%09%09%3CString%3E%0D%09dueDate%3A%09%09%09%3CDate%3E")
smalltalk.addMethod(
"_initializeWithDescription_createdOn_dueOn_",
smalltalk.method({
selector: "initializeWithDescription:createdOn:dueOn:",
category: 'initialize-release',
fn: function (aDescription, aDate, anotherDate){
var self=this;
(self['@description']=aDescription);
(self['@creationDate']=aDate);
(self['@dueDate']=anotherDate);
return self;},
args: ["aDescription", "aDate", "anotherDate"],
source: unescape("initializeWithDescription%3A%20aDescription%20createdOn%3A%20aDate%20dueOn%3A%20anotherDate%0D%09%22Main%20initializing%20method.%22%0D%09description%20%09%3A%3D%20aDescription.%0D%09creationDate%20%09%3A%3D%20aDate.%0D%09dueDate%20%09%09%3A%3D%20anotherDate."),
messageSends: [],
referencedClasses: []
}),
smalltalk.Task);

smalltalk.addMethod(
"_updateWith_",
smalltalk.method({
selector: "updateWith:",
category: 'CRUD',
fn: function (aTask){
var self=this;
smalltalk.send(self, "_shouldBeImplemented", []);
return self;},
args: ["aTask"],
source: unescape("updateWith%3A%20aTask%0D%09self%20shouldBeImplemented"),
messageSends: ["shouldBeImplemented"],
referencedClasses: []
}),
smalltalk.Task);


smalltalk.addMethod(
"_assert_isLaterThan_",
smalltalk.method({
selector: "assert:isLaterThan:",
category: 'validation',
fn: function (dueDate, creationDate){
var self=this;
(($receiver = dueDate) != nil && $receiver != undefined) ? (function(){return ((($receiver = ((($receiver = dueDate).klass === smalltalk.Number) ? $receiver >=creationDate : smalltalk.send($receiver, "__gt_eq", [creationDate]))).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send((smalltalk.DueDateShouldBeLaterThanCreationDateException || DueDateShouldBeLaterThanCreationDateException), "_signal", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send((smalltalk.DueDateShouldBeLaterThanCreationDateException || DueDateShouldBeLaterThanCreationDateException), "_signal", []);})]));})() : nil;
return self;},
args: ["dueDate", "creationDate"],
source: unescape("assert%3A%20dueDate%20isLaterThan%3A%20creationDate%0A%09%22Due%20date%20should%20be%20later%20than%20creation%20date.%22%0A%09dueDate%20ifNotNil%3A%20%5B%20dueDate%20%3E%3D%20creationDate%20%0A%09%09ifFalse%3A%20%5B%20DueDateShouldBeLaterThanCreationDateException%20signal%20%5D%20%5D"),
messageSends: ["ifNotNil:", "ifFalse:", unescape("%3E%3D"), "signal"],
referencedClasses: ["DueDateShouldBeLaterThanCreationDateException"]
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_assertNotEmpty_",
smalltalk.method({
selector: "assertNotEmpty:",
category: 'validation',
fn: function (aDescription){
var self=this;
smalltalk.send(smalltalk.send(aDescription, "_asString", []), "_ifEmpty_", [(function(){return smalltalk.send((smalltalk.EmptyDescriptionException || EmptyDescriptionException), "_signal", []);})]);
return self;},
args: ["aDescription"],
source: unescape("assertNotEmpty%3A%20aDescription%0D%09%22Validate%20that%20description%20is%20not%20empty.%22%0D%09aDescription%20asString%20ifEmpty%3A%20%5B%20EmptyDescriptionException%20signal%20%5D"),
messageSends: ["ifEmpty:", "asString", "signal"],
referencedClasses: ["EmptyDescriptionException"]
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_newWithDefaults",
smalltalk.method({
selector: "newWithDefaults",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send(self, "_newWithDescription_", [unescape("What%20shall%20I%20do%3F")]);
return self;},
args: [],
source: unescape("newWithDefaults%0D%09%22Constructor%20used%20when%20creating%20a%20new%20Task%20via%20UI.%22%0D%09%5E%20self%20newWithDescription%3A%20%27What%20shall%20I%20do%3F%27"),
messageSends: ["newWithDescription:"],
referencedClasses: []
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_newWithDescription_",
smalltalk.method({
selector: "newWithDescription:",
category: 'instance creation',
fn: function (aDescription){
var self=this;
var today=nil;
(today=smalltalk.send(self, "_today", []));
return smalltalk.send(self, "_newWithDescription_createdOn_", [aDescription, today]);
return self;},
args: ["aDescription"],
source: unescape("newWithDescription%3A%20aDescription%0D%0D%09%7C%20today%20%7C%0D%09today%20%3A%3D%20self%20today.%0D%09%5Eself%20newWithDescription%3A%20aDescription%20createdOn%3A%20today."),
messageSends: ["today", "newWithDescription:createdOn:"],
referencedClasses: []
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_newWithDescription_createdOn_",
smalltalk.method({
selector: "newWithDescription:createdOn:",
category: 'instance creation',
fn: function (aDescription, creationDate){
var self=this;
return smalltalk.send(self, "_newWithDescription_createdOn_dueOn_", [aDescription, creationDate, nil]);
return self;},
args: ["aDescription", "creationDate"],
source: unescape("newWithDescription%3A%20aDescription%20createdOn%3A%20creationDate%0D%0D%09%5Eself%20newWithDescription%3A%20aDescription%20createdOn%3A%20creationDate%20dueOn%3A%20nil"),
messageSends: ["newWithDescription:createdOn:dueOn:"],
referencedClasses: []
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_newWithDescription_createdOn_dueOn_",
smalltalk.method({
selector: "newWithDescription:createdOn:dueOn:",
category: 'instance creation',
fn: function (aDescription, creationDate, dueDate){
var self=this;
smalltalk.send(self, "_assertNotEmpty_", [aDescription]);
smalltalk.send(self, "_assert_isLaterThan_", [dueDate, creationDate]);
return smalltalk.send(smalltalk.send(self, "_new", []), "_initializeWithDescription_createdOn_dueOn_", [aDescription, creationDate, dueDate]);
return self;},
args: ["aDescription", "creationDate", "dueDate"],
source: unescape("newWithDescription%3A%20aDescription%20createdOn%3A%20creationDate%20dueOn%3A%20dueDate%0D%0D%09self%20assertNotEmpty%3A%20aDescription.%0D%09%22self%20assertCreationDateNotEmpty.%22%09%0D%09self%20assert%3A%20dueDate%20isLaterThan%3A%20creationDate.%0D%0D%09%5Eself%20new%20%0D%09%09initializeWithDescription%3A%20aDescription%20%0D%09%09createdOn%3A%20creationDate%20%0D%09%09dueOn%3A%20dueDate"),
messageSends: ["assertNotEmpty:", "assert:isLaterThan:", "initializeWithDescription:createdOn:dueOn:", "new"],
referencedClasses: []
}),
smalltalk.Task.klass);

smalltalk.addMethod(
"_today",
smalltalk.method({
selector: "today",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Date || Date), "_today", []);
return self;},
args: [],
source: unescape("today%0D%09%22Today%27s%20date%22%0D%09%5EDate%20today"),
messageSends: ["today"],
referencedClasses: ["Date"]
}),
smalltalk.Task.klass);


smalltalk.addClass('TaskList', smalltalk.Object, ['tasks', 'announcer'], 'Taskig-Model');
smalltalk.TaskList.comment="A TaskList is a collection of tasks."
smalltalk.addMethod(
"_addTask_",
smalltalk.method({
selector: "addTask:",
category: 'CRUD',
fn: function (aTask){
var self=this;
var announcement=nil;
smalltalk.send(self['@tasks'], "_add_", [aTask]);
(announcement=smalltalk.send((smalltalk.NewTaskAdded || NewTaskAdded), "_newWith_", [aTask]));
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;},
args: ["aTask"],
source: unescape("addTask%3A%20aTask%0D%0D%09%7C%20announcement%20%7C%0D%09tasks%20add%3A%20aTask.%0D%09announcement%20%3A%3D%20NewTaskAdded%20newWith%3A%20aTask.%0D%09announcer%20announce%3A%20announcement."),
messageSends: ["add:", "newWith:", "announce:"],
referencedClasses: ["NewTaskAdded"]
}),
smalltalk.TaskList);

smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return self['@announcer'];
return self;},
args: [],
source: unescape("announcer%0D%09%5Eannouncer"),
messageSends: [],
referencedClasses: []
}),
smalltalk.TaskList);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'CRUD',
fn: function (aBlockClosure){
var self=this;
smalltalk.send(self['@tasks'], "_do_", [aBlockClosure]);
return self;},
args: ["aBlockClosure"],
source: unescape("do%3A%20aBlockClosure%0D%09tasks%20do%3A%20aBlockClosure"),
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.TaskList);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
(self['@tasks']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
(self['@announcer']=smalltalk.send((smalltalk.Announcer || Announcer), "_new", []));
return self;},
args: [],
source: unescape("initialize%20%0D%0D%09tasks%20%3A%3D%20OrderedCollection%20new.%0D%09announcer%20%3A%3D%20Announcer%20new."),
messageSends: ["new"],
referencedClasses: ["OrderedCollection", "Announcer"]
}),
smalltalk.TaskList);

smalltalk.addMethod(
"_removeTask_",
smalltalk.method({
selector: "removeTask:",
category: 'CRUD',
fn: function (aTask){
var self=this;
var announcement=nil;
smalltalk.send(self['@tasks'], "_remove_", [aTask]);
(announcement=smalltalk.send((smalltalk.TaskRemoved || TaskRemoved), "_newWith_", [aTask]));
smalltalk.send(self['@announcer'], "_announce_", [announcement]);
return self;},
args: ["aTask"],
source: unescape("removeTask%3A%20aTask%0D%0D%09%7C%20announcement%20%7C%0D%09tasks%20remove%3A%20aTask.%0D%09announcement%20%3A%3D%20TaskRemoved%20newWith%3A%20aTask.%0D%09announcer%20announce%3A%20%20announcement."),
messageSends: ["remove:", "newWith:", "announce:"],
referencedClasses: ["TaskRemoved"]
}),
smalltalk.TaskList);

smalltalk.addMethod(
"_size",
smalltalk.method({
selector: "size",
category: 'CRUD',
fn: function (){
var self=this;
return smalltalk.send(self['@tasks'], "_size", []);
return self;},
args: [],
source: unescape("size%0D%09%22Return%20the%20size%20of%20the%20tasks%20list.%22%0D%09%5E%20tasks%20size"),
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.TaskList);



