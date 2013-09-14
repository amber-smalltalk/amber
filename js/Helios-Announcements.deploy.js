smalltalk.addPackage('Helios-Announcements');
smalltalk.addClass('HLAboutToChange', smalltalk.Object, ['actionBlock'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@actionBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actionBlock",{},smalltalk.HLAboutToChange)})},
messageSends: []}),
smalltalk.HLAboutToChange);

smalltalk.addMethod(
smalltalk.method({
selector: "actionBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@actionBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"actionBlock:",{aBlock:aBlock},smalltalk.HLAboutToChange)})},
messageSends: []}),
smalltalk.HLAboutToChange);



smalltalk.addClass('HLAnnouncement', smalltalk.Object, [], 'Helios-Announcements');

smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "announcement";
}, function($ctx1) {$ctx1.fill(self,"heliosClass",{},smalltalk.HLAnnouncement.klass)})},
messageSends: []}),
smalltalk.HLAnnouncement.klass);


smalltalk.addClass('HLCodeHandled', smalltalk.HLAnnouncement, ['code'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "code",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@code"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"code",{},smalltalk.HLCodeHandled)})},
messageSends: []}),
smalltalk.HLCodeHandled);

smalltalk.addMethod(
smalltalk.method({
selector: "code:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@code"]=aModel;
return self}, function($ctx1) {$ctx1.fill(self,"code:",{aModel:aModel},smalltalk.HLCodeHandled)})},
messageSends: []}),
smalltalk.HLCodeHandled);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["code:", "new", "yourself"]}),
smalltalk.HLCodeHandled.klass);


smalltalk.addClass('HLDoItExecuted', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLDoItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLInspectItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLPrintItRequested', smalltalk.HLCodeHandled, [], 'Helios-Announcements');


smalltalk.addClass('HLDebuggerContextSelected', smalltalk.HLAnnouncement, ['context'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.HLDebuggerContextSelected)})},
messageSends: []}),
smalltalk.HLDebuggerContextSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.HLDebuggerContextSelected)})},
messageSends: []}),
smalltalk.HLDebuggerContextSelected);



smalltalk.addClass('HLDiveRequested', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLEditComment', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLErrorRaised', smalltalk.HLAnnouncement, ['error'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "error",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@error"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"error",{},smalltalk.HLErrorRaised)})},
messageSends: []}),
smalltalk.HLErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "error:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@error"]=anError;
return self}, function($ctx1) {$ctx1.fill(self,"error:",{anError:anError},smalltalk.HLErrorRaised)})},
messageSends: []}),
smalltalk.HLErrorRaised);



smalltalk.addClass('HLCompileErrorRaised', smalltalk.HLErrorRaised, [], 'Helios-Announcements');


smalltalk.addClass('HLParseErrorRaised', smalltalk.HLErrorRaised, ['line', 'column', 'message'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "column",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@column"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"column",{},smalltalk.HLParseErrorRaised)})},
messageSends: []}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "column:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@column"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"column:",{anInteger:anInteger},smalltalk.HLParseErrorRaised)})},
messageSends: []}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "line",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@line"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"line",{},smalltalk.HLParseErrorRaised)})},
messageSends: []}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "line:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@line"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"line:",{anInteger:anInteger},smalltalk.HLParseErrorRaised)})},
messageSends: []}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "message",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@message"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{},smalltalk.HLParseErrorRaised)})},
messageSends: []}),
smalltalk.HLParseErrorRaised);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@message"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{aString:aString},smalltalk.HLParseErrorRaised)})},
messageSends: []}),
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.HLInstVarAdded)})},
messageSends: []}),
smalltalk.HLInstVarAdded);

smalltalk.addMethod(
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.HLInstVarAdded)})},
messageSends: []}),
smalltalk.HLInstVarAdded);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@variableName"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variableName",{},smalltalk.HLInstVarAdded)})},
messageSends: []}),
smalltalk.HLInstVarAdded);

smalltalk.addMethod(
smalltalk.method({
selector: "variableName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@variableName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"variableName:",{aString:aString},smalltalk.HLInstVarAdded)})},
messageSends: []}),
smalltalk.HLInstVarAdded);



smalltalk.addClass('HLItemSelected', smalltalk.HLAnnouncement, ['item'], 'Helios-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "item",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@item"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"item",{},smalltalk.HLItemSelected)})},
messageSends: []}),
smalltalk.HLItemSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "item:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@item"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"item:",{anObject:anObject},smalltalk.HLItemSelected)})},
messageSends: []}),
smalltalk.HLItemSelected);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
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
messageSends: ["item:", "new", "yourself"]}),
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
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@searchString"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"searchString",{},smalltalk.HLSearchReferences)})},
messageSends: []}),
smalltalk.HLSearchReferences);

smalltalk.addMethod(
smalltalk.method({
selector: "searchString:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@searchString"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"searchString:",{aString:aString},smalltalk.HLSearchReferences)})},
messageSends: []}),
smalltalk.HLSearchReferences);



smalltalk.addClass('HLShowCommentToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLShowInstanceToggled', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


smalltalk.addClass('HLSourceCodeSaved', smalltalk.HLAnnouncement, [], 'Helios-Announcements');


