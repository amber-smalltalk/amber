smalltalk.addPackage('Compiler-Exceptions', {});
smalltalk.addClass('CompilerError', smalltalk.Error, [], 'Compiler-Exceptions');


smalltalk.addClass('ParseError', smalltalk.CompilerError, [], 'Compiler-Exceptions');


smalltalk.addClass('SemanticError', smalltalk.CompilerError, [], 'Compiler-Exceptions');
smalltalk.SemanticError.comment="I represent an abstract semantic error thrown by the SemanticAnalyzer.\x0aSemantic errors can be unknown variable errors, etc.\x0aSee my subclasses for concrete errors.\x0a\x0aThe IDE should catch instances of Semantic error to deal with them when compiling"


smalltalk.addClass('InvalidAssignmentError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.InvalidAssignmentError.comment="I get signaled when a pseudo variable gets assigned."
smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: 'accessing',
fn: function () {
var self=this;
return self['@variableName'];
return self;},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
category: 'accessing',
fn: function (aString) {
var self=this;
(self['@variableName']=aString);
return self;},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.InvalidAssignmentError);



smalltalk.addClass('ShadowingVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.ShadowingVariableError.comment="I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope."
smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: 'accessing',
fn: function () {
var self=this;
return self['@variableName'];
return self;},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
category: 'accessing',
fn: function (aString) {
var self=this;
(self['@variableName']=aString);
return self;},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ShadowingVariableError);



smalltalk.addClass('UnknownVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.UnknownVariableError.comment="I get signaled when a variable is not defined.\x0aThe default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects."
smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: 'accessing',
fn: function () {
var self=this;
return self['@variableName'];
return self;},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
category: 'accessing',
fn: function (aString) {
var self=this;
(self['@variableName']=aString);
return self;},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownVariableError);



