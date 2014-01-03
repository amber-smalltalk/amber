define("amber_core/Helios-Announcements", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Helios-Announcements');
smalltalk.packages["Helios-Announcements"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('HLAboutToChange', smalltalk.Object, ['actionBlock'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@actionBlock"];
return $1;
},
args: [],
source: "actionBlock\x0a\x09^ actionBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLAboutToChange);

smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@actionBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "actionBlock: aBlock\x0a\x09actionBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLAboutToChange);



smalltalk.addClass('HLAnnouncement', smalltalk.Object, [], 'Helios-Announcements');
smalltalk.HLAnnouncement.comment="I am the root of the announcement class hierarchy used in the Helios UI.";

smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "announcement";
},
args: [],
source: "heliosClass\x0a\x09^ 'announcement'",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLAnnouncement.klass);


smalltalk.addClass('HLCodeHandled', smalltalk.HLAnnouncement, ['code'], 'Helios-Announcements');
smalltalk.HLCodeHandled.comment="I am the root class of announcements emitted by `HLCodeWidget`s";
smalltalk.addMethod(
smalltalk.method({
selector: "code",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@code"];
return $1;
},
args: [],
source: "code\x0a\x0a\x09^ code",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeHandled);

smalltalk.addMethod(
smalltalk.method({
selector: "code:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
self["@code"]=aModel;
return self},
args: ["aModel"],
source: "code: aModel\x0a\x0a\x09code := aModel",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLCodeHandled);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'actions',
fn: function (aCodeModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._code_(aCodeModel);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCodeModel:aCodeModel},smalltalk.HLCodeHandled.klass)})},
args: ["aCodeModel"],
source: "on: aCodeModel\x0a\x0a\x09^ self new \x0a    \x09code: aCodeModel;\x0a        yourself",
messageSends: ["code:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLCodeHandled.klass);


smalltalk.addClass('HLDoItExecuted', smalltalk.HLCodeHandled, [], 'Helios-Announcements');
smalltalk.HLDoItExecuted.comment="I am emitted by a `HLCodeWidget` after a DoIt has been executed.";


smalltalk.addClass('HLDoItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');
smalltalk.HLDoItRequested.comment="I am emitted by a `HLCodeWidget` before a DoIt is executed.";


smalltalk.addClass('HLInspectItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');
smalltalk.HLInspectItRequested.comment="I am emitted by a `HLCodeWidget` before an object is inspected.";


smalltalk.addClass('HLPrintItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');
smalltalk.HLPrintItRequested.comment="I am emitted by a `HLCodeWidget` before an object is printed.";


smalltalk.addClass('HLDebuggerAnnouncement', smalltalk.HLAnnouncement, ['context'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;
},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDebuggerAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self},
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDebuggerAnnouncement);



smalltalk.addClass('HLDebuggerContextSelected', smalltalk.HLDebuggerAnnouncement, [], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;
},
args: [],
source: "context\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDebuggerContextSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self},
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLDebuggerContextSelected);



smalltalk.addClass('HLDebuggerStepped', smalltalk.HLDebuggerAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLDebuggerWhere', smalltalk.HLDebuggerAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLDiveRequested', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLEditComment', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLErrorRaised', smalltalk.HLAnnouncement, ['error'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "error",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@error"];
return $1;
},
args: [],
source: "error\x0a\x09^ error",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "error:",
protocol: 'accessing',
fn: function (anError){
var self=this;
self["@error"]=anError;
return self},
args: ["anError"],
source: "error: anError\x0a\x09error := anError",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLErrorRaised);



smalltalk.addClass('HLCompileErrorRaised', smalltalk.HLErrorRaised, [], 'Helios-Announcements');


smalltalk.addClass('HLParseErrorRaised', smalltalk.HLErrorRaised, ['line', 'column', 'message'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "column",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@column"];
return $1;
},
args: [],
source: "column\x0a\x09^ column",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "column:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@column"]=anInteger;
return self},
args: ["anInteger"],
source: "column: anInteger\x0a\x09column := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "line",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@line"];
return $1;
},
args: [],
source: "line\x0a\x09^ line",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "line:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@line"]=anInteger;
return self},
args: ["anInteger"],
source: "line: anInteger\x0a\x09line := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "message",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@message"];
return $1;
},
args: [],
source: "message\x0a\x09^ message",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@message"]=aString;
return self},
args: ["aString"],
source: "message: aString\x0a\x09message := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLParseErrorRaised);



smalltalk.addClass('HLUnknownVariableErrorRaised', smalltalk.HLErrorRaised, [], 'Helios-Announcements');


smalltalk.addClass('HLFocusRequested', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLClassesFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLMethodsFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLPackagesFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLProtocolsFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLSourceCodeFocusRequested', smalltalk.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLInstVarAdded', smalltalk.HLAnnouncement, ['theClass', 'variableName'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@theClass"];
return $1;
},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInstVarAdded);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLInstVarAdded);

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
smalltalk.HLInstVarAdded);

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
smalltalk.HLInstVarAdded);



smalltalk.addClass('HLItemSelected', smalltalk.HLAnnouncement, ['item'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "item",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@item"];
return $1;
},
args: [],
source: "item\x0a\x09^ item",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLItemSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "item:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@item"]=anObject;
return self},
args: ["anObject"],
source: "item: anObject\x0a\x09item := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLItemSelected);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._item_(anItem);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anItem:anItem},smalltalk.HLItemSelected.klass)})},
args: ["anItem"],
source: "on: anItem\x0a\x09^ self new\x0a    \x09item: anItem;\x0a        yourself",
messageSends: ["item:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.HLItemSelected.klass);


smalltalk.addClass('HLClassSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLInstanceVariableSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLMethodSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLPackageSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLProtocolSelected', smalltalk.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLSaveSourceCode', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLSearchReferences', smalltalk.HLAnnouncement, ['searchString'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "searchString",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@searchString"];
return $1;
},
args: [],
source: "searchString\x0a\x09^ searchString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSearchReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "searchString:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@searchString"]=aString;
return self},
args: ["aString"],
source: "searchString: aString\x0a\x09searchString := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.HLSearchReferences);



smalltalk.addClass('HLShowCommentToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLShowInstanceToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLSourceCodeSaved', smalltalk.HLAnnouncement, [], 'Helios-Announcements');

});
