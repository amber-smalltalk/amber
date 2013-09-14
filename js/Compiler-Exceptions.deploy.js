smalltalk.addPackage('Compiler-Exceptions');
smalltalk.addClass('CompilerError', smalltalk.Error, [], 'Compiler-Exceptions');


smalltalk.addClass('ParseError', smalltalk.CompilerError, [], 'Compiler-Exceptions');


smalltalk.addClass('SemanticError', smalltalk.CompilerError, [], 'Compiler-Exceptions');


smalltalk.addClass('InliningError', smalltalk.SemanticError, [], 'Compiler-Exceptions');


smalltalk.addClass('InvalidAssignmentError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=" Invalid assignment to variable: ".__comma(self._variableName());
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.InvalidAssignmentError)})},
messageSends: [",", "variableName"]}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@variableName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableName",{},smalltalk.InvalidAssignmentError)})},
messageSends: []}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@variableName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"variableName:",{aString:aString},smalltalk.InvalidAssignmentError)})},
messageSends: []}),
smalltalk.InvalidAssignmentError);



smalltalk.addClass('ShadowingVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("Variable shadowing error: ".__comma(self._variableName())).__comma(" is already defined");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.ShadowingVariableError)})},
messageSends: [",", "variableName"]}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@variableName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableName",{},smalltalk.ShadowingVariableError)})},
messageSends: []}),
smalltalk.ShadowingVariableError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@variableName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"variableName:",{aString:aString},smalltalk.ShadowingVariableError)})},
messageSends: []}),
smalltalk.ShadowingVariableError);



smalltalk.addClass('UnknownVariableError', smalltalk.SemanticError, ['variableName'], 'Compiler-Exceptions');
smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("Unknown Variable error: ".__comma(self._variableName())).__comma(" is not defined");
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},smalltalk.UnknownVariableError)})},
messageSends: [",", "variableName"]}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@variableName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableName",{},smalltalk.UnknownVariableError)})},
messageSends: []}),
smalltalk.UnknownVariableError);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@variableName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"variableName:",{aString:aString},smalltalk.UnknownVariableError)})},
messageSends: []}),
smalltalk.UnknownVariableError);



smalltalk.addClass('RethrowErrorHandler', smalltalk.ErrorHandler, [], 'Compiler-Exceptions');
smalltalk.addMethod(
smalltalk.method({
selector: "basicSignal:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
throw anError;
return self}, function($ctx1) {$ctx1.fill(self,"basicSignal:",{anError:anError},smalltalk.RethrowErrorHandler)})},
messageSends: []}),
smalltalk.RethrowErrorHandler);

smalltalk.addMethod(
smalltalk.method({
selector: "handleError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RethrowErrorHandler.superclass.fn.prototype._handleError_.apply(_st(self), [anError]);
self._basicSignal_(anError);
return self}, function($ctx1) {$ctx1.fill(self,"handleError:",{anError:anError},smalltalk.RethrowErrorHandler)})},
messageSends: ["handleError:", "basicSignal:"]}),
smalltalk.RethrowErrorHandler);



