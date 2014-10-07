define("amber_core/Compiler-Exceptions", ["amber/boot", "amber_core/Kernel-Exceptions", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Compiler-Exceptions');
$core.packages["Compiler-Exceptions"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('CompilerError', $globals.Error, [], 'Compiler-Exceptions');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CompilerError.comment="I am the common superclass of all compiling errors.";
//>>excludeEnd("ide");


$core.addClass('ParseError', $globals.CompilerError, [], 'Compiler-Exceptions');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ParseError.comment="Instance of ParseError are signaled on any parsing error.\x0aSee `Smalltalk >> #parse:`";
//>>excludeEnd("ide");


$core.addClass('SemanticError', $globals.CompilerError, [], 'Compiler-Exceptions');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SemanticError.comment="I represent an abstract semantic error thrown by the SemanticAnalyzer.\x0aSemantic errors can be unknown variable errors, etc.\x0aSee my subclasses for concrete errors.\x0a\x0aThe IDE should catch instances of Semantic error to deal with them when compiling";
//>>excludeEnd("ide");


$core.addClass('InliningError', $globals.SemanticError, [], 'Compiler-Exceptions');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.InliningError.comment="Instances of InliningError are signaled when using an `InliningCodeGenerator`in a `Compiler`.";
//>>excludeEnd("ide");


$core.addClass('InvalidAssignmentError', $globals.SemanticError, ['variableName'], 'Compiler-Exceptions');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.InvalidAssignmentError.comment="I get signaled when a pseudo variable gets assigned.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=" Invalid assignment to variable: ".__comma(self._variableName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{},$globals.InvalidAssignmentError)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ ' Invalid assignment to variable: ', self variableName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "variableName"]
}),
$globals.InvalidAssignmentError);

$core.addMethod(
$core.method({
selector: "variableName",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@variableName"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableName\x0a\x09^ variableName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.InvalidAssignmentError);

$core.addMethod(
$core.method({
selector: "variableName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.InvalidAssignmentError);



$core.addClass('ShadowingVariableError', $globals.SemanticError, ['variableName'], 'Compiler-Exceptions');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ShadowingVariableError.comment="I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv("Variable shadowing error: ".__comma(self._variableName())).__comma(" is already defined");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{},$globals.ShadowingVariableError)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ 'Variable shadowing error: ', self variableName, ' is already defined'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "variableName"]
}),
$globals.ShadowingVariableError);

$core.addMethod(
$core.method({
selector: "variableName",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@variableName"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableName\x0a\x09^ variableName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ShadowingVariableError);

$core.addMethod(
$core.method({
selector: "variableName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ShadowingVariableError);



$core.addClass('UnknownVariableError', $globals.SemanticError, ['variableName'], 'Compiler-Exceptions');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.UnknownVariableError.comment="I get signaled when a variable is not defined.\x0aThe default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv("Unknown Variable error: ".__comma(self._variableName())).__comma(" is not defined");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{},$globals.UnknownVariableError)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ 'Unknown Variable error: ', self variableName, ' is not defined'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "variableName"]
}),
$globals.UnknownVariableError);

$core.addMethod(
$core.method({
selector: "variableName",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@variableName"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableName\x0a\x09^ variableName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UnknownVariableError);

$core.addMethod(
$core.method({
selector: "variableName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UnknownVariableError);



$core.addClass('RethrowErrorHandler', $globals.Object, [], 'Compiler-Exceptions');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.RethrowErrorHandler.comment="This class is used in the commandline version of the compiler.\x0aIt uses the handleError: message of ErrorHandler for printing the stacktrace and throws the error again as JS exception.\x0aAs a result Smalltalk errors are not swallowd by the Amber runtime and compilation can be aborted.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "basicSignal:",
protocol: 'error handling',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
throw anError;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicSignal:",{anError:anError},$globals.RethrowErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "basicSignal: anError\x0a        <throw anError>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.RethrowErrorHandler);

$core.addMethod(
$core.method({
selector: "handleError:",
protocol: 'error handling',
fn: function (anError){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._basicSignal_(anError);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},$globals.RethrowErrorHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anError"],
source: "handleError: anError\x0a        self basicSignal: anError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["basicSignal:"]
}),
$globals.RethrowErrorHandler);


});
