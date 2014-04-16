define("amber_core/Compiler-Exceptions", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Exceptions", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Compiler-Exceptions');
smalltalk.packages["Compiler-Exceptions"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('CompilerError', globals.Error, [], 'Compiler-Exceptions');
globals.CompilerError.comment="I am the common superclass of all compiling errors.";


smalltalk.addClass('ParseError', globals.CompilerError, [], 'Compiler-Exceptions');
globals.ParseError.comment="Instance of ParseError are signaled on any parsing error.\x0aSee `Smalltalk >> #parse:`";


smalltalk.addClass('SemanticError', globals.CompilerError, [], 'Compiler-Exceptions');
globals.SemanticError.comment="I represent an abstract semantic error thrown by the SemanticAnalyzer.\x0aSemantic errors can be unknown variable errors, etc.\x0aSee my subclasses for concrete errors.\x0a\x0aThe IDE should catch instances of Semantic error to deal with them when compiling";


smalltalk.addClass('InliningError', globals.SemanticError, [], 'Compiler-Exceptions');
globals.InliningError.comment="Instances of InliningError are signaled when using an `InliningCodeGenerator`in a `Compiler`.";


smalltalk.addClass('InvalidAssignmentError', globals.SemanticError, ['variableName'], 'Compiler-Exceptions');
globals.InvalidAssignmentError.comment="I get signaled when a pseudo variable gets assigned.";
smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=" Invalid assignment to variable: ".__comma(self._variableName());
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},globals.InvalidAssignmentError)})},
args: [],
source: "messageText\x0a\x09^ ' Invalid assignment to variable: ', self variableName",
messageSends: [",", "variableName"],
referencedClasses: []
}),
globals.InvalidAssignmentError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@variableName"];
return $1;
},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
globals.InvalidAssignmentError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
globals.InvalidAssignmentError);



smalltalk.addClass('ShadowingVariableError', globals.SemanticError, ['variableName'], 'Compiler-Exceptions');
globals.ShadowingVariableError.comment="I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope.";
smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("Variable shadowing error: ".__comma(self._variableName())).__comma(" is already defined");
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},globals.ShadowingVariableError)})},
args: [],
source: "messageText\x0a\x09^ 'Variable shadowing error: ', self variableName, ' is already defined'",
messageSends: [",", "variableName"],
referencedClasses: []
}),
globals.ShadowingVariableError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@variableName"];
return $1;
},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
globals.ShadowingVariableError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
globals.ShadowingVariableError);



smalltalk.addClass('UnknownVariableError', globals.SemanticError, ['variableName'], 'Compiler-Exceptions');
globals.UnknownVariableError.comment="I get signaled when a variable is not defined.\x0aThe default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects.";
smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("Unknown Variable error: ".__comma(self._variableName())).__comma(" is not defined");
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},globals.UnknownVariableError)})},
args: [],
source: "messageText\x0a\x09^ 'Unknown Variable error: ', self variableName, ' is not defined'",
messageSends: [",", "variableName"],
referencedClasses: []
}),
globals.UnknownVariableError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@variableName"];
return $1;
},
args: [],
source: "variableName\x0a\x09^ variableName",
messageSends: [],
referencedClasses: []
}),
globals.UnknownVariableError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self},
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
messageSends: [],
referencedClasses: []
}),
globals.UnknownVariableError);



smalltalk.addClass('RethrowErrorHandler', globals.Object, [], 'Compiler-Exceptions');
globals.RethrowErrorHandler.comment="This class is used in the commandline version of the compiler.\x0aIt uses the handleError: message of ErrorHandler for printing the stacktrace and throws the error again as JS exception.\x0aAs a result Smalltalk errors are not swallowd by the Amber runtime and compilation can be aborted.";
smalltalk.addMethod(
smalltalk.method({
selector: "basicSignal:",
protocol: 'error handling',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
throw anError;
return self}, function($ctx1) {$ctx1.fill(self,"basicSignal:",{anError:anError},globals.RethrowErrorHandler)})},
args: ["anError"],
source: "basicSignal: anError\x0a        <throw anError>",
messageSends: [],
referencedClasses: []
}),
globals.RethrowErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.RethrowErrorHandler.superclass.fn.prototype._handleError_.apply(_st(self), [anError]));
$ctx1.supercall = false;
self._basicSignal_(anError);
return self}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},globals.RethrowErrorHandler)})},
args: ["anError"],
source: "handleError: anError\x0a        super handleError: anError.\x0a        self basicSignal: anError",
messageSends: ["handleError:", "basicSignal:"],
referencedClasses: []
}),
globals.RethrowErrorHandler);


});
