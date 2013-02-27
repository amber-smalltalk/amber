smalltalk.addPackage('Compiler-Exceptions', {});
smalltalk.addClass('CompilerError', smalltalk.Error, [], 'Compiler-Exceptions');
smalltalk.CompilerError.comment="I am the common superclass of all compiling errors."


smalltalk.addClass('ParseError', smalltalk.CompilerError, [], 'Compiler-Exceptions');
smalltalk.ParseError.comment="Instance of ParseError are signaled on any parsing error. \x0aSee `Smalltalk >> #parse:`"


smalltalk.addClass('SemanticError', smalltalk.CompilerError, [], 'Compiler-Exceptions');
smalltalk.SemanticError.comment="I represent an abstract semantic error thrown by the SemanticAnalyzer.\x0aSemantic errors can be unknown variable errors, etc.\x0aSee my subclasses for concrete errors.\x0a\x0aThe IDE should catch instances of Semantic error to deal with them when compiling"


smalltalk.addClass('InliningError', smalltalk.SemanticError, [], 'Compiler-Exceptions');
smalltalk.InliningError.comment="Instances of InliningError are signaled when using an `InliningCodeGenerator`in a `Compiler`."


smalltalk.addClass('InvalidAssignmentError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.InvalidAssignmentError.comment="I get signaled when a pseudo variable gets assigned."
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(" Invalid assignment to variable: ").__comma(_st(self)._variableName());
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{}, smalltalk.InvalidAssignmentError)})},
args: [],
source: "messageText\x0a\x09^ ' Invalid assignment to variable: ', self variableName",
messageSends: [",", "variableName"],
referencedClasses: []
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variableName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableName",{}, smalltalk.InvalidAssignmentError)})},
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
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"variableName:",{aString:aString}, smalltalk.InvalidAssignmentError)})},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.InvalidAssignmentError);



smalltalk.addClass('ShadowingVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.ShadowingVariableError.comment="I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope."
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("Variable shadowing error: ").__comma(_st(self)._variableName())).__comma(" is already defined");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{}, smalltalk.ShadowingVariableError)})},
args: [],
source: "messageText\x0a\x09^ 'Variable shadowing error: ', self variableName, ' is already defined'",
messageSends: [",", "variableName"],
referencedClasses: []
}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variableName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableName",{}, smalltalk.ShadowingVariableError)})},
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
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"variableName:",{aString:aString}, smalltalk.ShadowingVariableError)})},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ShadowingVariableError);



smalltalk.addClass('UnknownVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.UnknownVariableError.comment="I get signaled when a variable is not defined.\x0aThe default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects."
smalltalk.addMethod(
"_messageText",
smalltalk.method({
selector: "messageText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st("Unknown Variable error: ").__comma(_st(self)._variableName())).__comma(" is not defined");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{}, smalltalk.UnknownVariableError)})},
args: [],
source: "messageText\x0a\x09^ 'Unknown Variable error: ', self variableName, ' is not defined'",
messageSends: [",", "variableName"],
referencedClasses: []
}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@variableName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableName",{}, smalltalk.UnknownVariableError)})},
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
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@variableName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"variableName:",{aString:aString}, smalltalk.UnknownVariableError)})},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.UnknownVariableError);



