define("helios/Helios-Announcements", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Helios-Announcements');
smalltalk.packages["Helios-Announcements"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLAboutToChange', globals.Object, ['actionBlock'], 'Helios-Announcements');
globals.HLAboutToChange.comment="I am announced whenever a change of context is about to be made, and unsaved changes could be lost.\x0a\x0aI am used within `HLModel` to handle such user actions. See `HLModel >> withChangesDo:`.";
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
globals.HLAboutToChange);

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
globals.HLAboutToChange);



smalltalk.addClass('HLAnnouncement', globals.Object, [], 'Helios-Announcements');
globals.HLAnnouncement.comment="I am the root of the announcement class hierarchy used in the Helios UI.";

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
globals.HLAnnouncement.klass);


smalltalk.addClass('HLCodeHandled', globals.HLAnnouncement, ['code'], 'Helios-Announcements');
globals.HLCodeHandled.comment="I am the root class of announcements emitted by `HLCodeWidget`s";
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
globals.HLCodeHandled);

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
globals.HLCodeHandled);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{aCodeModel:aCodeModel},globals.HLCodeHandled.klass)})},
args: ["aCodeModel"],
source: "on: aCodeModel\x0a\x0a\x09^ self new \x0a    \x09code: aCodeModel;\x0a        yourself",
messageSends: ["code:", "new", "yourself"],
referencedClasses: []
}),
globals.HLCodeHandled.klass);


smalltalk.addClass('HLDoItExecuted', globals.HLCodeHandled, [], 'Helios-Announcements');
globals.HLDoItExecuted.comment="I am emitted by a `HLCodeWidget` after a DoIt has been executed.";


smalltalk.addClass('HLDebuggerAnnouncement', globals.HLAnnouncement, ['context'], 'Helios-Announcements');
globals.HLDebuggerAnnouncement.comment="I am the root class of debugger announcements, and hold onto the debugged `context`.";
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
globals.HLDebuggerAnnouncement);

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
globals.HLDebuggerAnnouncement);



smalltalk.addClass('HLDebuggerContextSelected', globals.HLDebuggerAnnouncement, [], 'Helios-Announcements');
globals.HLDebuggerContextSelected.comment="I am announced when a new context is selected in a debugger, to update the user interface.";
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
globals.HLDebuggerContextSelected);

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
globals.HLDebuggerContextSelected);



smalltalk.addClass('HLDebuggerProceeded', globals.HLDebuggerAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLDebuggerStepped', globals.HLDebuggerAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLDebuggerWhere', globals.HLDebuggerAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLDiveRequested', globals.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLEditComment', globals.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLErrorRaised', globals.HLAnnouncement, ['error'], 'Helios-Announcements');
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
globals.HLErrorRaised);

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
globals.HLErrorRaised);



smalltalk.addClass('HLCompileErrorRaised', globals.HLErrorRaised, [], 'Helios-Announcements');


smalltalk.addClass('HLParseErrorRaised', globals.HLErrorRaised, ['line', 'column', 'message'], 'Helios-Announcements');
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
globals.HLParseErrorRaised);

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
globals.HLParseErrorRaised);

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
globals.HLParseErrorRaised);

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
globals.HLParseErrorRaised);

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
globals.HLParseErrorRaised);

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
globals.HLParseErrorRaised);



smalltalk.addClass('HLUnknownVariableErrorRaised', globals.HLErrorRaised, [], 'Helios-Announcements');


smalltalk.addClass('HLFocusRequested', globals.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLClassesFocusRequested', globals.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLDocumentationFocusRequested', globals.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLMethodsFocusRequested', globals.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLPackagesFocusRequested', globals.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLProtocolsFocusRequested', globals.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLSourceCodeFocusRequested', globals.HLFocusRequested, [], 'Helios-Announcements');


smalltalk.addClass('HLInstVarAdded', globals.HLAnnouncement, ['theClass', 'variableName'], 'Helios-Announcements');
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
globals.HLInstVarAdded);

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
globals.HLInstVarAdded);

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
globals.HLInstVarAdded);

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
globals.HLInstVarAdded);



smalltalk.addClass('HLItemSelected', globals.HLAnnouncement, ['item'], 'Helios-Announcements');
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
globals.HLItemSelected);

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
globals.HLItemSelected);


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
}, function($ctx1) {$ctx1.fill(self,"on:",{anItem:anItem},globals.HLItemSelected.klass)})},
args: ["anItem"],
source: "on: anItem\x0a\x09^ self new\x0a    \x09item: anItem;\x0a        yourself",
messageSends: ["item:", "new", "yourself"],
referencedClasses: []
}),
globals.HLItemSelected.klass);


smalltalk.addClass('HLClassSelected', globals.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLInstanceVariableSelected', globals.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLMethodSelected', globals.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLPackageSelected', globals.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLProtocolSelected', globals.HLItemSelected, [], 'Helios-Announcements');


smalltalk.addClass('HLSaveSourceCode', globals.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLSearchReferences', globals.HLAnnouncement, ['searchString'], 'Helios-Announcements');
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
globals.HLSearchReferences);

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
globals.HLSearchReferences);



smalltalk.addClass('HLShowCommentToggled', globals.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLShowInstanceToggled', globals.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLShowTemplate', globals.HLAnnouncement, ['template'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "template",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@template"];
return $1;
},
args: [],
source: "template\x0a\x09^ template",
messageSends: [],
referencedClasses: []
}),
globals.HLShowTemplate);

smalltalk.addMethod(
smalltalk.method({
selector: "template:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@template"]=aString;
return self},
args: ["aString"],
source: "template: aString\x0a\x09template := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLShowTemplate);



smalltalk.addClass('HLSourceCodeSaved', globals.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLTabLabelChanged', globals.HLAnnouncement, ['label', 'widget'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "label",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@label"];
return $1;
},
args: [],
source: "label\x0a\x09^ label",
messageSends: [],
referencedClasses: []
}),
globals.HLTabLabelChanged);

smalltalk.addMethod(
smalltalk.method({
selector: "label:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@label"]=aString;
return self},
args: ["aString"],
source: "label: aString\x0a\x09label := aString",
messageSends: [],
referencedClasses: []
}),
globals.HLTabLabelChanged);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@widget"];
return $1;
},
args: [],
source: "widget\x0a\x09^ widget",
messageSends: [],
referencedClasses: []
}),
globals.HLTabLabelChanged);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
protocol: 'accessing',
fn: function (aWidget){
var self=this;
self["@widget"]=aWidget;
return self},
args: ["aWidget"],
source: "widget: aWidget\x0a\x09widget := aWidget",
messageSends: [],
referencedClasses: []
}),
globals.HLTabLabelChanged);


});
