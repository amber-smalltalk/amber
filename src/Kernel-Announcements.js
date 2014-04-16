define("amber_core/Kernel-Announcements", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Kernel-Announcements');
smalltalk.packages["Kernel-Announcements"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('AnnouncementSubscription', globals.Object, ['valuable', 'announcementClass'], 'Kernel-Announcements');
globals.AnnouncementSubscription.comment="I am a single entry in a subscription registry of an `Announcer`.\x0aSeveral subscriptions by the same object is possible.";
smalltalk.addMethod(
smalltalk.method({
selector: "announcementClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@announcementClass"];
return $1;
},
args: [],
source: "announcementClass\x0a\x09^ announcementClass",
messageSends: [],
referencedClasses: []
}),
globals.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "announcementClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@announcementClass"]=aClass;
return self},
args: ["aClass"],
source: "announcementClass: aClass\x0a\x09announcementClass := aClass",
messageSends: [],
referencedClasses: []
}),
globals.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "block",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._deprecatedAPI();
$1=self._valuable();
return $1;
}, function($ctx1) {$ctx1.fill(self,"block",{},globals.AnnouncementSubscription)})},
args: [],
source: "block\x0a\x09\x22Use #valuable instead\x22\x0a\x09\x0a\x09self deprecatedAPI.\x0a\x09^ self valuable",
messageSends: ["deprecatedAPI", "valuable"],
referencedClasses: []
}),
globals.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "block:",
protocol: 'accessing',
fn: function (aValuable){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._deprecatedAPI();
self._valuable_(aValuable);
return self}, function($ctx1) {$ctx1.fill(self,"block:",{aValuable:aValuable},globals.AnnouncementSubscription)})},
args: ["aValuable"],
source: "block: aValuable\x0a\x09\x22Use #valuable instead\x22\x0a\x09\x0a\x09self deprecatedAPI.\x0a\x09self valuable: aValuable",
messageSends: ["deprecatedAPI", "valuable:"],
referencedClasses: []
}),
globals.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "deliver:",
protocol: 'announcing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._handlesAnnouncement_(anAnnouncement);
if(smalltalk.assert($1)){
_st(self._valuable())._value_(anAnnouncement);
};
return self}, function($ctx1) {$ctx1.fill(self,"deliver:",{anAnnouncement:anAnnouncement},globals.AnnouncementSubscription)})},
args: ["anAnnouncement"],
source: "deliver: anAnnouncement\x0a\x09(self handlesAnnouncement: anAnnouncement)\x0a\x09\x09ifTrue: [ self valuable value: anAnnouncement ]",
messageSends: ["ifTrue:", "handlesAnnouncement:", "value:", "valuable"],
referencedClasses: []
}),
globals.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "handlesAnnouncement:",
protocol: 'announcing',
fn: function (anAnnouncement){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1,$receiver;
$3=_st($Smalltalk())._globals();
$ctx1.sendIdx["globals"]=1;
$4=_st(self._announcementClass())._name();
$ctx1.sendIdx["name"]=1;
$2=_st($3)._at_($4);
$ctx1.sendIdx["at:"]=1;
if(($receiver = $2) == null || $receiver.isNil){
return false;
} else {
var class_;
class_=$receiver;
$1=_st(_st(_st($Smalltalk())._globals())._at_(_st(_st(_st(anAnnouncement)._class())._theNonMetaClass())._name()))._includesBehavior_(class_);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"handlesAnnouncement:",{anAnnouncement:anAnnouncement},globals.AnnouncementSubscription)})},
args: ["anAnnouncement"],
source: "handlesAnnouncement: anAnnouncement\x0a\x09\x22anAnnouncement might be announced from within another Amber environment\x22\x0a\x09\x0a\x09^ (Smalltalk globals at: self announcementClass name)\x0a\x09\x09ifNil: [ ^ false ]\x0a\x09\x09ifNotNil: [ :class |\x0a\x09\x09(Smalltalk globals at: anAnnouncement class theNonMetaClass name) includesBehavior: class ]",
messageSends: ["ifNil:ifNotNil:", "at:", "globals", "name", "announcementClass", "includesBehavior:", "theNonMetaClass", "class"],
referencedClasses: ["Smalltalk"]
}),
globals.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._valuable())._receiver();
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},globals.AnnouncementSubscription)})},
args: [],
source: "receiver\x0a\x09^ self valuable receiver",
messageSends: ["receiver", "valuable"],
referencedClasses: []
}),
globals.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "valuable",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@valuable"];
return $1;
},
args: [],
source: "valuable\x0a\x09^ valuable",
messageSends: [],
referencedClasses: []
}),
globals.AnnouncementSubscription);

smalltalk.addMethod(
smalltalk.method({
selector: "valuable:",
protocol: 'accessing',
fn: function (aValuable){
var self=this;
self["@valuable"]=aValuable;
return self},
args: ["aValuable"],
source: "valuable: aValuable\x0a\x09valuable := aValuable",
messageSends: [],
referencedClasses: []
}),
globals.AnnouncementSubscription);



smalltalk.addClass('AnnouncementValuable', globals.Object, ['valuable', 'receiver'], 'Kernel-Announcements');
globals.AnnouncementValuable.comment="I wrap `valuable` objects (typically instances of `BlockClosure`) with a `receiver` to be able to unregister subscriptions based on a `receiver`.";
smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@receiver"];
return $1;
},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
referencedClasses: []
}),
globals.AnnouncementValuable);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@receiver"]=anObject;
return self},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
globals.AnnouncementValuable);

smalltalk.addMethod(
smalltalk.method({
selector: "valuable",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@valuable"];
return $1;
},
args: [],
source: "valuable\x0a\x09^ valuable",
messageSends: [],
referencedClasses: []
}),
globals.AnnouncementValuable);

smalltalk.addMethod(
smalltalk.method({
selector: "valuable:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@valuable"]=anObject;
return self},
args: ["anObject"],
source: "valuable: anObject\x0a\x09valuable := anObject",
messageSends: [],
referencedClasses: []
}),
globals.AnnouncementValuable);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'evaluating',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._valuable())._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},globals.AnnouncementValuable)})},
args: [],
source: "value\x0a\x09^ self valuable value",
messageSends: ["value", "valuable"],
referencedClasses: []
}),
globals.AnnouncementValuable);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
protocol: 'evaluating',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._valuable())._value_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},globals.AnnouncementValuable)})},
args: ["anObject"],
source: "value: anObject\x0a\x09^ self valuable value: anObject",
messageSends: ["value:", "valuable"],
referencedClasses: []
}),
globals.AnnouncementValuable);



smalltalk.addClass('Announcer', globals.Object, ['registry', 'subscriptions'], 'Kernel-Announcements');
globals.Announcer.comment="I hold annoncement subscriptions (instances of `AnnouncementSubscription`) in a private registry.\x0aI announce (trigger) announces, which are then dispatched to all subscriptions.\x0a\x0aThe code is based on the announcements as [described by Vassili Bykov](http://www.cincomsmalltalk.com/userblogs/vbykov/blogView?searchCategory=Announcements%20Framework).\x0a\x0a## API\x0a\x0aUse `#announce:` to trigger an announcement.\x0a\x0aUse `#on:do:` or `#on:send:to:` to register subscriptions.\x0a\x0aWhen using `#on:send:to:`, unregistration can be done with `#unregister:`.\x0a\x0a## Usage example:\x0a\x0a    SystemAnnouncer current\x0a        on: ClassAdded\x0a        do: [ :ann | window alert: ann theClass name, ' added' ].";
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
protocol: 'announcing',
fn: function (anAnnouncement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@subscriptions"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._deliver_(anAnnouncement);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anAnnouncement:anAnnouncement},globals.Announcer)})},
args: ["anAnnouncement"],
source: "announce: anAnnouncement\x0a\x09subscriptions do: [ :each |\x0a\x09\x09each deliver: anAnnouncement ]",
messageSends: ["do:", "deliver:"],
referencedClasses: []
}),
globals.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.Announcer.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@subscriptions"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Announcer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09subscriptions := OrderedCollection new",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
protocol: 'subscribing',
fn: function (aClass,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._on_do_for_(aClass,aBlock,nil);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{aClass:aClass,aBlock:aBlock},globals.Announcer)})},
args: ["aClass", "aBlock"],
source: "on: aClass do: aBlock\x0a\x09self on: aClass do: aBlock for: nil",
messageSends: ["on:do:for:"],
referencedClasses: []
}),
globals.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:for:",
protocol: 'subscribing',
fn: function (aClass,aBlock,aReceiver){
var self=this;
function $AnnouncementSubscription(){return globals.AnnouncementSubscription||(typeof AnnouncementSubscription=="undefined"?nil:AnnouncementSubscription)}
function $AnnouncementValuable(){return globals.AnnouncementValuable||(typeof AnnouncementValuable=="undefined"?nil:AnnouncementValuable)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$6,$7,$5,$8,$2;
$1=self["@subscriptions"];
$3=_st($AnnouncementSubscription())._new();
$ctx1.sendIdx["new"]=1;
$4=$3;
$6=_st($AnnouncementValuable())._new();
_st($6)._valuable_(aBlock);
_st($6)._receiver_(aReceiver);
$7=_st($6)._yourself();
$ctx1.sendIdx["yourself"]=1;
$5=$7;
_st($4)._valuable_($5);
$ctx1.sendIdx["valuable:"]=1;
_st($3)._announcementClass_(aClass);
$8=_st($3)._yourself();
$2=$8;
_st($1)._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:for:",{aClass:aClass,aBlock:aBlock,aReceiver:aReceiver},globals.Announcer)})},
args: ["aClass", "aBlock", "aReceiver"],
source: "on: aClass do: aBlock for: aReceiver\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09valuable: (AnnouncementValuable new\x0a\x09\x09\x09valuable: aBlock;\x0a\x09\x09\x09receiver: aReceiver;\x0a\x09\x09\x09yourself);\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
messageSends: ["add:", "valuable:", "new", "receiver:", "yourself", "announcementClass:"],
referencedClasses: ["AnnouncementSubscription", "AnnouncementValuable"]
}),
globals.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:doOnce:",
protocol: 'subscribing',
fn: function (aClass,aBlock){
var self=this;
var subscription;
function $AnnouncementSubscription(){return globals.AnnouncementSubscription||(typeof AnnouncementSubscription=="undefined"?nil:AnnouncementSubscription)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($AnnouncementSubscription())._new();
_st($1)._announcementClass_(aClass);
$2=_st($1)._yourself();
subscription=$2;
_st(subscription)._valuable_((function(ann){
return smalltalk.withContext(function($ctx2) {
_st(self["@subscriptions"])._remove_(subscription);
return _st(aBlock)._value_(ann);
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1,1)})}));
_st(self["@subscriptions"])._add_(subscription);
return self}, function($ctx1) {$ctx1.fill(self,"on:doOnce:",{aClass:aClass,aBlock:aBlock,subscription:subscription},globals.Announcer)})},
args: ["aClass", "aBlock"],
source: "on: aClass doOnce: aBlock\x0a\x09| subscription |\x0a\x09\x0a\x09subscription := AnnouncementSubscription new\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself.\x0a\x09subscription valuable: [ :ann |\x0a\x09\x09subscriptions remove: subscription.\x0a\x09\x09aBlock value: ann ].\x0a\x0a\x09subscriptions add: subscription",
messageSends: ["announcementClass:", "new", "yourself", "valuable:", "remove:", "value:", "add:"],
referencedClasses: ["AnnouncementSubscription"]
}),
globals.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "on:send:to:",
protocol: 'subscribing',
fn: function (aClass,aSelector,anObject){
var self=this;
function $AnnouncementSubscription(){return globals.AnnouncementSubscription||(typeof AnnouncementSubscription=="undefined"?nil:AnnouncementSubscription)}
function $MessageSend(){return globals.MessageSend||(typeof MessageSend=="undefined"?nil:MessageSend)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$6,$7,$5,$8,$2;
$1=self["@subscriptions"];
$3=_st($AnnouncementSubscription())._new();
$ctx1.sendIdx["new"]=1;
$4=$3;
$6=_st($MessageSend())._new();
_st($6)._receiver_(anObject);
_st($6)._selector_(aSelector);
$7=_st($6)._yourself();
$ctx1.sendIdx["yourself"]=1;
$5=$7;
_st($4)._valuable_($5);
_st($3)._announcementClass_(aClass);
$8=_st($3)._yourself();
$2=$8;
_st($1)._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"on:send:to:",{aClass:aClass,aSelector:aSelector,anObject:anObject},globals.Announcer)})},
args: ["aClass", "aSelector", "anObject"],
source: "on: aClass send: aSelector to: anObject\x0a\x09subscriptions add: (AnnouncementSubscription new\x0a\x09\x09valuable: (MessageSend new\x0a\x09\x09\x09receiver: anObject;\x0a\x09\x09\x09selector: aSelector;\x0a\x09\x09\x09yourself);\x0a\x09\x09announcementClass: aClass;\x0a\x09\x09yourself)",
messageSends: ["add:", "valuable:", "new", "receiver:", "selector:", "yourself", "announcementClass:"],
referencedClasses: ["AnnouncementSubscription", "MessageSend"]
}),
globals.Announcer);

smalltalk.addMethod(
smalltalk.method({
selector: "unsubscribe:",
protocol: 'subscribing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@subscriptions"]=_st(self["@subscriptions"])._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._receiver()).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unsubscribe:",{anObject:anObject},globals.Announcer)})},
args: ["anObject"],
source: "unsubscribe: anObject\x0a\x09subscriptions := subscriptions reject: [ :each |\x0a\x09\x09each receiver = anObject ]",
messageSends: ["reject:", "=", "receiver"],
referencedClasses: []
}),
globals.Announcer);



smalltalk.addClass('SystemAnnouncer', globals.Announcer, [], 'Kernel-Announcements');
globals.SystemAnnouncer.comment="My unique instance is the global announcer handling all Amber system-related announces.\x0a\x0a## API\x0a\x0aAccess to the unique instance is done via `#current`";

globals.SystemAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=($ctx1.supercall = true, globals.SystemAnnouncer.klass.superclass.fn.prototype._new.apply(_st(self), []));
$ctx1.supercall = false;
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.SystemAnnouncer.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.SystemAnnouncer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},globals.SystemAnnouncer.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
globals.SystemAnnouncer.klass);


smalltalk.addClass('SystemAnnouncement', globals.Object, [], 'Kernel-Announcements');
globals.SystemAnnouncement.comment="I am the superclass of all system announcements";

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
globals.SystemAnnouncement.klass);


smalltalk.addClass('ClassAnnouncement', globals.SystemAnnouncement, ['theClass'], 'Kernel-Announcements');
globals.ClassAnnouncement.comment="I am the abstract superclass of class-related announcements.";
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
globals.ClassAnnouncement);

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
globals.ClassAnnouncement);



smalltalk.addClass('ClassAdded', globals.ClassAnnouncement, [], 'Kernel-Announcements');
globals.ClassAdded.comment="I am emitted when a class is added to the system.\x0aSee ClassBuilder >> #addSubclassOf:... methods";


smalltalk.addClass('ClassCommentChanged', globals.ClassAnnouncement, [], 'Kernel-Announcements');
globals.ClassCommentChanged.comment="I am emitted when the comment of a class changes. (Behavior >> #comment)";


smalltalk.addClass('ClassDefinitionChanged', globals.ClassAnnouncement, [], 'Kernel-Announcements');
globals.ClassDefinitionChanged.comment="I am emitted when the definition of a class changes.\x0aSee ClassBuilder >> #class:instanceVariableNames:";


smalltalk.addClass('ClassMigrated', globals.ClassAnnouncement, ['oldClass'], 'Kernel-Announcements');
globals.ClassMigrated.comment="I am emitted when a class is migrated.";
smalltalk.addMethod(
smalltalk.method({
selector: "oldClass",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@oldClass"];
return $1;
},
args: [],
source: "oldClass\x0a\x09^ oldClass",
messageSends: [],
referencedClasses: []
}),
globals.ClassMigrated);

smalltalk.addMethod(
smalltalk.method({
selector: "oldClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@oldClass"]=aClass;
return self},
args: ["aClass"],
source: "oldClass: aClass\x0a\x09oldClass := aClass",
messageSends: [],
referencedClasses: []
}),
globals.ClassMigrated);



smalltalk.addClass('ClassMoved', globals.ClassAnnouncement, ['oldPackage'], 'Kernel-Announcements');
globals.ClassMoved.comment="I am emitted when a class is moved from one package to another.";
smalltalk.addMethod(
smalltalk.method({
selector: "oldPackage",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@oldPackage"];
return $1;
},
args: [],
source: "oldPackage\x0a\x09^ oldPackage",
messageSends: [],
referencedClasses: []
}),
globals.ClassMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "oldPackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
self["@oldPackage"]=aPackage;
return self},
args: ["aPackage"],
source: "oldPackage: aPackage\x0a\x09oldPackage := aPackage",
messageSends: [],
referencedClasses: []
}),
globals.ClassMoved);



smalltalk.addClass('ClassRemoved', globals.ClassAnnouncement, [], 'Kernel-Announcements');
globals.ClassRemoved.comment="I am emitted when a class is removed.\x0aSee Smalltalk >> #removeClass:";


smalltalk.addClass('ClassRenamed', globals.ClassAnnouncement, [], 'Kernel-Announcements');
globals.ClassRenamed.comment="I am emitted when a class is renamed.\x0aSee ClassBuilder >> #renameClass:to:";


smalltalk.addClass('MethodAnnouncement', globals.SystemAnnouncement, ['method'], 'Kernel-Announcements');
globals.MethodAnnouncement.comment="I am the abstract superclass of method-related announcements.";
smalltalk.addMethod(
smalltalk.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@method"];
return $1;
},
args: [],
source: "method\x0a\x09^ method",
messageSends: [],
referencedClasses: []
}),
globals.MethodAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "method:",
protocol: 'accessing',
fn: function (aCompiledMethod){
var self=this;
self["@method"]=aCompiledMethod;
return self},
args: ["aCompiledMethod"],
source: "method: aCompiledMethod\x0a\x09method := aCompiledMethod",
messageSends: [],
referencedClasses: []
}),
globals.MethodAnnouncement);



smalltalk.addClass('MethodAdded', globals.MethodAnnouncement, [], 'Kernel-Announcements');
globals.MethodAdded.comment="I am emitted when a `CompiledMethod` is added to a class.";


smalltalk.addClass('MethodModified', globals.MethodAnnouncement, ['oldMethod'], 'Kernel-Announcements');
globals.MethodModified.comment="I am emitted when a `CompiledMethod` is modified (a new method is installed). I hold a reference to the old method being replaced.";
smalltalk.addMethod(
smalltalk.method({
selector: "oldMethod",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@oldMethod"];
return $1;
},
args: [],
source: "oldMethod\x0a\x09^ oldMethod",
messageSends: [],
referencedClasses: []
}),
globals.MethodModified);

smalltalk.addMethod(
smalltalk.method({
selector: "oldMethod:",
protocol: 'accessing',
fn: function (aMethod){
var self=this;
self["@oldMethod"]=aMethod;
return self},
args: ["aMethod"],
source: "oldMethod: aMethod\x0a\x09oldMethod := aMethod",
messageSends: [],
referencedClasses: []
}),
globals.MethodModified);



smalltalk.addClass('MethodMoved', globals.MethodAnnouncement, ['oldProtocol'], 'Kernel-Announcements');
globals.MethodMoved.comment="I am emitted when a `CompiledMethod` is moved to another protocol. I hold a refernce to the old protocol of the method.";
smalltalk.addMethod(
smalltalk.method({
selector: "oldProtocol",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@oldProtocol"];
return $1;
},
args: [],
source: "oldProtocol\x0a\x09^ oldProtocol",
messageSends: [],
referencedClasses: []
}),
globals.MethodMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "oldProtocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@oldProtocol"]=aString;
return self},
args: ["aString"],
source: "oldProtocol: aString\x0a\x09oldProtocol := aString",
messageSends: [],
referencedClasses: []
}),
globals.MethodMoved);



smalltalk.addClass('MethodRemoved', globals.MethodAnnouncement, [], 'Kernel-Announcements');
globals.MethodRemoved.comment="I am emitted when a `CompiledMethod` is removed from a class.";


smalltalk.addClass('PackageAnnouncement', globals.SystemAnnouncement, ['package'], 'Kernel-Announcements');
globals.PackageAnnouncement.comment="I am the abstract superclass of package-related announcements.";
smalltalk.addMethod(
smalltalk.method({
selector: "package",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@package"];
return $1;
},
args: [],
source: "package\x0a\x09^ package",
messageSends: [],
referencedClasses: []
}),
globals.PackageAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "package:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
self["@package"]=aPackage;
return self},
args: ["aPackage"],
source: "package: aPackage\x0a\x09package := aPackage",
messageSends: [],
referencedClasses: []
}),
globals.PackageAnnouncement);



smalltalk.addClass('PackageAdded', globals.PackageAnnouncement, [], 'Kernel-Announcements');
globals.PackageAdded.comment="I am emitted when a `Package` is added to the system.";


smalltalk.addClass('PackageClean', globals.PackageAnnouncement, [], 'Kernel-Announcements');
globals.PackageClean.comment="I am emitted when a package is committed and becomes clean.";


smalltalk.addClass('PackageDirty', globals.PackageAnnouncement, [], 'Kernel-Announcements');
globals.PackageDirty.comment="I am emitted when a package becomes dirty.";


smalltalk.addClass('PackageRemoved', globals.PackageAnnouncement, [], 'Kernel-Announcements');
globals.PackageRemoved.comment="I am emitted when a `Package` is removed from the system.";


smalltalk.addClass('ProtocolAnnouncement', globals.SystemAnnouncement, ['theClass', 'protocol'], 'Kernel-Announcements');
globals.ProtocolAnnouncement.comment="I am the abstract superclass of protocol-related announcements.";
smalltalk.addMethod(
smalltalk.method({
selector: "protocol",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@protocol"];
return $1;
},
args: [],
source: "protocol\x0a\x09^ protocol",
messageSends: [],
referencedClasses: []
}),
globals.ProtocolAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "protocol:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@protocol"]=aString;
return self},
args: ["aString"],
source: "protocol: aString\x0a\x09protocol := aString",
messageSends: [],
referencedClasses: []
}),
globals.ProtocolAnnouncement);

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
globals.ProtocolAnnouncement);

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
globals.ProtocolAnnouncement);



smalltalk.addClass('ProtocolAdded', globals.ProtocolAnnouncement, [], 'Kernel-Announcements');
globals.ProtocolAdded.comment="I am emitted when a protocol is added to a class.";


smalltalk.addClass('ProtocolRemoved', globals.ProtocolAnnouncement, [], 'Kernel-Announcements');
globals.ProtocolRemoved.comment="I am emitted when a protocol is removed from a class.";

});
