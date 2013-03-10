smalltalk.addPackage('Kernel-Announcements');
smalltalk.addClass('AnnouncementSubscription', smalltalk.Object, ['block', 'announcementClass'], 'Kernel-Announcements');
smalltalk.AnnouncementSubscription.comment="The subscription is a single entry in a subscription registry of an `Announcer`.\x0aSeveral subscriptions by the same object is possible."
smalltalk.addMethod(
"_announcementClass",
smalltalk.method({
selector: "announcementClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@announcementClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcementClass",{},smalltalk.AnnouncementSubscription)})},
args: [],
source: "announcementClass\x0a\x09^announcementClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_announcementClass_",
smalltalk.method({
selector: "announcementClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@announcementClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"announcementClass:",{aClass:aClass},smalltalk.AnnouncementSubscription)})},
args: ["aClass"],
source: "announcementClass: aClass\x0a\x09announcementClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_block",
smalltalk.method({
selector: "block",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@block"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"block",{},smalltalk.AnnouncementSubscription)})},
args: [],
source: "block\x0a\x09^block",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_block_",
smalltalk.method({
selector: "block:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@block"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"block:",{aBlock:aBlock},smalltalk.AnnouncementSubscription)})},
args: ["aBlock"],
source: "block: aBlock\x0a\x09block := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_deliver_",
smalltalk.method({
selector: "deliver:",
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._handlesAnnouncement_(anAnnouncement);
if(smalltalk.assert($1)){
_st(_st(self)._block())._value_(anAnnouncement);
};
return self}, function($ctx1) {$ctx1.fill(self,"deliver:",{anAnnouncement:anAnnouncement},smalltalk.AnnouncementSubscription)})},
args: ["anAnnouncement"],
source: "deliver: anAnnouncement\x0a\x09(self handlesAnnouncement: anAnnouncement)\x0a\x09\x09ifTrue: [self block value: anAnnouncement]",
messageSends: ["ifTrue:", "value:", "block", "handlesAnnouncement:"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);

smalltalk.addMethod(
"_handlesAnnouncement_",
smalltalk.method({
selector: "handlesAnnouncement:",
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anAnnouncement)._isKindOf_(_st(self)._announcementClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"handlesAnnouncement:",{anAnnouncement:anAnnouncement},smalltalk.AnnouncementSubscription)})},
args: ["anAnnouncement"],
source: "handlesAnnouncement: anAnnouncement\x0a\x09^anAnnouncement isKindOf: self announcementClass",
messageSends: ["isKindOf:", "announcementClass"],
referencedClasses: []
}),
smalltalk.AnnouncementSubscription);



smalltalk.addClass('Announcer', smalltalk.Object, ['registry', 'subscriptions'], 'Kernel-Announcements');
smalltalk.Announcer.comment="The code is based on the announcements as [described by Vassili Bykov](http://www.cincomsmalltalk.com/userblogs/vbykov/blogView?searchCategory=Announcements%20Framework).\x0aThe Announcer holds annoncement subscriptions (`AnnouncementSubscription`) in a private registry.\x0a\x0aUse `#on:do:` to register subscriptions."
smalltalk.addMethod(
"_announce_",
smalltalk.method({
selector: "announce:",
category: 'announcing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@subscriptions"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._deliver_(anAnnouncement);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},smalltalk.Announcer)})},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x09subscriptions do: [:each |\x0a\x09\x09each deliver: anAnnouncement]",
messageSends: ["do:", "deliver:"],
referencedClasses: []
}),
smalltalk.Announcer);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@subscriptions"]=_st((smalltalk.Array || Array))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Announcer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09subscriptions := Array new",
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
smalltalk.Announcer);

smalltalk.addMethod(
"_on_do_",
smalltalk.method({
selector: "on:do:",
category: 'subscribing',
fn: function (aClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.AnnouncementSubscription || AnnouncementSubscription))._new();
_st($1)._block_(aBlock);
_st($1)._announcementClass_(aClass);
$2=_st($1)._yourself();
_st(self["@subscriptions"])._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock},smalltalk.Announcer)})},
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09block: aBlock;\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
messageSends: ["add:", "block:", "new", "announcementClass:", "yourself"],
referencedClasses: ["AnnouncementSubscription"]
}),
smalltalk.Announcer);



smalltalk.addClass('SystemAnnouncer', smalltalk.Announcer, [], 'Kernel-Announcements');
smalltalk.SystemAnnouncer.comment="My unique instance #current is the global announcer handling all Amber system-related announces"

smalltalk.SystemAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'accessing',
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
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.SystemAnnouncer.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.SystemAnnouncer.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.SystemAnnouncer.klass);


smalltalk.addClass('SystemAnnouncement', smalltalk.Object, ['theClass'], 'Kernel-Announcements');
smalltalk.SystemAnnouncement.comment="I am the superclass of all system announcements"
smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.SystemAnnouncement)})},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SystemAnnouncement);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.SystemAnnouncement)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.SystemAnnouncement);



smalltalk.addClass('ClassAnnouncement', smalltalk.SystemAnnouncement, ['theClass'], 'Kernel-Announcements');
smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ClassAnnouncement)})},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassAnnouncement);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ClassAnnouncement)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ClassAnnouncement);



smalltalk.addClass('ClassAdded', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassAdded.comment="I am emitted when a class is added to the system.\x0aSee ClassBuilder >> #addSubclassOf:... methods"


smalltalk.addClass('ClassCommentChanged', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassCommentChanged.comment="I am emitted when the comment of a class changes. (Behavior >> #comment)"


smalltalk.addClass('ClassDefinitionChanged', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassDefinitionChanged.comment="I am emitted when the defintion of a class changes.\x0aSee ClassBuilder >> #class:instanceVariableNames:"


smalltalk.addClass('ClassRemoved', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassRemoved.comment="I am emitted when a class is removed.\x0aSee Smalltalk >> #removeClass:"


smalltalk.addClass('ClassRenamed', smalltalk.ClassAnnouncement, [], 'Kernel-Announcements');
smalltalk.ClassRenamed.comment="I am emitted when a class is renamed.\x0aSee ClassBuilder >> #renameClass:to:"


smalltalk.addClass('MethodAnnouncement', smalltalk.SystemAnnouncement, ['method'], 'Kernel-Announcements');
smalltalk.addMethod(
"_method",
smalltalk.method({
selector: "method",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@method"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"method",{},smalltalk.MethodAnnouncement)})},
args: [],
source: "method\x0a\x09^ method",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodAnnouncement);

smalltalk.addMethod(
"_method_",
smalltalk.method({
selector: "method:",
category: 'accessing',
fn: function (aCompiledMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@method"]=aCompiledMethod;
return self}, function($ctx1) {$ctx1.fill(self,"method:",{aCompiledMethod:aCompiledMethod},smalltalk.MethodAnnouncement)})},
args: ["aCompiledMethod"],
source: "method: aCompiledMethod\x0a\x09method := aCompiledMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodAnnouncement);



smalltalk.addClass('MethodAdded', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('MethodModified', smalltalk.MethodAnnouncement, ['oldMethod'], 'Kernel-Announcements');
smalltalk.addMethod(
"_oldMethod",
smalltalk.method({
selector: "oldMethod",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@oldMethod"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"oldMethod",{},smalltalk.MethodModified)})},
args: [],
source: "oldMethod\x0a\x09^ oldMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodModified);

smalltalk.addMethod(
"_oldMethod_",
smalltalk.method({
selector: "oldMethod:",
category: 'accessing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@oldMethod"]=aMethod;
return self}, function($ctx1) {$ctx1.fill(self,"oldMethod:",{aMethod:aMethod},smalltalk.MethodModified)})},
args: ["aMethod"],
source: "oldMethod: aMethod\x0a\x09oldMethod := aMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.MethodModified);



smalltalk.addClass('MethodRemoved', smalltalk.MethodAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('PackageAnnouncement', smalltalk.SystemAnnouncement, ['package'], 'Kernel-Announcements');
smalltalk.addMethod(
"_package",
smalltalk.method({
selector: "package",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@package"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"package",{},smalltalk.PackageAnnouncement)})},
args: [],
source: "package\x0a\x09^ package",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageAnnouncement);

smalltalk.addMethod(
"_package_",
smalltalk.method({
selector: "package:",
category: 'accessing',
fn: function (aPackage){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@package"]=aPackage;
return self}, function($ctx1) {$ctx1.fill(self,"package:",{aPackage:aPackage},smalltalk.PackageAnnouncement)})},
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage",
messageSends: [],
referencedClasses: []
}),
smalltalk.PackageAnnouncement);



smalltalk.addClass('PackageAdded', smalltalk.PackageAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('PackageRemoved', smalltalk.PackageAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ProtocolAnnouncement', smalltalk.SystemAnnouncement, ['theClass', 'protocol'], 'Kernel-Announcements');
smalltalk.addMethod(
"_protocol",
smalltalk.method({
selector: "protocol",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@protocol"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"protocol",{},smalltalk.ProtocolAnnouncement)})},
args: [],
source: "protocol\x0a\x09^ protocol",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
"_protocol_",
smalltalk.method({
selector: "protocol:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@protocol"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"protocol:",{aString:aString},smalltalk.ProtocolAnnouncement)})},
args: ["aString"],
source: "protocol: aString\x0a\x09protocol := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@theClass"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"theClass",{},smalltalk.ProtocolAnnouncement)})},
args: [],
source: "theClass\x0a\x09^ theClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtocolAnnouncement);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@theClass"]=aClass;
return self}, function($ctx1) {$ctx1.fill(self,"theClass:",{aClass:aClass},smalltalk.ProtocolAnnouncement)})},
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtocolAnnouncement);



smalltalk.addClass('ProtocolAdded', smalltalk.ProtocolAnnouncement, [], 'Kernel-Announcements');


smalltalk.addClass('ProtocolRemoved', smalltalk.ProtocolAnnouncement, [], 'Kernel-Announcements');


