smalltalk.addPackage('Taskig-Exceptions', {});
smalltalk.addClass('DueDateShouldBeLaterThanCreationDateException', smalltalk.Error, [], 'Taskig-Exceptions');

smalltalk.addMethod(
"_message",
smalltalk.method({
selector: "message",
fn: function (){
var self=this;
return "Due date should be later than creation date.";
return self;}
}),
smalltalk.DueDateShouldBeLaterThanCreationDateException.klass);


smalltalk.addClass('EmptyDescriptionException', smalltalk.Error, [], 'Taskig-Exceptions');

smalltalk.addMethod(
"_message",
smalltalk.method({
selector: "message",
fn: function (){
var self=this;
return "Description should not be empty.";
return self;}
}),
smalltalk.EmptyDescriptionException.klass);


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

