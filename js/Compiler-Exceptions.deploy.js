smalltalk.addPackage('Compiler-Exceptions', {});
smalltalk.addClass('CompilerError', smalltalk.Error, [], 'Compiler-Exceptions');


smalltalk.addClass('ParseError', smalltalk.CompilerError, [], 'Compiler-Exceptions');


smalltalk.addClass('SemanticError', smalltalk.CompilerError, [], 'Compiler-Exceptions');


smalltalk.addClass('InliningError', smalltalk.SemanticError, [], 'Compiler-Exceptions');


smalltalk.addClass('InvalidAssignmentError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(" Invalid assignment to variable: ","__comma",[smalltalk.send(self,"_variableName",[])]);
return $1;
}
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return self["@variableName"];
}
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self}
}),
smalltalk.InvalidAssignmentError);



smalltalk.addClass('ShadowingVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send("Variable shadowing error: ","__comma",[smalltalk.send(self,"_variableName",[])]),"__comma",[" is already defined"]);
return $1;
}
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return self["@variableName"];
}
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self}
}),
smalltalk.ShadowingVariableError);



smalltalk.addClass('UnknownVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return self["@variableName"];
}
}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self}
}),
smalltalk.UnknownVariableError);



