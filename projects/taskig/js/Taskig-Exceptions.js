smalltalk.addPackage('Taskig-Exceptions', {});
smalltalk.addClass('DueDateShouldBeLaterThanCreationDateException', smalltalk.Error, [], 'Taskig-Exceptions');
smalltalk.DueDateShouldBeLaterThanCreationDateException.comment="A DueDateShouldBeLaterThanCreationDate is thrown when trying to create a task with a creation date that is later than the due date."

smalltalk.addMethod(
"_message",
smalltalk.method({
selector: "message",
category: 'not yet classified',
fn: function (){
var self=this;
return "Due date should be later than creation date.";
return self;},
args: [],
source: unescape("message%0A%09%5E%27Due%20date%20should%20be%20later%20than%20creation%20date.%27"),
messageSends: [],
referencedClasses: []
}),
smalltalk.DueDateShouldBeLaterThanCreationDateException.klass);


smalltalk.addClass('EmptyDescriptionException', smalltalk.Error, [], 'Taskig-Exceptions');
smalltalk.EmptyDescriptionException.comment="An EmptyDescriptionException is an exeption thrown when trying to create a task with an empty description."

smalltalk.addMethod(
"_message",
smalltalk.method({
selector: "message",
category: 'not yet classified',
fn: function (){
var self=this;
return "Description should not be empty.";
return self;},
args: [],
source: unescape("message%0A%09%5E%27Description%20should%20not%20be%20empty.%27"),
messageSends: [],
referencedClasses: []
}),
smalltalk.EmptyDescriptionException.klass);


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

