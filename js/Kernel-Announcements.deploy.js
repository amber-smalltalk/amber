smalltalk.addPackage('Kernel-Announcements');
smalltalk.addClass('AnnouncementSubscription', smalltalk.Object, ['block', 'announcementClass'], 'Kernel-Announcements');
smalltalk.addMethod(
"_announcementClass",
smalltalk.method({
selector: "announcementClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@announcementClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcementClass",{},smalltalk.AnnouncementSubscription)})},
messageSends: []}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_announcementClass_",
smalltalk.method({
selector: "announcementClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@announcementClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"announcementClass:",{aClass:aClass},smalltalk.AnnouncementSubscription)})},
messageSends: []}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_block",
smalltalk.method({
selector: "block",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@block"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"block",{},smalltalk.AnnouncementSubscription)})},
messageSends: []}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_block_",
smalltalk.method({
selector: "block:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@block"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"block:",{aBlock:aBlock},smalltalk.AnnouncementSubscription)})},
messageSends: []}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_deliver_",
smalltalk.method({
selector: "deliver:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._handlesAnnouncement_(anAnnouncement);
if(smalltalk.assert($1)){
_st(_st(self)._block())._value_(anAnnouncement);
};
return self}, function($ctx1) {$ctx1.fill(self,"deliver:",{anAnnouncement:anAnnouncement},smalltalk.AnnouncementSubscription)})},
messageSends: ["ifTrue:", "value:", "block", "handlesAnnouncement:"]}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_handlesAnnouncement_",
smalltalk.method({
selector: "handlesAnnouncement:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anAnnouncement)._isKindOf_(_st(self)._announcementClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"handlesAnnouncement:",{anAnnouncement:anAnnouncement},smalltalk.AnnouncementSubscription)})},
messageSends: ["isKindOf:", "announcementClass"]}),
smalltalk.AnnouncementSubscription);



smalltalk.addClass('Announcer', smalltalk.Object, ['registry', 'subscriptions'], 'Kernel-Announcements');
smalltalk.addMethod(
"_announce_",
smalltalk.method({
selector: "announce:",
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@subscriptions"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._deliver_(anAnnouncement);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.Announcer)})},
messageSends: ["do:", "deliver:"]}),
smalltalk.Announcer);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@subscriptions"]=_st((smalltalk.Array || Array))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Announcer)})},
messageSends: ["initialize", "new"]}),
smalltalk.Announcer);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
fn: function (aClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.AnnouncementSubscription || AnnouncementSubscription))._new();
_st($1)._block_(aBlock);
_st($1)._announcementClass_(aClass);
$2=_st($1)._yourself();
_st(self["@subscriptions"])._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock},smalltalk.Announcer)})},
messageSends: ["add:", "block:", "new", "announcementClass:", "yourself"]}),
smalltalk.Announcer);



smalltalk.addClass('SystemAnnouncer', smalltalk.Announcer, [], 'Kernel-Announcements');

smalltalk.SystemAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.Announcer.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.SystemAnnouncer.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.SystemAnnouncer.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.SystemAnnouncer.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.SystemAnnouncer.klass);


smalltalk.addClass('SystemAnnouncement', smalltalk.Object, ['theClass'], 'Kernel-Announcements');
smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.SystemAnnouncement)})},
messageSends: []}),
smalltalk.SystemAnnouncement);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.SystemAnnouncement)})},
messageSends: []}),
smalltalk.SystemAnnouncement);



smalltalk.addClass('ClassAnnouncement', smalltalk.SystemAnnouncement, ['theClass'], 'Kernel-Announcements');
smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassAnnouncement)})},
messageSends: []}),
smalltalk.ClassAnnouncement);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ClassAnnouncement)})},
messageSends: []}),
smalltalk.ClassAnnouncement);



smalltalk.addClass('ClassAdded', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassCommentChanged', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassDefinitionChanged', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassRemoved', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ClassRenamed', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('MethodAnnouncement', smalltalk.SystemAnnouncement, ['method'], 'Kernel-Announcements');
smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@method"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.MethodAnnouncement)})},
messageSends: []}),
smalltalk.MethodAnnouncement);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@method"]=aCompiledMethod;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{aCompiledMethod:aCompiledMethod},smalltalk.MethodAnnouncement)})},
messageSends: []}),
smalltalk.MethodAnnouncement);



smalltalk.addClass('MethodAdded', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('MethodModified', smalltalk.MethodAnnouncement, ['oldMethod'], 'Kernel-Announcements');
smalltalk.addMethod(
"_oldMethod",
smalltalk.method({
selector: "oldMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@oldMethod"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldMethod",{},smalltalk.MethodModified)})},
messageSends: []}),
smalltalk.MethodModified);

smalltalk.addMethod(
"_oldMethod_",
smalltalk.method({
selector: "oldMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@oldMethod"]=aMethod;
return self}, function($ctx1) {$ctx1.fill(self,"oldMethod:",{aMethod:aMethod},smalltalk.MethodModified)})},
messageSends: []}),
smalltalk.MethodModified);



smalltalk.addClass('MethodRemoved', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('PackageAnnouncement', smalltalk.SystemAnnouncement, ['package'], 'Kernel-Announcements');
smalltalk.addMethod(
"_package",
smalltalk.method({
selector: "package",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@package"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"package",{},smalltalk.PackageAnnouncement)})},
messageSends: []}),
smalltalk.PackageAnnouncement);

smalltalk.addMethod(
"_package_",
smalltalk.method({
selector: "package:",
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@package"]=aPackage;
return self}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage},smalltalk.PackageAnnouncement)})},
messageSends: []}),
smalltalk.PackageAnnouncement);



smalltalk.addClass('PackageAdded', smalltalk.PackageAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('PackageRemoved', smalltalk.PackageAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ProtocolAnnouncement', smalltalk.SystemAnnouncement, ['theClass', 'protocol'], 'Kernel-Announcements');
smalltalk.addMethod(
"_protocol",
smalltalk.method({
selector: "protocol",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@protocol"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocol",{},smalltalk.ProtocolAnnouncement)})},
messageSends: []}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
"_protocol_",
smalltalk.method({
selector: "protocol:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@protocol"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"protocol:",{aString:aString},smalltalk.ProtocolAnnouncement)})},
messageSends: []}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ProtocolAnnouncement)})},
messageSends: []}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ProtocolAnnouncement)})},
messageSends: []}),
smalltalk.ProtocolAnnouncement);



smalltalk.addClass('ProtocolAdded', smalltalk.ProtocolAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ProtocolRemoved', smalltalk.ProtocolAnnouncement, [], 'Kernel-Announcements');


